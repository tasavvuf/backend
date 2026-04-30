/* "Set up the app entrypoint to connect MongoDB and launch the Express server on port 5000, which helped me understand how backend services are started." */

const app = require("./src/app")
const connectDB= require("./src/db/db")
connectDB()
app.listen(5000,()=>{
    console.log("server is running on port http://localhost:5000");
})
