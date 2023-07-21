const Climb = require('../models/climb');
const equipment = require('../models/equipment');
const Equipment = require('../models/equipment');

module.exports = {
  index,
  show,
  new: newClimb,
  create,
  edit,
  update,
  delete: deleteClimb
};

async function deleteClimb(req, res) {
  try {
    const { id } = req.params;
    await Climb.findByIdAndDelete(id);
    res.redirect('/climbs');
  } catch (err) {
    console.log(err);
  }
}

async function update(req, res) {
  try {
    const climb = await Climb.findById(req.params.id).populate('equipment');
    const newEquipment = climb.equipment.filter((item) => item._id.toString() !== req.params.equipmentid);
    const defaultUser = req.user; 
    climb.equipment = newEquipment;
    climb.reviews.forEach((review) => {
      review.user = review.user || defaultUser;
    });

    await climb.save();
    res.redirect(`/climbs/${req.params.id}`);
  } catch (err) {
    console.log(err);
  }
}


function edit(req, res) {
  const climb = Climb.getOne(req.params.id);
  res.render('/climbs');
}

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
  req.body.completed = !!req.body.completed;
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    const climb = await Climb.create(req.body);
    res.redirect(`/climbs/${climb._id}`);
  } catch (err) {
    console.log(err);
    res.render('climbs/new',  { title: 'Add Climb',  errorMsg: err.message });
  }
}