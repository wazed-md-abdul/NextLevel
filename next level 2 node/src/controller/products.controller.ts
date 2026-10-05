
import { IncomingMessage, ServerResponse } from "http";
import { readProducts } from "../services/products.service";

export const productsController = (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  const products = readProducts();
  console.log(products);
  res.end(JSON.stringify(products));
};
