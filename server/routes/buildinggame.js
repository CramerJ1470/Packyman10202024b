const controllers = require("../controllers/");
const router = require("express").Router();
const { auth } = require("../utils");

router.get("/", controllers.buildinggame.get);

router.post("/post", controllers.buildinggame.post);

router.put("/:id", auth(), controllers.buildinggame.put);

router.delete("/:id", auth(), controllers.buildinggame.delete);

module.exports = router;
