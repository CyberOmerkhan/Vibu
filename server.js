import http from "http"

const PORT = 3000;

const server = http.createServer(async (req, res) => {
    console.log(req.url)
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

server.listen(PORT, () => {
    console.log(`The server is running on a port ${PORT}`)
})