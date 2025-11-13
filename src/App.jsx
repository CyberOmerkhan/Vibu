import './index.css'
import Header from './intro-header'

async function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const favoriteMovie = formData.get("favorite-movie");
  const mood = formData.get("mood");
  const genre = formData.get("genre");

  const response = await fetch("http://localhost:3000/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      favoriteMovie: favoriteMovie,
      mood: mood,
      genre: genre,
    })
  });
  console.log("favorite movie:", favorite_movie, "\nmood:", mood, "\ngenre:", genre);
}

function App() {
    return (
      <main>
        <Header />
        <div className = "intro-form">
          <form className = "intro-inputs" onSubmit = {handleSubmit}>
            <label>
              What's your favorite movie and why?
              <textarea name = "favorite-movie" placeholder = "The Shawshank Redemption because it taught me to never give up hope no matter how hard the life gets"></textarea>
            </label>
            <label>
              Are you in the mood for something new or classic?
              <input name = "mood" type = "text" placeholder = "I want to watch movies that were released after 1990"></input>
            </label>
            <label>
              Do you want to have fun or do you want something serious?
              <input name = "genre" type = "text" placeholder = "I want to watch something stupid and fun"></input>
            </label>
            <input className = "form-btn" type = "submit" text = "Submit" />
          </form>
        </div>
      </main>
    )
}

export default App
