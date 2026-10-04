// type Product = {
//   id: number;
//   name: string;
//   price: number;
//   stock: number;
//   color?: string;
// }
// type Pick<T, K extends keyof T> = { [P in K]: T[P]; }
// type ProductSummary = Pick<Product, 'id' | 'name' | 'price' | "color">;
// type ProductSummaryWithStock = Pick<Product, 'id' | 'name' | 'price' | 'stock'>;
// type ProductWithoutStock = Omit<Product, 'stock'>;
// type EmptyObject = Record<string, never>;
// type PartialProduct = Partial<Product>;
// type ReadonlyProduct = Readonly<Product>;
