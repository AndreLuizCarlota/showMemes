import { sign } from "jsonwebtoken";

class JWT {
  generateToken(id: string) {
    const token = sign({ id }, process.env.SECRET_KEY, {
      algorithm: "HS512",
      expiresIn: "1day",
    });

    return token;
  }
}

export { JWT };
