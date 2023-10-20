import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import moment from 'moment'

import { User } from "@app/models"
import { responseUtility } from "@core/responseUtility"

class AuthService {
  
  constructor () {}
  
  public async login (_params: {username: string, password?: string, code?:string}) {
    try{
      const user = await User.findOne({ username: _params.username }).lean()
      if(!user) return responseUtility.error('auth.user_not_found')
      
      if(_params.password && user.password){
        const compare = await this.compare(_params.password, user.password)
        if(!compare) return responseUtility.error('auth.wrong_password')
      } else if (_params.code && user.code?.number) {
        if(moment.utc().diff(moment.utc(user.code.date), 'h') < 6){
          const compare = _params.code === user.code.number
          if(!compare) return responseUtility.error('auth.wrong_code')
        } else {
          return responseUtility.error('auth.code_expired')
        }
      } else {
        return responseUtility.error('auth.without_password_or_code')
      }

      const token = await this.token(user)
      
      delete user.password
      delete user.code
      
      return responseUtility.success({ user, token })
      
    } catch (error) {
      console.log('error', error)
      return responseUtility.error('auth.fail_action')
    }
  }
  
  public async changePassword (_params: {user: string, password: string, new: string}) {
    try{
      const user = await User.findOne({ _id: _params.user }).select('_id password').lean()
      if(!user) return responseUtility.error('auth.user_not_found')
      
      const compare = await this.compare(_params.password, user.password)
      if(!compare) return responseUtility.error('auth.wrong_password')
      
      const hash = await this.hash(_params.new)
      await User.updateOne({ _id: _params.user }, { password: hash }, {upsert: true, useFindAndModify: false})
      
      return responseUtility.success()
      
    } catch (error) {
      console.log('error', error)
    }
  }
  
  public async generateCode (_params: {username: string}) {
    try{
      const user = await User.findOne({ username: _params.username }).select('_id code').lean()
      if(!user) return responseUtility.error('auth.user_not_found')
      
      const today = moment.utc()
      const today_formatted = today.format('YYYY-MM-DD')
      
      const code_date = user?.code?.date ? moment.utc(user.code.date) : today
      const code_date_formatted = code_date.format('YYYY-MM-DD')
      
      if( user?.code?.date && today.diff(code_date, 's') < 10) return responseUtility.error('auth.need_to_wait_code')
      
      let times = user?.code?.times || 0
      times = code_date_formatted !== today_formatted ? 1 : ++times
      
      if( code_date_formatted === today_formatted && times > 10) return responseUtility.error('auth.max_code_generated')
      
      const code = Math.floor(100000 + Math.random() * 900000)
      
      await User.updateOne({ _id: user._id }, { code: {number: code, times, date: today.toISOString() } }, {upsert: true, useFindAndModify: false})
      
      //TODO: Need to send the code via message
      return responseUtility.success({_code: code})
      
    } catch (error) {
      console.log('error', error)
    }
  }
  

  public async register (_params:{username:string, password:string}) {
    try{
      const exists = await User.findOne({ username: _params.username }).lean()
      if(exists) return responseUtility.error('user.register.username_exists')

      const user = await User.create({
        username: _params.username,
        password: await this.hash(_params.password)
      })

      const token = await this.token(user.toObject())

      return responseUtility.success({user: user.toObject(), token})


    } catch (error) {
      console.log('error', error)
    }
  }

  public async hash (password) {
    try{
      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(password, salt)
      return hash
    } catch (error) {
      console.log('error', error)
    }
  }
  
  private async token (user) {
    try{
      return jwt.sign({ user: user._id, locale: user.locale }, global.env.jwt, {
        expiresIn: '30d'
      })
    } catch (error) {
      console.log('error', error)
    }
  }
  
  private async compare (password, hash) {
    try{
      return await bcrypt.compare(password, hash)
    } catch (error) {
      console.log('error', error)
    }
  }
}

export const authService = new AuthService()
export { AuthService }