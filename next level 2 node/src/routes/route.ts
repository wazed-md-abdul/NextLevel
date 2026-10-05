
import { IncomingMessage, ServerResponse } from "http";
import { productsController } from "../controller/products.controller";

export const route = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;
  if (url === "/" && method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end('server is working 200');
  }
  else if (url?.startsWith("/products")) {
    productsController(req, res);
  }
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
};
