import ItemListConteiner from "./componentes/ItemListConteiner/ItemListConteiner"
import NavBar from "./componentes/NavBar/NavBar"

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListConteiner greeting = {"Kingdom"}/>
    </div>
  )
}

export default App
