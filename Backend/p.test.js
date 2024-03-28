// import RedisClient from './webCache/RedisClient.js';
import fetch from "node-fetch";

//const redisClient = new RedisClient();

  // Example usage:
//  async function exampleUsage() {
//    await redisClient.set("myKey", "myValue");
//    const value = await redisClient.get("myKey");
//    console.log("Value:", value);

//    await redisClient.hmset("myHashKey", { field1: "value1", field2: "value2" });
//    const hashObj = await redisClient.hgetall("myHashKey");
//    console.log("Hash table:", hashObj);
//  }

//  async function getAirportCode(countryName) {
//    try {
//      const response = await fetch(
//        `https:restcountries.com/v3.1/name/${encodeURIComponent(
//          countryName
//        )}?fullText=true`
//      );
//      const data = await response.json();
//      console.log(data);
//      const airports = response.data;

//       // Check if any airports are found for the given city
//      if (airports.length > 0) {
//         // Return the airport code of the first airport found (assuming it's the main airport)
//        return airports[0].code;
//      } else {
//        throw new Error(`No airport found for city: ${countryName}`);
//      }
//    } catch (error) {
//      throw new Error(
//        `Error retrieving airport code for city: ${countryName} - ${error.message}`
//      );
//    }
//  }

// // Example usage:
// getAirportCode("Nigeria")
//   .then((airportCode) => console.log(`Airport code for Nigeria: ${airportCode}`))
//  .catch((error) => console.error(error));
const options = {
 method: "GET",
 headers: {
   "X-RapidAPI-Key": "548cfcbe1dmsh18ea41532dc10aap166582jsn0691c70fb6aa",
   "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
 },
};
const params = {
  location_arrival: "NYC",
  date_departure: "2024-07-24",
  sort_order: "PRICE",
  class_type: "ECO",
  location_departure: "LOS",
  itinerary_type: "ONE_WAY",
  price_max: "20000",
  duration_max: "2051",
  price_min: "100",
  number_of_stops: "1",
  number_of_passengers: "1",
};

const ans = await fetch(
  "https://priceline-com-provider.p.rapidapi.com/v1/flights/search?" +
    new URLSearchParams(params),
  options
);

const sus = await ans.json();
console.log(sus.data.listings);
