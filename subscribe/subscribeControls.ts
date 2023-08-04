import jwt from "jwt-simple";
import SubscribeModal from "./subscribeModel";

const secret: string | undefined = process.env.JWT_SECRET;

export const subscribeEmail = async (req: any, res: any) => {
  try {
    const { email } = req.body;
    const subscribeCheck = await SubscribeModal.findOne({ email: email });
    if (subscribeCheck) throw new Error("This Email is Already subscribeEmail");

    const subscribeEmailDB = await SubscribeModal.create({
      email,
    });

    res.status(200).send({ message: "You are subscribe" });
  } catch (error) {
    res.status(500).send("There is a problem please try again");
  }
};
