const MongoClient = require("mongodb").MongoClient;

const url = `mongodb+srv://mebharathgoudsuri:Bunny$9492@bunny.bm8ivdf.mongodb.net/?retryWrites=true&w=majority`;

const createProduct = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
  };

  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db("Bharath");
    const result = db.collection("Test").insertOne(newProduct);
    console.log(result);
  } catch (e) {
    console.log(e);
    return res.json({ message: "db not connected and data not created" });
  }

  client.close();
  res.json({ product: newProduct });
};

const getProducts = (req, res, next) => {
  console.log("products");
  res.json({ hello: "tam" });
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
