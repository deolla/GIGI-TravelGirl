import fetch from "node-fetch";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "548cfcbe1dmsh18ea41532dc10aap166582jsn0691c70fb6aa",
    "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
  },
};
const params = {
  location_arrival: "",
  date_departure: "",
  sort_order: "PRICE",
  class_type: "ECO",
  location_departure: "",
  itinerary_type: "ONE_WAY",
  price_max: "20000",
  duration_max: "2051",
  price_min: "100",
  number_of_stops: "1",
  number_of_passengers: "1",
};
const iataApiKey = "8El7DBVAushBLcRitW459g==siu5v7fQ1FuNYq67";
const iataUrl = "https://api.api-ninjas.com/v1/airports";
const iataHead = {
  method: "GET",
  headers: {
    "X-Api-Key": iataApiKey,
  },
};

class FlightController {
  static async getFlights(req, res, next) {
    try {
      const to = await fetch(`${iataUrl}?city=${req.body.to}`, iataHead);
      const toJson = await to.json();
      // console.log(toJson);

      const from = await fetch(`${iataUrl}?city=${req.body.from}`, iataHead);
      const fromJson = await from.json();
      // console.log(fromJson);
      // console.log(params);
      params.location_departure = fromJson[0].iata;
      params.location_arrival = toJson[0].iata;
      params.date_departure = req.body.date;
      const ans = await fetch(
        "https://priceline-com-provider.p.rapidapi.com/v1/flights/search?" +
          new URLSearchParams(params),
        options
      );
      const response = await ans.json();
      // console.log(response.data.listings);
      const data = response.data.listings.map((x) => {
        return {
          airline: x.airlines[0].name,
          logo: x.airlines[0].image,
          arrivalTime: x.slices[0].segments[0].arrivalInfo.time.dateTime,
          to: x.slices[0].segments[0].arrivalInfo.airport.code,
          departureTime: x.slices[0].segments[0].departInfo.time.dateTime,
          from: x.slices[0].segments[0].departInfo.airport.code,
          price: x.totalPriceWithDecimal.price,
          url: `https://booking.kayak.com/flights/${
            x.slices[0].segments[0].arrivalInfo.airport.code
          }-${x.slices[0].segments[0].departInfo.airport.code}/${
            x.slices[0].segments[0].departInfo.time.dateTime.split("T")[0]
          }?sort=bestflight_a`,
        };
      });

      if (ans.ok) {
        res.json(data);
      } else {
        res.status(404).json({ message: "cant help" });
      }
    } catch (err) {
      next(err);
    }
  }
}

export default FlightController;
