import config from "../../config";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import jwt from "jsonwebtoken";

const createUser = async ({ name, email, password, phone, address }: TUser) => {
  const user = await User.create({ name, email, password, phone, address });

  const token = jwt.sign({ id: user._id, role: user.role }, config.jwt_secret!, {
    expiresIn: "1d",
  });

  return { user, token };
};

export const UserServices = {
  createUser,
};
