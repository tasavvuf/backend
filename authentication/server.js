const path = require("path")
const dotenv = require("dotenv")
const app = require("./src/app")
const conectDB = require("./src/db/db")

dotenv.config({ path: path.resolve(__dirname, "../.env") })
conectDB()
  .catch((error) => {
    console.error("database connection failed:", error.message)
    process.exit(1)
  });

app.listen(5000,()=>{
    console.log("server is running on port http://localhost:5000 ")
})
