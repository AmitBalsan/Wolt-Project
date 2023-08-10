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
    const dishList = await DishModal.find({ resID: resID });
    res.status(200).send({ dishList });
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
};

export const getDish = async (req: any, res: any) => {
  try {
    const { resID } = req.body;
    if (!resID) throw new Error("There is no dish");
    const dishList = await DishModal.find({ resID: resID });
    if (!dishList) throw new Error("There is no dish in the DB");
    res.status(200).send(dishList);
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
};

export const deleteDish = async (req: any, res: any) => {
  try {
    const { id, resID } = req.body;
    if (!id) throw new Error("There is no DishID ");
    const dish = await DishModal.findByIdAndRemove(id);
    const dishList = await DishModal.find({ resID: resID });
    res.status(200).send({ message: "ok", dishList });
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
};
