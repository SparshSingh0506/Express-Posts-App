import express from "express";

import feedRouter from "./routes/feed.route"
import uploadRouter from "./routes/upload.route"

const app = express();
app.use(express.json());

app.use('/feed', feedRouter);
app.use('/upload', uploadRouter);

export default app;
