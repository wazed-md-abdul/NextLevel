enum Tcolors {
    Red = "red"
}

type Teshirt = {
    colors: Tcolors,
    size: number
}
const t1: Teshirt = {
    colors: Tcolors.Red,
    size: 2
}
const t2 = {
    colors: "red",
    size: 4
}

t1.colors = Tcolors.Red;
t2.colors = "blue";
