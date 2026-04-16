const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = process.env.MONGO_URI;

if (!uri) {
  throw new Error("Please add your MONGO_URI to your environment variables");
}

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client;

// Check if we are in a development environment
if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so the client is preserved
  // across module reloads caused by Hot Module Replacement (HMR).
  if (!global._mongoClient) {
    global._mongoClient = new MongoClient(uri, options);
  }
  client = global._mongoClient;
} else {
  // In production mode, it's best to instantiate a new client normally
  // as the server starts once and stays running.
  client = new MongoClient(uri, options);
}

export const collections = {
  Users: "users",
};

export const dbConnect = (c) => {
  return client.db(process.env.DB_NAME).collection(c);
};
