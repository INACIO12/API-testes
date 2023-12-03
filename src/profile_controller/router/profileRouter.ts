import express from 'express'
import { upload_img } from '../config/multerProfile/configMulterProfile'

import { getProfail } from '../controller/profileControllerGet'
import { PosttProfail } from '../controller/profileControllerPost'


const routerProfiles = express.Router()

routerProfiles.get("/profile",getProfail)
routerProfiles.post("/profile",upload_img.single("imgUpload"),PosttProfail)

export {routerProfiles}