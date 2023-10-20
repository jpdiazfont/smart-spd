import SimpleLayout from "../../layouts/simpleLayout"



const HomeScreen = ()=>{
  return (
    <SimpleLayout>
      <div className="text-center p-16">
        <img src="/logo.png" className="h-96 w-96 m-auto" />
        <h1 className="text-6xl text-slate-700">Welcome to <span className="font-bold">Smart SPD</span></h1>
        <p className="text-slate-700">High Voltage IOT</p>
      </div>
    </SimpleLayout>
  )
}

export default HomeScreen