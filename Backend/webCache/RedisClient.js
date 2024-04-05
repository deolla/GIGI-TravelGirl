import { createClient } from "redis";
import { promisify } from "util";

const flattenObject = function (obj, prefix = "") {
  return Object.keys(obj).reduce((acc, key) => {
    const prefixedKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      Object.assign(acc, flattenObject(obj[key], prefixedKey));
    } else {
      acc[prefixedKey] = JSON.stringify(obj[key]);
    }
    return acc;
  }, {});
};

class RedisClient {
  constructor() {
    // Initialize Redis client
    this.client = createClient();

    // Promisify Redis client methods
    this.client.setAsync = promisify(this.client.set).bind(this.client);
    this.client.getAsync = promisify(this.client.get).bind(this.client);
    this.client.hmsetAsync = promisify(this.client.HSET).bind(this.client);
    this.client.hgetallAsync = promisify(this.client.HGETALL).bind(this.client);
    this.client.existsAsync = promisify(this.client.exists).bind(this.client);
    // Log Redis client errors
    this.client.on("error", (err) => {
      console.error("Redis Error:", err);
    });
    this.client.on("connect", () => {
      console.log("Redis is connected");
    });
    this.initialize();
  }

  async initialize() {
    try {
      // Perform asynchronous initialization tasks here
      await this.client.connect();
      console.log("Initialization complete");
    } catch (error) {
      console.error("Initialization failed:", error);
    }
  }

  // Method to set a key-value pair in Redis cache
  async set(key, value) {
    try {
      await this.client.setAsync(key, value);
      console.log("Value set in Redis");
    } catch (err) {
      console.error("Error setting value in Redis:", err);
    }
  }

  // Method to get a value from Redis cache by key
  async get(key) {
    try {
      const value = await this.client.getAsync(key);
      console.log("Value retrieved from Redis:", value);
      return value;
    } catch (err) {
      console.error("Error getting value from Redis:", err);
      throw err;
    }
  }

  // Method to save a hash table in Redis cache
  async hmset(key, hashObj) {
    console.log("setting");
    const obj = flattenObject(hashObj);
    promisify(this.client.HSET).bind(this.client)(key, obj);
  }

  // Method to retrieve a hash table from Redis cache by key
  async hgetall(key) {
    console.log("getting hash table from Redis cache");
    console.log(await this.client.hGetAll("kano"));
    return promisify(this.client.hGetAll).bind(this.client)(key);
  }

  // Method to check if a hash with a specific key exists
  async hashExists(key) {
    return promisify(this.client.EXISTS).bind(this.client)(key);
  }

  // Method to close the Redis client connection
  async close() {
    try {
      await this.client.quit();
      console.log("Redis client connection closed");
    } catch (err) {
      console.error("Error closing Redis client connection:", err);
    }
  }

  // Method to clear all keys in the Redis cache
  async flushAll() {
    try {
      await this.client.flushallAsync();
      console.log("All keys cleared from Redis cache");
    } catch (err) {
      console.error("Error clearing keys from Redis cache:", err);
    }
  }
}

const rC = new RedisClient();

export default rC;
