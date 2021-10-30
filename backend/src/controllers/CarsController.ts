import { Request, response, Response } from "express";

import { getRepository } from "typeorm";
import Cars from "../models/Cars";
import * as Yup from "yup";

import carView from "../views/Cars_views";
import { createSecurePair } from "tls";

export default {
  async index(request: Request, response: Response) {
    const carsRepository = getRepository(Cars);

    const cars = await carsRepository.find({
      relations: ["images"],
    });

    return response.json(carView.renderMany(cars));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const carsRepository = getRepository(Cars);

    const cars = await carsRepository.findOneOrFail(id, {
      relations: ["images"],
    });

    return response.json(carView.render(cars));
  },

  async create(request: Request, response: Response) {
    const { name, brand, model, price } = request.body;

    const carsRepository = getRepository(Cars);

    const requestImages = request.files as Express.Multer.File[];

    const images = requestImages.map((image) => {
      return { path: image.filename };
    });

    const data = {
      name,
      brand,
      model,
      price,
      images,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      brand: Yup.string().required(),
      model: Yup.string().required(),
      price: Yup.number().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        })
      ),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const cars = carsRepository.create(data);

    await carsRepository.save(cars);

    return response.status(201).json(cars);
  },

  async remove(request: Request, response: Response) {
    const { id } = request.params;

    const carsRepository = getRepository(Cars);

    const cars = await carsRepository.findOne(id);

    if (!cars) {
      return response.status(304).send({ message: "Item não encontrado!" });
    }
    await carsRepository.delete(id);

    return response.json({ message: "Removido com sucesso!" });
  },
};
