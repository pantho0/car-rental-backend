import { TUser } from "./user.interface";
import { User } from "./user.model";
import jwt from "jsonwebtoken";

const createUser = async ({ name, email, password, phone, address }: TUser) => {
  const user = await User.create({ name, email, password, phone, address });

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET!, {
    expiresIn: "1d",
  });

  return user;
};

export const UserServices = {
  createUser,
};
