import path from "path";
import fs from "fs";

const filePath  = path.join(process.cwd(), "./src/database/products.json")
export const readProducts =() => {
  const products = fs.readFileSync(filePath, "utf-8");

  return JSON.parse(products);

};
