const app = require('./src/app')
const conectDB = require("./src/db/db")
conectDB();
app.listen(5000,()=>{
    console.log("server is running on port http://localhost:5000 ")
})