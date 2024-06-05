import express from "express";
import KPI from "../models/KPI.js";

const router = express.Router();

router.get("/kpis", async (request, response) => {
    try {
        const kpis = await KPI.find();
        response.status(200).json(kpis);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
});