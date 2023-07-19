const Climb = require('../models/climb');
const Equipment = require('../models/equipment');

module.exports = {
  index,
  show,
  new: newClimb,
  create,

};



async function index(req, res) {
  const climbs = await Climb.find({});
  res.render('climbs/index', { title: 'All Climbs', climbs });
}

async function show(req, res) {
  const climb = await Climb.findById(req.params.id).populate('equipment');
  const equipments = await Equipment.find({ _id: { $nin: climb.equipment } });
  res.render('climbs/show', { title: 'Climb Detail', climb, equipments });
}

function newClimb(req, res) {
  res.render('climbs/new', { title: 'Add Climb', errorMsg: '' });
}

async function create(req, res) {
  req.body.nowShowing = !!req.body.nowShowing;
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    const climb = await Climb.create(req.body);
    res.redirect(`/climbs/${climb._id}`);
  } catch (err) {
    console.log(err);
    res.render('climbs/new', { errorMsg: err.message });
  }
}