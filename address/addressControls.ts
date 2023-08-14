import jwt from "jwt-simple";
import AddressModal from "./addressModel";
import CityModal from "../city/cityModel";

const secret: string | undefined = process.env.JWT_SECRET;

export const createAddress = async (req: any, res: any) => {
  try {
    const { cityID, street, home, entrance, userID } = req.body.userAddress;
    console.log(req.body);

    if (!cityID) throw new Error("There is no CityID");
    if (!street) throw new Error("There is no street");
    if (!home) throw new Error("There is no home");
    if (!entrance) throw new Error("There is no entrance");
    if (!userID) throw new Error("There is no userID");

    const city = await CityModal.findById(cityID);
    const address = await AddressModal.create({
      city: city,
      street: street,
      home: home,
      entrance: entrance,
      userID: userID,
    });

    res.status(200).send({ message: "OK" });
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
};
