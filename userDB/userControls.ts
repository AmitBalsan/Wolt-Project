import jwt from "jwt-simple";
import UserModal from "./userModel";
import * as dotenv from "dotenv";

dotenv.config();

const secret: string | undefined = process.env.JWT_SECRET as string;
// const secret: string = "fdkjdfjvbjfdbvkafkdhfxzcvzfd";

export const loginUser = async (req: any, res: any) => {
  try {
    const { email, password } = req.body.userLogin;

    if (!email) throw new Error("Email is missing");
    if (!password) throw new Error("Password is missing");

    const userDB = await UserModal.findOne({
      email: email,
      password: password,
    });
    if (!userDB) throw new Error("There is no user like that");
    const user = {
      firstName: userDB.firstName,
      lastName: userDB.lastName,
      userType: userDB.userType,
    };

    const token = jwt.encode({ userId: userDB._id, role: "public" }, secret!);
    res.cookie("user", token, { maxAge: 50000000, httpOnly: true });

    res.status(201).send({ ok: true, user });
  } catch (error: any) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

export const createUser = async (req: any, res: any) => {
  try {
    const { firstName, lastName, phoneNumber, email, password, userType } =
      req.body.user;
    if (!firstName) throw new Error("There is no first name");
    if (!lastName) throw new Error("There is no last name");
    if (!phoneNumber) throw new Error("There is no phone Number");
    if (!email) throw new Error("There is no email");
    if (!password) throw new Error("There is no password");
    if (!userType) throw new Error("There is no user type");

    const existsUserDB = await UserModal.findOne({ email: email });

    if (!existsUserDB) {
      const userDB = await UserModal.create({
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
        userType,
      });

      const test = await UserModal.find({});
      res.status(200).send({ send: "Registration Success" });
    } else {
      throw new Error("This user is already exists");
    }
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
};

export const login = async (req: any, res: any) => {
  try {
    const user = req.cookies["user"];
    const decoded = jwt.decode(user, secret);
    const { userId } = decoded;
    if (!userId) throw new Error("Please Login");
    const userDB = await UserModal.findById(userId);
    if (!userDB) throw new Error("There is no User");

    res
      .status(201)
      .send({ message: "ok", login: true, userType: userDB.userType });
  } catch (error: any) {
    res.status(500).send({ error: error.message, login: false });
  }
};
