import express, { type Application } from "express";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import all routes here
import userRoutes from "./routes/user.route.js";


// user all routes here
app.use("/api/v1/auth", userRoutes);


export default app;