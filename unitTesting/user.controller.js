module.exports = {
    getUserName: (req, res) => {
      if (req.user.isLoggedIn()) {
        return res.send("Bob Barker");
      }
      res.send("You need to log in to access this info.");
    }
  }