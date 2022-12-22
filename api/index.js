import express from "express";
const app = express();
import clients  from "./clients.json" assert { type: "json" };;
import cors from "cors";

app.use(cors());

app.get("/", (req, res) => {
  const { q } = req.query;

  const keys = ["first_name", "last_name", "email", "photo"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(q))
    );
  };

  q ? res.json(search(clients).slice(0, 10)) : res.json(clients.slice(0, 10));
});

app.listen(5000, () => console.log("API is working!"));