const { Router} = require ("express")
const timberRouter = Router();
const {createTimber, listTimber, deleteUser, editEmail} = require("./controllers")

// userRouter.post("/", createUser)// http verb, path and controller    // taking create user from controlls

timberRouter.get("/", listTimber)

timberRouter.post("/", createTimber)
// userRouter.delete("/:username", deleteUser)

// userRouter.put("/", editEmail)

module.exports = timberRouter;