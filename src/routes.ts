import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";
import { MessagesService } from "./services/MessagesService";

const routes = Router();

/**
 * Tipos de parametros
 * Route Params => parametros de rotas -> http://localhost:3333/settings/1
 * Query Params => Filtros e buscas -> http://localhost:3333/settings/1?search=algumacoisa
 * Body Params => json{}
 */

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUserName);
routes.put("/settings/:username", settingsController.update);
routes.post("/users", usersController.create);
routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes };
