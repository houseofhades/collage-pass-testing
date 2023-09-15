

const API = {
    "POST": {
        "/": async (req: Request) => {
            let resp = {
                msg: `This is a post Request to ${req.url}`,
                yourRequest: await (req.json())
            }
            return new Response(JSON.stringify(resp))
        }
    },
    "GET": {
        "/": (req: Request) => {
            let resp = {
                msg: `This is a post Request to ${req.url}`,
                yourRequest: "No Body"
            }
            return new Response(JSON.stringify(resp))
        }
    }
}



const server = Bun.serve({
    port: 3000,
    fetch(request: Request) {
        let resp: Response = API[request.method]["/"](request);
        return resp
    },
});

console.log(`Listening on localhost :${server.port}`);