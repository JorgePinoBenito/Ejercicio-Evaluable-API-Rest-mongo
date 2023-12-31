import { Request, Response } from "npm:express@4.18.2";
import MascotaModel from "../db/mascota.ts";

const getMascotas = async (req: Request, res: Response) => {
  try {
    const mascotas = await MascotaModel.find().exec();
    res.status(200).send(mascotas);
  } catch (error) {
    res.status(500).send(error.message);
    return;
  }
};

const getMascotaById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const stringId = id.toString();
    const mascota = await MascotaModel.findById(stringId).exec();
    if (!mascota) {
      res.status(404).send("Mascota not found");
      return;
    }
    res.status(200).send(mascota);
  } catch (error) {
    res.status(404).send(error.message);
    return;
  }
};

export { getMascotas, getMascotaById };
