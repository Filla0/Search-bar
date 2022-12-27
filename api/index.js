import express from "express";
const app = express();
import clients  from "./clients.json" assert { type: "json" };;
import cors from "cors";

app.use(cors());
const keys = ["first_name", "last_name", "email", "photo", "origin"];


app.get("/", (req, res) => {
  const { q } = req.query;
  console.log(q);

  if (q === null || q.length === 0) {
    return res.json(clients.slice(0, 10))
  }
  return res.json(search(clients, keys, q).slice(0, 10))
  
});
const search = (clients, keys, q) => {
  console.log(q);
  return clients.filter((item) =>
    keys.some((key) => item[key]?.toLowerCase().includes(q))
  );
};

app.listen(5000, () => console.log("API is working!"));
