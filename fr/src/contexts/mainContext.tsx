import React, { useState } from "react";
import { BaseContext } from "./baseContext";

export interface MainContextProps {
  children: React.ReactNode
}

export interface MainContextState {
  auth?:{
    token:string
  },
  user?:{
    username:string
  }
}

export interface IMainContext {
  setState: (_params: unknown)  => void
  getState: ()  => MainContextState
}


export default function MainContext(props:MainContextProps) {
  const [state, setState] = useState<MainContextState>({})


  const getState = ()=>{
    return state
  }


  return (
    <BaseContext.Provider
      value={
        {
          setState,
          getState
        }
      }
    >
      {props.children}
    </BaseContext.Provider>
  )
}
