const crypto = require("crypto");
const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("should test string data and return hash", () => {
    const data = '4'
    const stringifyData = JSON.stringify(data)
    const cryptoData = crypto.createHash("sha3-512").update(stringifyData).digest("hex")
    const trivialKey = deterministicPartitionKey(data);
    expect(trivialKey).toBe(cryptoData);
  });

  it("should test partitionKey 4 and return data '4'", () => {
    const data = { partitionKey: 4 }
    const stringifyData = JSON.stringify(data.partitionKey)
    const trivialKey = deterministicPartitionKey(data);
    expect(trivialKey).toContain(stringifyData);
  });

  it("should test partitionKey length if grater then 256 then return hash", () => {
    const data = { partitionKey: 'wow its working now to test string 256 above here. wow its working now to test string 256 above here. wow its working now to test string 256 above here. wow its working now to test string 256 above here. wow its working now to test string 256 above here. wow its working now to test string 256 above here.  ' }
    const cryptoData = crypto.createHash("sha3-512").update(data.partitionKey).digest("hex")
    const trivialKey = deterministicPartitionKey(data);
    expect(trivialKey).toBe(cryptoData);
  });

});
