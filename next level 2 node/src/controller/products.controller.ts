
import { IncomingMessage, ServerResponse } from "http";
import { readProducts } from "../services/products.service";
import type { Product } from "../types/products.type.ts";



export const productsController = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;
  const splitContent = url?.split("/");
  const id = splitContent && splitContent[1] === "products" ? Number(splitContent[2]) : undefined;
  const products = readProducts();
  const product = products.find((p :Product) => p.id === id);

  console.log("this is the id ", id)


  res.writeHead(200, { "Content-Type": "application/json" });

  res.end(JSON.stringify({
    message: "Products fetched successfully",

  }));
};
