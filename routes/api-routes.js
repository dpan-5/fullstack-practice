const db = require("../models");
var Sequelize = require("sequelize");
const multer = require("multer");
// const upload = multer({ dest: "uploads/" });

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, new Date().toISOString() + file.originalname);
//   },
// });
// const fileFilter = (req, file, cb) => {
//   // reject a file
//   if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 1024 * 1024 * 5,
//   },
//   fileFilter: fileFilter,
// });
module.exports = function (app) {
  // const handleError = (err, res) => {
  //   res
  //     .status(500)
  //     .contentType("text/plain")
  //     .end("Oops! Something went wrong!");
  // };

  // const upload = multer({
  //   dest: "../uploads",
  //   // you might also want to set some limits: https://github.com/expressjs/multer#limits
  // });
  app.get("/", (req, res) => {
    db.People.findAll({}).then(function (response) {
      //   console.log("TEST HERE " + JSON.stringify(response));
      res.render("index", { people: response.map((re) => re.toJSON()) });
    });
  });

  app.get("/api/people", (req, res) => {
    db.People.findAll({}).then(function (response) {
      res.json(response);
    });
  });

  app.get("/image.png", (req, res) => {
    res.sendFile(path.join(__dirname, "./uploads/image.png"));
  });

  app.get("/api/people/:id", (req, res) => {
    var id = req.params.id;
    db.People.findOne({ id: id }).then(function (response) {
      res.json(response);
    });
  });

  app.post("/api/people", function (req, res) {
    var body = req.body;
    // console.log("NEXT TEST " + JSON.stringify(body));
    db.People.create(body).then(function (results) {
      res.json(results);
    });
  });

  app.get("/api/images/:id", (req, res) => {
    var id = req.params.id;
    db.findOne({ id: id }).then(function (response) {
      res.json(response);
    });
  });

  // app.post(
  //   "/api/images",
  //   upload.single("image" /* name attribute of <file> element in your form */),
  //   (req, res) => {
  //     const tempPath = req.file.path;
  //     const targetPath = path.join(__dirname, "./uploads/image.png");

  //     if (path.extname(req.file.originalname).toLowerCase() === ".png") {
  //       fs.rename(tempPath, targetPath, (err) => {
  //         if (err) return handleError(err, res);

  //         res.status(200).contentType("text/plain").end("File uploaded!");
  //       });
  //     } else {
  //       fs.unlink(tempPath, (err) => {
  //         if (err) return handleError(err, res);

  //         res
  //           .status(403)
  //           .contentType("text/plain")
  //           .end("Only .png files are allowed!");
  //       });
  //     }
  //   }
  // );
  // app.post("/api/images/", upload.single("productImage"), (req, res) => {
  //   var id = req.params.id;
  //   // console.log("HERER" + req.body);
  //   const product = {
  //     src: req.file,
  //   };
  //   db.Image.create(product).then(function (results) {
  //     res.json(results);
  //   });
  // product
  //   .save()
  //   .then((result) => {
  //     console.log(result);
  //     res.status(201).json({
  //       message: "Created product successfully",
  //       createdProduct: {
  //         _id: result._id,
  //         request: {
  //           type: "GET",
  //           url: "http://localhost:8080/api/images" + result._id,
  //         },
  //       },
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.status(500).json({
  //       error: err,
  //     });
  //   });
  // });

  app.delete("/api/people/:id", (req, res) => {
    var id = req.params.id;
    db.People.destroy({
      where: { id: id },
    }).then(function (results) {
      res.json(results);
    });
  });

  app.put("/api/people/", (req, res) => {
    body = req.body;
    // console.log(body);
    // console.log(body.id.id);
    // console.log($(this).text());
    db.People.update(
      {
        person_name: body.person_name,
        city_name: body.city_name,
        age: body.age,
      },
      { where: { id: body.id.id } }
    ).then(function (response) {
      res.json(response);
    });
  });
};
