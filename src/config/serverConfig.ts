import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
})

const DATABASE_URL = process.env.DATABASE_URL;
const PORT = process.env.PORT;

export {
    DATABASE_URL,
    PORT,
}