import { Route, Router } from 'react-router-dom'
import { RoutesPlusNotFound } from './components/utilities/routes-with-notFound.component'
import Home from './components/pages/public/home/home.component'

function App() {

  //Logica
  return (
    //Todo lo que retorna el componente App se renderiza en el componente root
    // Todo: Add route with not found page - snackbar providers - mui theme provider - and guards
        <RoutesPlusNotFound>
          <Route path="/" element={<Home/>}/>
        </RoutesPlusNotFound>

  )
}

export default App
