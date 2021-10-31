import { Request, Response } from "express";
import { compare } from "bcryptjs";

import { getRepository } from "typeorm";
import Users from "../models/Users";
import { sign } from "jsonwebtoken";
import authConfig from "../config/auth"

export default {
  async index(request: Request, response: Response) {
    const { email, password } = request.body;
    const usersRepository = getRepository(Users);

    const user = await usersRepository.findOne({ where: { email: email } });

    if (!user) {
      return response.status(401).send({ message: "Email/senha não conferem" });
    }

    const passwordMacth = await compare(password, user.password);
  
    if (!passwordMacth) {
      return response.status(401).send({ message: "Email/senha não conferem" });
    }

    const token = sign({}, authConfig.jwt.secret,{
      subject: String(user.id),
      expiresIn:'1d'
    });

    return response.json({user, token: token});
  },
};
