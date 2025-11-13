import OpenAI from "openai";
import "dotenv/config"

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const embedding = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: "I am the lion. The lion and the fox",
})

console.log(embedding.data[0].embedding)