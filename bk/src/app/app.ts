import express from "express"
import cors from "cors"
import { _ as env } from "config/env"
import morgan from 'morgan'

import { Routes } from "@app/routes"

import { request as request_mw } from "@app/middleware/requestMiddleware"
import { DataBaseUtility } from "@core/dataBaseUtility"


class App {

  private app: express.Application
  private routes: Routes
  private dataBaseUtility: DataBaseUtility = new DataBaseUtility()

  constructor() {
    this.app = express()
    this.routes = new Routes(this.app)
  }

  public async init() {
    if(!global.env) global.env = {}
    if(env){
      for (const _k of Object.keys(env)) {
        global.env[_k] = env[_k]
      }
    }
    
    Object.freeze(global.env)

    this.dataBaseUtility.connect() 

    if (global.env.mode === 'dev') {
      this.app.use(morgan('dev'))
    }
    
    this.app.use(express.json())
    this.app.use(cors())
    this.app.use(request_mw())
    
    this.app.get('/', (req, res) => {
        res.send('API is running')
    })

    this.routes.init()

    
    const PORT = process.env.PORT || 5001
    
    this.app.listen(PORT, console.log(`Server running on port ${PORT}`))
  }

}
export  { App }