var Tcolors;
(function (Tcolors) {
    Tcolors["Red"] = "red";
})(Tcolors || (Tcolors = {}));
const t1 = {
    colors: Tcolors.Red,
    size: 2
};
const t2 = {
    colors: "red",
    size: 4
};
t1.colors = Tcolors.Red;
t2.colors = "blue";
export {};
