import { ReactNode, useEffect, useState } from "react"

import './modal.scss'
import { TbForbid } from "react-icons/tb"

const Modal = (props:{ title?:string,open:boolean, children: ReactNode, size?:string, close: () => void})=>{

  const [size, setSize] = useState('w-1/3')

  useEffect(()=>{
    if(props.size){
      if(props.size === 'sm'){
        setSize('w-1/3')
      } else if( props.size === 'md'){
        setSize('w-1/2')
      } else if( props.size === 'lg'){
        setSize('w-3/4')
      } else if( props.size === 'xl'){
        setSize('w-4/5')
      }
    }

  }, [props.size])

  return (
    <>
      <div className={`backdrop ${props.open ? 'block' : 'hidden'} fixed left-0 w-full`} onClick={props.close}></div>
        <dialog className={`modal ${props.open ? 'open' : 'close'} ${size} w-1/3 z-10 relative bg-slate-300 text-white rounded-xl`} open={props.open}>
          {
            props.title && 
            <div className="p-2 font-bold title">
              { props.title }
            </div>
          }
          <div className="p-2">
            {props.children}

          </div>
          <div onClick={props.close} className="absolute corner-button right-0 text-white flex top-0 bg-slate-200 h-7 w-7">
            <TbForbid className='w-5 h-5 absolute icon-center' />
          </div>
        </dialog>
      
    </>

  )
}

export default Modal