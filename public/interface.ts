interface Restaurant {
  name: string;
  image: string;
  phoneNumber: string;
  bmNumber: string;
  city: number;
  street: string;
  notes: string;
  minTime: number;
  maxTime: number;
}

interface Dish {
  name: string;
  image: string;
  price: number;
  notes: string;
  resID: string;
}

interface City {
  _id: string;
  cityName: string;
  cityID: number;
}

interface Order {}
