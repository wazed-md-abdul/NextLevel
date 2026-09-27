type Bike = {
    name: string;
  price: number;
  model: string;
  color: string;
}

type BikeCheck<T> = T extends keyof Bike ? true : false;
type HasBike  = BikeCheck<"name" | "price" | "model" | "color">;
