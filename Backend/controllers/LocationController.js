import Location from "../models/Location.js";

import fetch from "node-fetch";

const params = {
  latLong: "-33.8670522,151.1957362",
  key: "D5D0E44287D94F269F2B39F4F5F7B039",
  language: "en",
};

const url = "https://api.content.tripadvisor.com/api/v1/location/nearby_search";

const options = {
  method: "GET",
  headers: { accept: "application/json" },
};

const getLocations = async (req, res, next) => {
  try {
    params.latLong = req.query.latLong;
    const compUrl = url + "?" + new URLSearchParams(params);
    const response = await fetch(compUrl, options);
    const result = await response.json();
    res.status(200).json(result);
  } catch (err) {
    res.status(404).json({ error: "not found. Check your coordinates" });
    next(err);
  }
};

const getLocation = async (req, res, next) => {
  try {
    const id = req.params.id;
    const oneUrl = `https://api.content.tripadvisor.com/api/v1/location/${id}/details`;
    const compUrl = oneUrl + "?" + new URLSearchParams(params);
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
