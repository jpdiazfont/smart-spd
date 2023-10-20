import './App.css'
import MainContext from './contexts/mainContext'
import Router from './router/router'

function App() {


  return (
    <MainContext>
      <Router/>
    </MainContext>
  )
}

export default App
