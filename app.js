const express = require("express");

// express app
const app = express();

// resister view engine
app.set("view engine", "ejs");

// listen for request
app.listen(3000);

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Tehseen",
      snippet:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus aliquam cupiditate accusantium deleniti nobis voluptatem id mollitia earum? Expedita illo id saepe magni quisquam. Veritatis laborum molestias architecto dolorem saepe!",
    },
    {
      title: "Mustqeem",
      snippet:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus aliquam cupiditate accusantium deleniti nobis voluptatem id mollitia earum? Expedita illo id saepe magni quisquam. Veritatis laborum molestias architecto dolorem saepe!",
    },
    {
      title: "Ihsan",
      snippet:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus aliquam cupiditate accusantium deleniti nobis voluptatem id mollitia earum? Expedita illo id saepe magni quisquam. Veritatis laborum molestias architecto dolorem saepe!",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create" });
});

app.use((req, res) => {
  res.render("404", { title: "404" });
});

// app.get("/", (req, res) => {
//   //   res.send("<p>Home page</p>");
//   res.sendFile("./Views/index.html", { root: __dirname });
// });

// app.get("/about", (req, res) => {
//   //   res.send("<p>About page</p>");
//   res.sendFile("./Views/about.html", { root: __dirname });
// });

// app.get("/about-us", (req, res) => {
//   res.redirect("/about");
// });

// // 404 page, use midlewere
// app.use((req, res) => {
//   res.status(404).sendFile("./Views/404.html", { root: __dirname });
// });
