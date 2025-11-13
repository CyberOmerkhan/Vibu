import http from "http"

const PORT = 3000;

const server = http.createServer(async (req, res) => {
    if(req.url == "/api" && req.method == "POST"){
        res.statusCode = 200;
        res.end("YOOO you've got this")
    }
    else{
        res.statusCode = 404;
        res.end("Not your best request.")
    }
})

server.listen(PORT, () => {
    console.log(`The server is running on a port ${PORT}`)
})