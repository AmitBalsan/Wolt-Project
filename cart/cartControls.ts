import jwt from "jwt-simple";
import CartModal from "./cartModel";
import DishModal from "../dish/dishModel";

const secret: string | undefined = process.env.JWT_SECRET as string;

export const addToCart = async (req: any, res: any) => {
  try {
    const { dishID } = req.body;

    const user = req.cookies["user"];
    const decoded = jwt.decode(user, secret);
    const { userId } = decoded;

    const dishDB = await DishModal.findById(dishID);
    if (!dishDB) throw new Error("There is no Dish in the DB");

    const cart = await CartModal.create({
      dishName: dishDB.name,
      price: dishDB.price,
      resID: dishDB.resID,
      sellerID: dishDB.userID,
      dishID: dishDB._id,
      userID: userId,
    });

    const cartItem = await CartModal.find({ userID: userId });

    res.status(200).send({ cartItem });
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
};

export const getAllDish = async (req: any, res: any) => {
  try {
    const user = req.cookies["user"];
    const decoded = jwt.decode(user, secret);
    const { userId } = decoded;

    const itemInCart = await CartModal.find({ userID: userId });
    res.status(200).send({ itemInCart });
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
};

export const removeItem = async (req: any, res: any) => {
  try {
    const { itemID } = req.body;
    if (!itemID) throw new Error("There is no ItemID in the list");
    const user = req.cookies["user"];
    const decoded = jwt.decode(user, secret);
    const { userId } = decoded;

    const item = await CartModal.findByIdAndRemove(itemID);
    res.status(200).send({ item });
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
};
