const Climb = require('../models/climb');

module.exports = {
  create
};

async function create(req, res) {
  const climb = await Climb.findById(req.params.id);
  req.body.user = req.user._id;
  req.body.userName = req.body.user.name;
  req.body.userAvatar = req.user.avatar;
  climb.reviews.push(req.body);
  try {
    await climb.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/climbs/${climb._id}`);
}