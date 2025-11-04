import './index.css'
import Header from './intro-header'

function App() {
    return (
      <div class = "intro">
        <Header />
        <div class = "intro-form">
          <form class = "intro-inputs">
            <input type = "text" placeholder = "How many people?"></input>
            <input type = "text" placeholder = "How much time do you have?"></input>
            <input class = "form-btn" type = "submit" text = "Submit" />
          </form>
        </div>
      </div>
    )
}

export default App
