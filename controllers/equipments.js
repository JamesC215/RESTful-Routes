const Equipment = require('../models/equipment');
const Climb = require('../models/climb');

module.exports = {
  new: newEquipment,
  create,
  addToList,
};

async function addToList(req, res) {
  const climb = await Climb.findById(req.params.id);
  climb.equipment.push(req.body.equipmentId);
  await climb.save();
  res.redirect(`/climbs/${climb._id}`);
}

async function newEquipment(req, res) {
  const equipments = await Equipment.find({}).sort('name');
  res.render('equipments/new', { title: 'Add Equipment', equipments });
}

async function create(req, res) {
  req.body.born += 'T00:00';
  try {
    await Equipment.create(req.body);
  } catch (err) {
    console.log(err);
  }
  res.redirect('/equipments/new');
}