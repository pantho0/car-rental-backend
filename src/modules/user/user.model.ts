import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from "bcrypt";

const userSchema = new Schema<TUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = async function (candidatePassword: string) {
  return bcrypt.compare(candidatePassword, this.password);
};

userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

userSchema.post("find", function (docs) {
  docs.forEach((doc: TUser) => {
    doc.password = "";
  });
});

userSchema.post("findOne", function (doc) {
  if (doc) {
    doc.password = "";
  }
});

export const User = model("User", userSchema);
