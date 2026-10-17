import { config } from "./config"
import { initDb } from "./db"
import app from "./main"

const main = async () => {
  await initDb()
  app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`)
  })
}