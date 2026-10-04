type Box = {
  height: number;
  width: number;
  depth: number;
}
type Box2 = {
  height: string;
  width: string;
  depth: string;
}

type Area<T> = {
  [key in keyof T]: T[key]
}

const area1 : Area<{height: number; width: number; depth: number}> = {
  height: 10,
  width: 20,
  depth: 30,
}
const area2: {height: string; width: string; depth: string} = {
  height: '10',
  width: '20',
  depth: '30',
}

type transformArea<T, Y> = {
  [key in keyof T] : Y | null
}

const area3: transformArea<Box, string> = {
  height:  null,
  width: '20',
  depth: '30',
}
