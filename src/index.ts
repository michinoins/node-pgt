// src/index.ts
import "reflect-metadata"; // this shim is required
import { createExpressServer } from "routing-controllers";
import { UserController } from "./controllers/UserController";

const app = createExpressServer({
  controllers: [UserController], // We specify controllers we want to use
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
