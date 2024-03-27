import { createClient } from "redis";
import { promisify } from "util";

class RedisClient {
  constructor() {
    // Initialize Redis client
    this.client = createClient();

    // Promisify Redis client methods
    this.client.setAsync = promisify(this.client.set).bind(this.client);
    this.client.getAsync = promisify(this.client.get).bind(this.client);
    this.client.hmsetAsync = promisify(this.client.hSet).bind(this.client);
    this.client.hgetallAsync = promisify(this.client.hGetAll).bind(this.client);
    this.client.existsAsync = promisify(this.client.exists).bind(this.client);

    // Log Redis client errors
    this.client.on("error", (err) => {
      console.error("Redis Error:", err);
    });
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
    try {
      await this.client.hmsetAsync(key, hashObj);
      console.log("Hash table saved in Redis");
    } catch (err) {
      console.error("Error saving hash table in Redis:", err);
    }
  }

  // Method to retrieve a hash table from Redis cache by key
  async hgetall(key) {
    try {
      const hashObj = await this.client.hgetallAsync(key);
      console.log("Hash table retrieved from Redis:", hashObj);
      return hashObj;
    } catch (err) {
      console.error("Error getting hash table from Redis:", err);
      throw err;
    }
  }

  // Method to check if a hash with a specific key exists
  async hashExists(key) {
    try {
      const exists = await this.client.existsAsync(key);
      console.log(`Hash with key "${key}" exists:`, exists === 1);
      return exists === 1;
    } catch (err) {
      console.error("Error checking hash existence in Redis:", err);
      throw err;
    }
  }
}

const rC = new RedisClient();

export default rC;
