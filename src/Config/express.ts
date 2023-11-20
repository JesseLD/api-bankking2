import express, {
  Application,
  Request,
  Response,
  NextFunction,
} from "express";
import cors from "cors";
import "express-async-errors";
import routes from "../Api/Routes/Index";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes)

app.use(
  (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    console.error(err.stack);
    res.sendStatus(500);
  }
);


export default app;