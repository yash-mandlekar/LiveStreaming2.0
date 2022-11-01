module.exports = function (app, streams) {
  // GET home
  var index = function (req, res) {
    res.render("index", {
      title: "Project RTC",
      header: "लोकदेश लाइव",
      username: "Username",
      share: "Share this link",
      footer: "pierre@chabardes.net",
      id: req.params.id,
    });
  };
  var view = function (req, res) {
    res.render("view");
  };

  // GET streams as JSON
  var displayStreams = function (req, res) {
    var streamList = streams.getStreams();
    // JSON exploit to clone streamList.public
    var data = JSON.parse(JSON.stringify(streamList));

    res.status(200).json(data);
  };

  app.get("/streams.json", displayStreams);
  app.get("/", index);
  app.get("/view", view);
  app.get("/:id", index);
};
