const Skill = require('./model');


function single(attr) {
  return Skill.findOne(attr)
}

function all(attr) {
  return Skill.findAll(attr)
}

function create(attr){
  return Skill.create(attr)
}


module.exports = {
  single,
  all,
  create
}
