const app = require("./src/app");
const conectDB = require("./src/db/user.db");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`);
});

conectDB().catch((err) => {
    console.error("database connection failed:", err.message);
});
