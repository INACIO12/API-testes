import express from "express"

import { getUser } from "../controller/controllerGet_User"
import { createUser } from "../controller/controllerPost_user"

const routerUser = express.Router()


routerUser.get('/user',getUser)
routerUser.post('/user', createUser)

export {routerUser}