import OpenAI from "openai";

const openai = OpenAI();

const embedding = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: "I am the lion. The lion and the fox",
})

console.log(embedding)