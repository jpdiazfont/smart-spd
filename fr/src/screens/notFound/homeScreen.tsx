import SimpleLayout from "../../layouts/simpleLayout"



const NotFoundScreen = ()=>{
  return (
    <SimpleLayout>
      <div className="text-center p-16">
        <img src="/logo.png" className="h-96 w-96 m-auto" />
        <h1 className="text-6xl text-slate-700">404 <span className="font-bold">Not Found</span></h1>
      </div>
    </SimpleLayout>
  )
}

export default NotFoundScreen