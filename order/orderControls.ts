import jwt from "jwt-simple";
import OrderModal from "./orderModel";
import CartModal from "../cart/cartModel";
import { ObjectId } from "mongoose";
import OrderItemModal from "./orderItemModel";

const secret: string | undefined = process.env.JWT_SECRET as string;

export const orderCreate = async (req: any, res: any) => {
  try {
    const user = req.cookies["user"];
    const decoded = jwt.decode(user, secret);
    const { userId } = decoded;
    if (!userId) throw new Error("There is no user ID");
    const items = await CartModal.find({ userID: userId });
    if (!items) throw new Error("Your cart is empty");
    let total = 0;
    items.forEach((item) => {
      total += item.price!;
    });
    const order = await OrderModal.create({
      userID: userId,
      resID: items[0].resID,
      sellerID: items[0].sellerID,
      total: total,
      items: items.length,
    });

    items.forEach((res) => {
      const orderItem = OrderItemModal.create({
        orderID: order._id,
        userID: userId,
        resID: order.resID,
        sellerID: order.sellerID,
        price: res.price,
      });
    });

    await CartModal.deleteMany({ userID: userId });
    res.status(200).send();
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
};
