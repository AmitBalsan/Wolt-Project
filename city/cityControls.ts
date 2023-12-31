import CityModal from "./cityModel";

export const getCity = async (req: any, res: any) => {
  try {
    const cityDB = await CityModal.find({});
    if (!cityDB) throw new Error("There is no City in the DB");

    res.status(200).send({ cityDB });
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
};
