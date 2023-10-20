import { ReactNode } from "react"
import Navbar from "../components/navbar/navbar"
import './masterLayout.scss'


const MasterLayout = (props:{children:ReactNode})=>{
  return (
    <div className="bg-slate-200 min-h-90-svh">
      <Navbar layout={"simple"} />
      <div className="container bg-white mt-2 md:mx-auto shadow-inner main-container min-h-90-svh">
        {props.children}
      </div>
    </div>
  )
}

export default MasterLayout