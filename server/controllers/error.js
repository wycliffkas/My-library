exports.get404 = (req, res, next) => {
  res.status(404).send("404", { pageTitle: "Page Not Found", path: "/404" });
};
