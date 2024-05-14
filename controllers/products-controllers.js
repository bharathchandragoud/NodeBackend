const MongoClient = require("mongodb").MongoClient;

const url =
  "mongodb+srv://mebharathgoudsuri:Bhavya9492@bunny.bm8ivdf.mongodb.net/?retryWrites=true&w=majority&appName=Bunny";

const createProduct = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
  };

  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db("Bharath");
    const collection = db.collection("Test");
    const result = await collection.insertOne(newProduct);
  } catch (e) {
    console.log(e);
    return res.json({ message: "db not connected and data not created" });
  }

  client.close();
  res.json({ product: newProduct });
};

const getProducts = async (req, res, next) => {
  const client = new MongoClient(url);
  let result;
  try {
    await client.connect();
    const db = client.db("Bharath");
    const collection = db.collection("Test");
    result = await collection.find().toArray();
  } catch (e) {
    console.log(e);
    return res.json({ message: "db not connected and data not fteched" });
  }

  client.close();
  return res.json(result);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
