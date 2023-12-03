import './App.css'
import data from './data/etsy.json'
import Listing from './components/Listing'

function App() {
  console.log(data)
  return (
    <Listing item={data}/>
  )
}

export default App
