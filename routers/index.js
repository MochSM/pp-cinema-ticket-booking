const { Router } = require("express");
const router = Router();
const authRouter = require("./authRouter");
const ticketRouter = require("./ticketRouter");
const movieRouter = require("./routeMovie");

router.get("/", (req, res) => res.redirect("/stores"));

router.use("/auth", authRouter);
router.use("/tickets", ticketRouter);
router.use("/movies", movieRouter);

module.exports = router;