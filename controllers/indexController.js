exports.home = (req, res) => {
  const title = "Ville de Chilly-Mazarin";
  res.render('pages/index', {
    title
  });
};
