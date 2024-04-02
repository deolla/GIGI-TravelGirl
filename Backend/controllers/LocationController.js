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

const params = {
  location: "london",
  adults: "1",
  children: "0",
  infants: "0",
  pets: "0",
  page: "1",
  currency: "USD",
  checkin: new Date().toISOString().split("T")[0],
  checkout: new Date().toISOString().split("T")[0],
};

const url = "https://airbnb13.p.rapidapi.com/search-location";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "580bf7e72cmsh6c885dddf72feafp16c6ffjsn35c8129b0f19",
    "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
  },
};

const getLocations = async (req, res, next) => {
  try {
    params.location = req.query.location;
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
