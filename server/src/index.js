import { express } from "express";

const app = express();

import routes from "./routes";
import morgan from "morgan";
import { logger} from "./utils/winston.js";


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

