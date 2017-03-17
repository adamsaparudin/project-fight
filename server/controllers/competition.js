let Competition = require('../models/competition')

module.exports = {

  create: (req, res, next) => {
    Competition.create({
      name: req.body.name,
      description: req.body.description,
      place: req.body.place,
      time: req.body.time ,
      category: {
        name: req.body.category_name,
        tipe: req.body.category_tipe
      },
      photo: req.body.photo
    }, (err, detail)=>{
      res.send({data : detail})
    })
  },

  read: (req, res, next) => {
    Competition.find({}).exec((err, docs) => {
        if(err) res.send(err)
        res.json(docs)
    })
  },

  update: (req, res, next) => {
    Competition.findById(req.params.id, (err, doc) => {
      if (err) res.send(err)
      else {
        doc.update(req.body, (error, data) => {
          if(error) res.send(error)
          else res.send(data)
        })
      }
    })
  },

  deleteCompetition: (req, res, next) => {
    Competition.remove({_id : req.params.id}, (err, doc) => {
      if (err) res.send(err)
      else res.send(doc)
    })
  }

}
