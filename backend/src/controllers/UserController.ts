import { Request, Response } from "express";
import {hash}from "bcryptjs"

import { getRepository } from "typeorm";
import Users from "../models/Users";
import * as Yup from "yup";

import userView from "../views/Users_views";

export default {
  async index(request: Request, response: Response) {
    const usersRepository = getRepository(Users);

    const user = await usersRepository.find({
      relations: ["images"],
    });

    return response.json(userView.renderMany(user));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const usersRepository = getRepository(Users);

    const users = await usersRepository.findOneOrFail(id);

    return response.json(userView.render(users));
  },

  async create(request: Request, response: Response) {
    const {
      name,
      email,
      password,
    } = request.body;

    const usersRepository = getRepository(Users);

    const hashedPassword = await hash(password, 8)

    const data = {
      name,
      email,
      password: hashedPassword
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      password: Yup.string().required(),  
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const users = usersRepository.create(data);

    await usersRepository.save(users);

    return response.status(201).json(users);
  },
};
