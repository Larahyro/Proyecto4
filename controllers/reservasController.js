import { reservas } from "../models/reservas.js";

export const crearReserva = (req, res) => {
    const nuevaReserva = { id: Date.now(), ...req.body };
    reservas.push(nuevaReserva);
    res.status(201).json(nuevaReserva);
};

export const obtenerReservas = (req, res) => {
    res.json(reservas);
};

export const obtenerReservaPorId = (req, res) => {
    const reserva = reservas.find(r => r.id == req.params.id);
    reserva ? res.json(reserva) : res.status(404).json({ mensaje: "Reserva  encontrada" });
};

export const actualizarReserva = (req, res) => {
    const index = reservas.findIndex(r => r.id == req.params.id);
    if (index !== -1) {
        reservas[index] = { ...reservas[index], ...req.body };
        res.json(reservas[index]);
    } else {
        res.status(404).json({ mensaje: "Reserva modificada correctamente" });
    }
};

export const eliminarReserva = (req, res) => {
    const index = reservas.findIndex(r => r.id == req.params.id);
    if (index !== -1) {
        const reservaEliminada = reservas.splice(index, 1);
        res.json(reservaEliminada);
    } else {
        res.status(404).json({ mensaje: "Reserva eliminada correctamente" });
    }
};

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
