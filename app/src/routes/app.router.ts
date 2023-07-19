import Router from "koa-router";
import koaBody from "koa-body";
import appController from "../controllers/app.controller";

export default () => {
  const router = new Router();
  const bodyParser = koaBody();


  const { callback, sampleApp, signIn, clientLogin, registerForm, pi, clientsRegister, userAgent } =
    appController();

  router.get("/", sampleApp);
  router.get("/register", registerForm);
  router.get("/sign-in", signIn);
  router.get("/client-login", clientLogin);
  router.get("/cb", callback);
  router.get("/pi", pi);
  router.get("/clients", clientsRegister);
  router.post("/userAgent", bodyParser, userAgent);

  return router;
};
