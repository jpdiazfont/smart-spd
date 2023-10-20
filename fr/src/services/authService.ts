import axios, { AxiosError } from 'axios'
import { config } from '../config/env'
import { useContext } from 'react'

const URL_BACKEND = config.backend


class AuthService {

  private prefix = 'auth'

  constructor() {
   
  }

  public login = async (_params:{username:string, password:string}) => {
    try{
      const query = {
        ..._params
      }
      const response = await axios.post(`${URL_BACKEND}/${this.prefix}/login`, query)
      if(response.data){
        return response.data
      }

    } catch (error) {
      if(error instanceof AxiosError){
        return error.response
      } else {
        console.log('-------error:', error)
      }
    }
  }

  public register = async (_params:{username:string, password:string}) => {
    try{
      const query = {
        ..._params
      }
      const response = await axios.post(`${URL_BACKEND}/${this.prefix}/register`, query)
      if(response.data){
        return response.data
      }

    } catch (error) {
      if(error instanceof AxiosError){
        return error.response
      } else {
        console.log('-------error:', error)
      }
    }
  }

}

export const authService = new AuthService()