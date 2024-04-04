import Location from "../models/Location.js";
import redisClient from "../webCache/RedisClient.js";
import fetch from "node-fetch";
// import { unflattenObject } from "../utilities/Object";

const unflattenObject = function (obj) {
  return Object.keys(obj).reduce((acc, key) => {
    const keys = key.split(".");
    let temp = acc;
    for (let i = 0; i < keys.length; i++) {
      if (i === keys.length - 1) {
        temp[keys[i]] = JSON.parse(obj[key]);
      } else {
        temp[keys[i]] = temp[keys[i]] || {};
        temp = temp[keys[i]];
      }
    }
    return acc;
  }, {});
};

const currentDate = new Date();

// Add one day to the current date
currentDate.setDate(currentDate.getDate() + 1);
const params = {
  location: "london",
  adults: "1",
  children: "0",
  infants: "0",
  pets: "0",
  page: "1",
  currency: "USD",
  checkin: currentDate.toISOString().split("T")[0],
  checkout: currentDate.toISOString().split("T")[0],
};

let url;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "546ccc62acmsh774954c1d386f72p1e31c3jsn43d51de1e1e7",
    "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
  },
};

const getLocations = async (req, res, next) => {
  try {
    if (req.query.type === "geo") {
      url = "https://airbnb13.p.rapidapi.com/search-geo";
      params.ne_lat = req.query.lat;
      params.sw_lat = req.query.lat;
      params.ne_lon = req.query.lon;
      params.sw_lon = req.query.lon;
    } else {
      url = "https://airbnb13.p.rapidapi.com/search-location";
      params.location = req.query.location;
    }
    // console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbb");
    // if (await redisClient.hashExists(params.location)) {
    //   console.log("getting from redis");
    //   const data = await redisClient.hgetall(params.location);
    //   console.log("---------------------------");
    //   const dataJson = unflattenObject(data);
    //   console.log(dataJson);
    //   console.log("--------------------------------");
    //   return res.status(200).json(dataJson);
    // }
    // console.log(url);
    const compUrl = url + "?" + new URLSearchParams(params);
    const response = await fetch(compUrl, options);
    const result = await response.json();
    console.log("getting from api");
    // if (response.ok) {
    //   await redisClient.hmset(params.location, result);
    // }
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const getLocation = async (req, res, next) => {
  try {
    const id = req.params.id;
    const oneUrl = "https://airbnb19.p.rapidapi.com/api/v2/getPropertyDetails";
    const compUrl = oneUrl + "?" + new URLSearchParams({ propertyId: id });
    const response = await fetch(compUrl, options);
    const result = await response.json();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const deleteLocation = async (req, res, next) => {
  try {
    await Location.findByIdAndDelete(req.params.id);
    res.status(204).json({ success: true });
  } catch (err) {
    next(err);
  }
};

export default {
  getLocations,
  getLocation,
  deleteLocation,
};
