const db = require("../models");

// Defining methods for the Article
module.exports = {

   //USER QUERIES

  findAllCharacter: function(req, res) {
  
    db.Character
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByIdCharacter: function(req, res) {
    db.Character
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createCharacter: function(req, res) {
    console.log(req.body)
    db.Character
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateCharacter: function(req, res) {
    console.log(req.body.currentInitRoll)
    db.Character
      .findOneAndUpdate({ _id: req.params.id }, {$set:{currentInitRoll: req.body.currentInitRoll}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeCharacter: function(req, res) {
    db.Character
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //Battle QUERIES
  findAllBattle: function(req, res) {
  
    db.Battle
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByIdBattle: function(req, res) {
    db.Battle
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createBattle: function(req, res) {
    console.log(req.body)
    db.Battle
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateBattleLikeCount: function(req, res) {
    db.Battle.findById(req.params.id, function(err, Battle) {
      if (err) throw err;
      if (req.params.incrementOrDecrement === 'increment') {
        Battle.count += 1;
      } else if (req.params.incrementOrDecrement === 'decrement') {
        Battle.count -= 1;
      }
      Battle.save(err => {
        if (err) throw err;
        console.log('Battle decremented!')
      })
    })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  removeBattle: function(req, res) {
    db.Battle
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // sortTopBattle: function(req, res){
  //   db.Battle
  //     .findByCount(req.params.count)
  //     .sort()
  // }
 
};
