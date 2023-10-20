import { useContext } from "react"
import MasterLayout from "../../layouts/masterLayout"
import { IMainContext } from "../../contexts/mainContext"
import { BaseContext } from "../../contexts/baseContext"
import { Chart } from "../../components/chart/chart"



const DashboardScreen = ()=>{
  const context = useContext<IMainContext>(BaseContext)
  console.log('-------zadiaz:context', context.getState())
  const initialData = [
    { time: '2018-12-22', value: 32.51 },
    { time: '2018-12-23', value: 31.11 },
    { time: '2018-12-24', value: 27.02 },
    { time: '2018-12-25', value: 27.32 },
    { time: '2018-12-26', value: 25.17 },
    { time: '2018-12-27', value: 28.89 },
    { time: '2018-12-28', value: 25.46 },
    { time: '2018-12-29', value: 23.92 },
    { time: '2018-12-30', value: 22.68 },
    { time: '2018-12-31', value: 22.67 },
  ]
  return (
    <MasterLayout>
      <h1 className="text-4xl">Hello, <span className="font-bold">{context.getState().user?.username}</span>!</h1>
      <span></span>
      <Chart data={initialData} />
    </MasterLayout>
  )
}

export default DashboardScreen