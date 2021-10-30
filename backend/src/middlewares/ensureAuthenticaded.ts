import { Request, Response, NextFunction, request } from "express";
import { verify } from "jsonwebtoken";
import authConfig from "../config/auth";

export default function ensureAutheticated(
  request: Request,
  response: Response,
  next: NextFunction
): void {
    console.log(request.header)
  const authheader = request.headers.authorization;

  if (!authheader) {
    throw new Error("JWT token is missing");
  }

  const [, token] = authheader.split(" ");

  try {
    const decode = verify(token, authConfig.jwt.secret);
    return next();
  } catch {
   throw new Error("JWT token inválido")
  }
}
