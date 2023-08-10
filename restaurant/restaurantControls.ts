import jwt from "jwt-simple";
import SubscribeModal from "./restaurantModel";
import RestaurantModal from "./restaurantModel";
import CityModal from "../city/cityModel";

const secret: string = "fdkjdfjvbjfdbvkafkdhfxzcvzfd";

export const createRestaurant = async (req: any, res: any) => {
  try {
    const { name, image, phoneNumber, bmNumber, city, street } = req.body.res;
    if (!name) throw new Error("There is no restaurant Name");
    if (!image) throw new Error("There is no restaurant image");
    if (!phoneNumber) throw new Error("There is no phoneNumber");
    if (!bmNumber) throw new Error("There is no bmNumber");
    if (!city) throw new Error("There is no city Name");
    if (!street) throw new Error("There is no street Name");
    const user = req.cookies["user"];
    const decoded = jwt.decode(user, secret);
    const { userId } = decoded;
    const cityModel = await CityModal.findById("64d15f9720ce9c80c243e2ea");
    const restaurantDB = await RestaurantModal.create({
      name,
      image,
      phone: phoneNumber,
      bmNumber,
      street,
      userID: userId,
      cityID: cityModel,
    });

    const restaurantList = await RestaurantModal.find({ userID: userId });

    res.status(200).send({ restaurantList });
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
};

export const getRestaurant = async (req: any, res: any) => {
  try {
    const user = req.cookies["user"];
    const decoded = jwt.decode(user, secret);
    const { userId } = decoded;

    const restaurantList = await RestaurantModal.find({ userID: userId });

    if (!restaurantList) throw new Error("There is no Restaurant");
    res.status(201).send({ message: "ok", restaurantList });
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
};

export const handleDelete = async (req: any, res: any) => {
  try {
    const { restaurantID } = req.body;
    if (!restaurantID) throw new Error("There is no restaurant ID");
    const deleteRestaurant = await RestaurantModal.findByIdAndRemove(
      restaurantID
    );
    const user = req.cookies["user"];
    const decoded = jwt.decode(user, secret);
    const { userId } = decoded;

    const restaurantList = await RestaurantModal.find({ userID: userId });
    if (!restaurantList) throw new Error("There is no Restaurant");
    res.status(201).send({ message: "ok", restaurantList });
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
};

export const restaurant = async (req: any, res: any) => {
  try {
    const { resID } = req.body.restaurantSelect;

    if (!resID) throw new Error("There is no Res ID");

    const restaurant = await RestaurantModal.findById(resID);
    if (!restaurant) throw new Error("There is no res for the ID");
    const resDetails = {
      name: restaurant.name,
      image: restaurant.image,
      phone: restaurant.phone,
      street: restaurant.street,
    };

    res.status(200).send({ resDetails, resID });
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
};
