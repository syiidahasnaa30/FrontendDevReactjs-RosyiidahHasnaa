import RestaurantApp from './RestaurantApp'
import './styles/style.css'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <RestaurantApp />
      </BrowserRouter>
    </>
  )
}

export default App
