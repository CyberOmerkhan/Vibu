import popcorn from "../images/popcorn.webp"

export default function Header(){
    return (
        <header>
            <img className = "logo" src = {popcorn} alt = "NO MOVIES" />
            <h1>Vibu.ai</h1>
        </header>
    )
}