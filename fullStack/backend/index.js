import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("ready");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A Joke 1",
      content: "A Joke 1",
    },
    {
      id: 2,
      title: "A Joke 2",
      content: "A Joke 2",
    },
    {
      id: 3,
      title: "A Joke 3",
      content: "A Joke 3",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("port:", port);
});
