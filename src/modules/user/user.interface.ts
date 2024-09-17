export type TUser = {
  name: string;
  email: string;
  role: string;
  password: string;
  phone: string;
  address: string;
  comparePassword: Promise<boolean>;
};
