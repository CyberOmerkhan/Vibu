import './index.css'
import Header from './intro-header'

function App() {
    return (
      <>
        <Header />
        <form>
          <input type = "text" placeholder = "How many people?"></input>
          <input type = "text" placeholder = "How much time do you have?"></input>
          <input type = "submit" text = "Submit" />
        </form>
      </>
    )
}

export default App
