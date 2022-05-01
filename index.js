import mongodb from "mongodb";
const client = new mongodb.MongoClient(
  "mongodb+srv://JRoberts73:Password12@cluster0.esi7o.mongodb.net/?retryWrites=true&w=majority"
);
await client.connect();

const db = client.db("Library");
const collection = db.collection("Children's Books");
await collection.insertMany([
  {
    title: "Llama Llama Red Pajama",
    type: "picture book",
    pages: "12 pages",
  },
  {
    title: "Goodnight Goone",
    type: "picture book",
    pages: "11",
  },
  {
    name: "Biscuit",
    type: "Story with pictures",
    pages: "22",
  },
]);

const results = collection.find({
  name: "Biscuit",
});
const names = await results.toArray();

console.log(names);

const results = await collection.updateOne(
  {
    name: "Biscuit",
  },
  {
    $set: { pages: "19" },
  }
);

console.log(results);

const results = await collection.deleteOne({
  title: "Llama Llama Red Pajama",
});
console.log(results);
