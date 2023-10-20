import { useContext, useRef } from "react"
import SimpleLayout from "../../layouts/simpleLayout"
import { useNavigate } from "react-router-dom"
import { authService } from "../../services/authService"
import { TbLogin2 } from "react-icons/tb"
import { IMainContext } from "../../contexts/mainContext"
import { BaseContext } from "../../contexts/baseContext"



const RegisterScreen = ()=>{
  
  const context = useContext<IMainContext>(BaseContext)

  const _username = useRef<HTMLInputElement | null>(null)
  const _password = useRef<HTMLInputElement | null>(null)
  const navigation = useNavigate()
  const handleSubmit = async()=>{
    if(_username.current && _password.current){
      const response:any = await authService.register({
        username: _username.current.value,
        password: _password.current.value
      })

      if(response.code === 200){
        context.setState({token: response.token, user: response.user})
        navigation('/dashboard')
      }
    }
  }
  return (
    <SimpleLayout>
      <div className="flex justify-center">
        <div className="flex-initial w-96">
          <br /><br />
          <img src="/logo.png" className="h-40 w-40 m-auto" />
          <input ref={_username}  type="text" className="p-2 rounded-full w-full shadow my-3 bg-slate-200" placeholder="Username"/>
          <input ref={_password} type="password" className="p-2 rounded-full w-full shadow my-3 bg-slate-200" placeholder="Password"/>
          <div className="w-full text-center">
            <button onClick={handleSubmit} className="mx-auto w-32 p-2 bg-slate-500 text-white my-3 shadow-md rounded-full">Sign up <TbLogin2 className="inline w-5 h-5"/></button>
          </div>
        </div>
      </div>

    </SimpleLayout>
  )
}

export default RegisterScreen