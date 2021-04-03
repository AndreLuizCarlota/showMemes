import { sign } from "jsonwebtoken";

class JWT {
  generateToken(id: string) {
    const token = sign({ id }, "TWyDS@%v", {
      algorithm: "HS512",
      expiresIn: "1day",
    });

    return token;
  }
}

export { JWT };
