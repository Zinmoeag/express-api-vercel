import express, { NextFunction, Request, Response } from "express";
const app = express();

const controller = (req: Request, res: Response, next: NextFunction) => {
  res.send("Express on Vercel");
};

app.get("/", controller);

app.listen(3000, () => console.log("Server ready on port 3000."));

export default app;
