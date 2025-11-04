import popcorn from "../images/popcorn.webp"

export default function Header(){
    return (
        <header>
            <img className = "logo" src = {popcorn} alt = "popcorn broken" />
            <h1>Vibu.ai</h1>
        </header>
    )
}