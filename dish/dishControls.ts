import jwt from "jwt-simple";
import DishModal from "./dishModel";

const secret: string | undefined = process.env.JWT_SECRET as string;

export const createDish = async (req: any, res: any) => {
  try {
    const { name, price, image, notes, resID } = req.body.dish;
    console.log(req.body);
    if (!name) throw new Error("There is no Name");
    if (!price) throw new Error("There is no price");
    if (!image) throw new Error("There is no image");
    if (!notes) throw new Error("There is no notes");
    if (!resID) throw new Error("There is no resID");

    const user = req.cookies["user"];
    const decoded = jwt.decode(user, secret);
    const { userId } = decoded;

    const dishDB = await DishModal.create({
      name,
      price,
      image,
      notes,
      resID,
      userID: userId,
    });

    res.status(200).send({ dishDB });
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
};
