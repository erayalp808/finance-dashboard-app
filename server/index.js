import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose, { mongo } from "mongoose";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import kpiRoutes from "./routes/kpi.js";
import KPI from "./models/KPI.js";
import { kpis } from "./data/data.js";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("common"));

/* ROUTES */
app.use("/kpi", kpiRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 8000;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    app.listen(PORT, () => {
        console.log(`Server is running on PORT ${ PORT }.`);
    });

    /* INSERT DATA ONE TİME ONLY */
    await mongoose.connection.db.dropDatabase();
    await KPI.insertMany(kpis);
}).catch((error) => {
    console.error(`${ error } did not connect.`);
});