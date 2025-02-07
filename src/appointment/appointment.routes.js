import { Router } from "express";
import { saveAppointment, getAppointment, deleteAppointment } from "./appointment.controller.js";
import { createAppointmentValidator , cancelAppointmentValidator } from "../middlewares/appointment-validators.js";


const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment);

router.get("/", getAppointment);

router.delete("/cancelAppointment/:id", cancelAppointmentValidator, deleteAppointment )

export default router;