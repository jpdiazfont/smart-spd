//@IMPORT: Libraries
import { Application } from "express"

//@IMPORT: Controllers
import { AuthController } from "@app/controllers/auth/authController"

//@IMPORT: Utils
import { RouterUtility, IRouteParams } from "@core/routerUtility"


class AuthRoute {

  private className:string = 'AuthRoute'  
  private app: Application
  private routerUtility: RouterUtility
  private controller: AuthController = new AuthController()
  
  constructor (app: Application, prefix: string) {
    this.app = app
    this.routerUtility = new RouterUtility(this.app, `${prefix}${this.prefix}`)
  }
  
  private prefix: string = '/auth'
  
  private routes: Array<IRouteParams> = [
    { method: 'post', path: '/login', handler: this.controller.login , middleware: [] },
    { method: 'post', path: '/register', handler: this.controller.register , middleware: [] },
    { method: 'post', path: '/change-password', handler: this.controller.changePassword , middleware: [] },
    { method: 'post', path: '/generate-code', handler: this.controller.generateCode , middleware: [] },
  ] 

  public init () {
    for (const path of this.routes) {
      this.routerUtility.route({
        method: path.method,
        path: path.path,
        handler: path.handler,
        middleware: path.middleware
      })
    }
  }
}

export { AuthRoute }







