import {Application} from 'express'
import { AuthRoute } from '@app/routes/authRote'


class Routes {
  
  private app: Application
  private prefix: string = '/api'
  
  private authRoute: AuthRoute


  constructor(app: Application) {
    this.app = app
    this.authRoute = new AuthRoute(this.app, this.prefix)
  }

  public init() {
    try{

      this.authRoute.init()

    } catch (error) {
      console.log('error', error)
    }
  }

}

export { Routes }