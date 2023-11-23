import  express  from "express";
import bodyParser from "body-parser";


import { routerUser } from "./user/router/router_User";
import { routerPost } from "./posts/router/router_POST";


const app = express()
const host:Number = 8080

// Configurar o body-parser para processar solicitações JSON
app.use(bodyParser.json());
// Configurar o body-parser para processar dados de formulário
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routerUser)
app.use(routerPost)


app.listen(host,()=>{
    console.log("Rodando na porta "+host)
})