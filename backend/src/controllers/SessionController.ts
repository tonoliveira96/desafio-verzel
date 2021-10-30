import { Request, Response } from "express";
import { compare } from "bcryptjs";

import { getRepository } from "typeorm";
import Users from "../models/Users";
import * as Yup from "yup";

import userView from "../views/Users_views";

export default {
  async show(request: Request, response: Response) {
    const { email, password } = request.params;
    const usersRepository = getRepository(Users);

    const users = await usersRepository.findOne({ where: { email: email } });

    if (!users) {
      throw new Error("Email/senha não conferem");
    }

    const passwordMacth = compare(password, users.password);

    if (!passwordMacth) {
      throw new Error("Email/senha não conferem");
    }

    return response.json({ ok: true });
  },
};
