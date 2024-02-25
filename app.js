const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
const { result } = require("lodash");
// express app
const app = express();

const dbURI = "mongodb+srv://tehseen:test1234@test-blog.kkto4sq.mongodb.net/";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// resister view engine
app.set("view engine", "ejs");

// listen for request

// -----------------Middleweres---------------------
// app.use((req, res, next) => {
//   console.log("new requres made:");
//   console.log("host", req.hostname);
//   console.log("path", req.path);
//   console.log("method", req.method);
//   next();
// });

//
//   app.use((req, res, next) => {
//     console.log("in the next middlewere");
//     next();
//   });

// ---------------------------------------------

// -------Third party middlewere & static files--------------------
// for cookies, session, etcz

app.use(express.static("public"));
app.use(morgan("dev"));

// mongoose and mongo sandboz routes
// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "new blog 2",
//     snippet: "about my new blog",
//     body: "more about my new blog",
//   });

//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/all-blogs", (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/single-blog", (req, res) => {
//   Blog.findById("65db4bbbe476cf6f3a7848eb")
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => console.log(err));
// });

app.get("/", (req, res) => {
  // const blogs = [
  //   {
  //     title: "Tehseen",
  //     snippet:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus aliquam cupiditate accusantium deleniti nobis voluptatem id mollitia earum? Expedita illo id saepe magni quisquam. Veritatis laborum molestias architecto dolorem saepe!",
  //   },
  //   {
  //     title: "Mustqeem",
  //     snippet:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus aliquam cupiditate accusantium deleniti nobis voluptatem id mollitia earum? Expedita illo id saepe magni quisquam. Veritatis laborum molestias architecto dolorem saepe!",
  //   },
  //   {
  //     title: "Ihsan",
  //     snippet:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus aliquam cupiditate accusantium deleniti nobis voluptatem id mollitia earum? Expedita illo id saepe magni quisquam. Veritatis laborum molestias architecto dolorem saepe!",
  //   },
  // ];
  // res.render("index", { title: "Home", blogs });
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// blog routes`
app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
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
