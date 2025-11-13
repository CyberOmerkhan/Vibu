import http from "http"
import movies from "./movies.js"
import OpenAI from "openai";
import "dotenv/config"
import cosineSimilarity from "cosine-similarity";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const PORT = 3000;

async function embedMovies() {
    const embeddings = await Promise.all(
        movies.map(async (movie) => {
            const response = await openai.embeddings.create({
                model: "text-embedding-3-small",
                input: `${movie.title}\n${movie.text}`,
            });
            return {
                ...movie,
                embedding: response.data[0].embedding,
            };
        })
    );
    return embeddings
}

async function serverSetup() {
    console.log(`The server is running on a port ${PORT}\n`);
    const moviesWithEmbeddings = await embedMovies();
    console.log(moviesWithEmbeddings);
}

const server = http.createServer(async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if(req.method == "OPTIONS") {
        res.writeHead(204);
        return res.end();
    }
    if(req.url == "/api" && req.method == "POST"){
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {
            try {
                const data = JSON.parse(body);
                console.log("received the data:", data);

                res.statusCode = 200;
                res.setHeader("Content-Type", "text/plain");
                res.end("YOOO you've got this");
            } catch (err) {
                console.error("JSON parse error:", err);w
                res.statusCode = 400;
                res.end("Bad JSON");
            }
        });
    }
    else{
        res.statusCode = 404;
        res.end("Not your best request.")
    }
})

server.listen(PORT, () => serverSetup())