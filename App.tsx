
import ProductList from './Components/ProductList/ProductList'
import NaivgationPanel from './Components/navigationPanel/NaivgationPanel'
import './App.css'

function App() {
  return (
    <>
      <div>
      <NaivgationPanel />
        
      </div>
      <h1>My first warehouse interface</h1>
      <div>
         <ProductList />
         <NaivgationPanel />
      </div>
    </>
  )
}

export default App
