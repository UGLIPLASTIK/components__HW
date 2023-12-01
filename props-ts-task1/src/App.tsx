import './App.css'
import Stars from './components/stars'

function App() {
const count = 5;

if (!(count < 1) && !(count > 5) && typeof(count) == 'number') return <Stars count={count}/>
}

export default App
