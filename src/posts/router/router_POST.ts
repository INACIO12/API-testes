import express from "express"

import { getPost } from "../controller/controllerGet_post"
import { createPost } from "../controller/controllerPost_post"

const routerPost = express.Router()


routerPost.get('/posts',getPost)
routerPost.post('/posts', createPost)

export {routerPost}