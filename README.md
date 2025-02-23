La idea era crear en la carpeta 
ProyectoM4 
controllers ( que controla las rutas)
  -->reservasController.js
models (estructura de datos)
  -->reservas.js
routes (acá estaran los endpoints)
  -->reservasRoutes.js
node_modules (que está en el archivo gitignore, para ser ignorado)
.env (que tiene el puerto 3000)// tuve que cambiarlo al 3001...
.gitignore
index.js (principal)
package-lock.json
package.json

originalmente habia usado cjs, pero al final cambie a esm.
ejemplo:
import express from "express";
import dotenv from "dotenv";
import reservasRoutes from "./routes/reservasRoutes.js";

al establecer los endpoints en reservasController.js establecí:
export const filtrarReservas = (req, res) => {
    let resultados = [...reservas];

    if (req.query.hotel) {
        resultados = resultados.filter(r => r.hotel === req.query.hotel);
    }
    if (req.query.fecha_inicio && req.query.fecha_fin) {
        resultados = resultados.filter(r => r.fecha >= req.query.fecha_inicio && r.fecha <= req.query.fecha_fin);
    }
    if (req.query.tipo_habitacion) {
        resultados = resultados.filter(r => r.tipo_habitacion === req.query.tipo_habitacion);
    }
    if (req.query.estado) {
        resultados = resultados.filter(r => r.estado === req.query.estado);
    }
    if (req.query.num_huespedes) {
        resultados = resultados.filter(r => r.num_huespedes == req.query.num_huespedes);
    }

    res.json(resultados);
};
para los endpoint que requerian filtro.
// fue bastante complejo este proyecto...pues se me enredaban las carpetas de origen y colocaba cosas que iban en index.js en models etc.
asi que espero que funcione.
