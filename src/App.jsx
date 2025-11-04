import './index.css'
import Header from './intro-header'

function App() {
    return (
      <main>
        <Header />
        <div className = "intro-form">
          <form className = "intro-inputs">
            <label>
              What's your favorite movie and why?
              <textarea placeholder = "The Shawshank Redemption because it taught me to never give up hope no matter how hard the life gets"></textarea>
            </label>
            <label>
              Are you in the mood for something new or classic?
              <input type = "text" placeholder = "I want to watch movies that were released after 1990"></input>
            </label>
            <label>
              Do you wanna have fun or do you want something serious?
              <input type = "text" placeholder = "I want to watch something stupid and fun"></input>
            </label>
            <input className = "form-btn" type = "submit" text = "Submit" />
          </form>
        </div>
      </main>
    )
}

export default App
