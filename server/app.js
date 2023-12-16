import express from "express";
import OTPRouter from "./routes/otpRoute.js";
import RoomsRouter from "./routes/roomsRoute.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

export const app = express();

app.use(cookieParser());

const corsOption = {
  origin: 'aurallinkio.netlify.app',
  methods: 'GET,POST',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOption));
app.use(express.json({ limit: "8mb" }));
app.use("/storage", express.static("storage"));

app.use("/api", OTPRouter);
app.use("/api", RoomsRouter);
