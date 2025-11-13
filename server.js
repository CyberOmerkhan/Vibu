import http from "http"

const server = http.createServer(async (req, res) => {
    if(req.url == "/api"){
        res.end()
        res.statusCode = 200;
        res.end("YOOO you've got this")
    }
})