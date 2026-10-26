import { config } from "./config/index"
import { initDb } from "./db/index"
import app from "./app"

const main = async () => {
  await initDb()
  app.listen(config.port, () => {

    console.log("server is running on port", config.port)
    console.log(`Server is running on port ${config.port}`)
  })

}
main()
