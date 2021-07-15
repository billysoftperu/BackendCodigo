import express from "express";
import {json} from "body-parser";
import {conexion} from "./sequelize";

export class Server {
    constructor(){
        this.app=express();
        this.port=process.env.PORT || 8000;
        this.bodyParser();
        this.rutas();

    
    }
    bodyParser(){
        this.app.use(json());
    }
    rutas(){
        this.app.get("/",(req,res)=>{
            res.send("bienvenido a mi API");

        });
    }

    start(){
        this.app.listen(this.port, async()=>{
            console.log(`Servidor corriendo exitosamente en el puerto ${this.port}`);
            try{
                await conexion.sync()
                console.log('Base de datos sincronizada correctamente');
            }   catch (error){
                console.error(error)
            }
        })
    }
}