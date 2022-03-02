import { Router, Handler } from "express";

function indexGETHandler(): Handler {
  return function (_req, res) {
    res.render("index");
  };
}

function makeIndexRouter() {
  const router = Router();

  router.get("/", indexGETHandler());

  return router;
}

export { makeIndexRouter };
