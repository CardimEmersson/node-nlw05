import express, { json } from "express";
import "./database";
import { routes } from "./routes";

const app = express();
/**
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação especifica
 */

app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log("Server is running on port 33333"));
