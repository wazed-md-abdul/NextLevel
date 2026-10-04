export function f1() {
  console.log("Hello, World!")
}
const extractionFunction = () => {
    console.log("afdafdafd")
}
export { extractionFunction }

const normalFunction = () => {
  console.log("hihi ")
}
export default normalFunction
