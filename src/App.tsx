import './App.css'
import { Skills } from './Components/Skills/Skills'
import { Application } from './Components/Application/Application'

const App = () => {
  return (
    <div>
      <Application />
      <Skills skills={[""]}/>
    </div>
  )
}

export default App
