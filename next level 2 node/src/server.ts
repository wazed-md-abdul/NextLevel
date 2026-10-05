import { createServer , Server , IncomingMessage, ServerResponse } from "http";
import { route } from "./routes/route";
const server: Server = createServer((req: IncomingMessage,res: ServerResponse
) => {
  route(req, res);
});


server.listen(5000 , () => {
  console.log("Server is running on port 5000");
});
