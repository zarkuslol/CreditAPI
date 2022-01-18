import express from "express";
import router from "./routes/routes";
import dotenv from "dotenv";

dotenv.config();
const server = express();

server.use(router);

server.listen(process.env.PORT || 3000, () => {
    console.log("Server running on: http://localhost:3000");
});
