
import { IncomingMessage, ServerResponse } from "http";
import { readProducts } from "../services/products.service";
import type { Product } from "../types/products.type.ts";
import { parseBody } from "../utility/parseBody";



export const productsController = async (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;
  const splitContent = url?.split("/");
  const id = splitContent && splitContent[1] === "products" ? Number(splitContent[2]) : undefined;
  const products = readProducts();
  const product = products.find((p :Product) => p.id === id);

  if (id && method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(product));
  } else if (method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } else if (method === "POST") {
    const body = await parseBody(req);
    console.log(body);
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(body);
  }

};
