export type TUser = {
  name: string;
  email: string;
  role: string;
  password: string | undefined;
  phone: string;
  address: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
};
