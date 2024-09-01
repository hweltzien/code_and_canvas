const router = require("express").Router();




router.get("/", async (req, res) => {
  console.log("homepage route");
  try {

    res.render("homepage");

  } catch (err) {
    res.json(err);
  }
});

router.get("/about", (req, res) => {
  try {

    res.render("about");

  } catch (err) {
    res.json(err);
  }
});
router.get("/contact", (req, res) => {
  try {

    res.render("contact");

  } catch (err) {
    res.json(err);
  }
});

  router.get("/services", (req, res) => {
    try {
  
      res.render("services", {isLoggedIn: req.session.isLoggedIn});
  
    } catch (err) {
      res.json(err);
    }
  });
  


module.exports = router;



