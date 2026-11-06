import { createServer } from "http";
import { route } from "./routes/route";
const server = createServer((req, res) => {
    route(req, res);
});
server.listen(5000, () => {
    console.log("Server is running on port 5000");
});
