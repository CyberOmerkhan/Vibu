import './index.css'
import Header from './intro-header'

function App() {
    return (
      <div className = "intro">
        <Header />
        <div className = "intro-form">
          <form className = "intro-inputs">
            <input type = "text" placeholder = "How many people?"></input>
            <input type = "text" placeholder = "How much time do you have?"></input>
            <input className = "form-btn" type = "submit" text = "Submit" />
          </form>
        </div>
      </div>
    )
}

export default App
