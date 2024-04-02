import RedisClient from "../webCache/RedisClient.js";

describe("RedisClient", () => {
  let redisClient;

  beforeEach(() => {
    redisClient = RedisClient;
    // redisClient.flushAll().then((x) => x);
  });

  it("should set a key-value pair in Redis cache", function () {
    // this.timeout(10000)
    redisClient
      .set("myKey", "myValue")
      .then(() => redisClient.get("myKey"))
      .then((value) => {
        expect(value).to.equal("myValue");
        done();
      })
      .catch((err) => done(err));
  });

  it("should retrieve a hash table from Redis cache by key", function () {
    redisClient
      .hmset("testHash", { key1: "value1", key2: "value2" })
      .then(() => redisClient.hgetall("testHash"))
      .then((hashObj) => {
        expect(hashObj).to.deep.equal({ key1: "value1", key2: "value2" });
        done();
      })
      .catch((err) => done(err));
  });

  it("should save a hash table in Redis cache", function () {
    // this.timeout(10000)
    let val = "";
    redisClient
      .hmset("myHashKey", [
        { field1: "value1", field2: "value2" },
        { field1: "value1", field2: "value2" },
      ])
      .then(() => redisClient.hgetall("myHashKey"))
      .then((hashObj) => {
        console.log(hashObj);
        val = hashObj;
        expect(hashObj).to.deep.equal({ field1: "value1", field2: "value2" });
        done();
      })
      .catch((err) => done(err));
    console.log(val);
    console.log("----------------------");
  });

  it("should check if a hash with a specific key exists", function () {
    // this.timeout(10000)
    redisClient
      .hmset("myHashKey", { key: "value", key1: "value" })
      .then(() => redisClient.exists("myHashKey"))
      .then((exists) => {
        expect(exists).to.equal(1);
        done();
      })
      .catch((err) => done(err));
  });

  it("should retrieve a value from Redis cache by key", function () {
    redisClient.client
      .set("myKey", "myValue")
      .then(() => {
        return redisClient.getAsync("myKey");
      })
      .then((value) => {
        expect(value).to.equal("myValue");
        done();
      })
      .catch((err) => done(err));
  });

  it("should retrieve a hash table from Redis cache by key", function () {
    redisClient.client
      .hmsetAsync("myHashKey", { field1: "value1", field2: "value2" })
      .then(() => {
        return redisClient.hgetallAsync("myHashKey");
      })
      .then((hashObj) => {
        expect(hashObj).to.deep.equal({ field1: "value1", field2: "value2" });
        done();
      })
      .catch((err) => done(err));
  });

  it("should check if a hash with a specific key exists", function () {
    redisClient.client
      .hmsetAsync("myHashKey", { field1: "value1", field2: "value2" })
      .then(() => {
        return redisClient.existsAsync("myHashKey");
      })
      .then((exists) => {
        expect(exists).to.equal(1);
        done();
      })
      .catch((err) => done(err));
  });
});
