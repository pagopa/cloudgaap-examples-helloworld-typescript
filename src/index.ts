import path from "path";
import express from "express";
import morgan from "morgan";
import { makeIndexRouter } from "./routes";

const SERVER_PORT = process.env.PORT;
const CGAAP_BASE_PATH = process.env.CGAAP_BASE_PATH || "/";

const app = express();

// Configuring express template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(morgan("dev"));

// Create main router
const router = express.Router();

// Middlewares
router.use(express.urlencoded({ extended: true }));

// Serve static files
router.use(express.static(path.join(__dirname, "public")));

// Routes
router.use("/", makeIndexRouter());

app.use(CGAAP_BASE_PATH, router);

// Start server
app.listen(SERVER_PORT, () => {
  console.log(
    `Application started, listening on port ${SERVER_PORT} with base path ${CGAAP_BASE_PATH}`
  );
});
