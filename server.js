import http from "http"

const server = http.createServer(async (req, res) => {
    if(req.url == "/api"){
        res.statusCode = 200;
        res.end("YOOO you've got this")
    }
    else{
        res.statusCode = 404;
        res.end("Not your best request.")
    }
})

