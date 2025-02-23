import express from "express";
import {
    crearReserva,
    obtenerReservas,
    obtenerReservaPorId,
    actualizarReserva,
    eliminarReserva,
    filtrarReservas
} from "../controllers/reservasController.js";

const router = express.Router();

router.post("/", crearReserva);
router.get("/", filtrarReservas);
router.get("/:id", obtenerReservaPorId);
router.put("/:id", actualizarReserva);
router.delete("/:id", eliminarReserva);

export default router;
