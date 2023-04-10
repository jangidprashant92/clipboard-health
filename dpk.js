const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate = event ? event : TRIVIAL_PARTITION_KEY;

  if (event) {
    const data = JSON.stringify(event);
    candidate = event.partitionKey ? event.partitionKey : crypto.createHash("sha3-512").update(data).digest("hex");
  }

  if (candidate) {
    candidate = (typeof candidate !== "string") ? JSON.stringify(candidate) : candidate;
  }

  /* If passing event with partitionKey and that length grater then 256 that time this condition called */
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }

  return candidate;
};