import express from "express";
import path from "path";
const __dirname = path.resolve();
const app = express();

//const path = path.resolve(__dirname);
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
 res.send("Salam Pakistan!");
});

// app.get("/myBlog", (req, res) => {
//   res.sendFile(path.join(__dirname, "index.html"));
//  });
//  res.json({ name: "M.A.Hasnain!",
//    age: "22" });
// });

app.listen(port, () => {
 console.log(`Example app listening http://localhost:${port}`);
});
