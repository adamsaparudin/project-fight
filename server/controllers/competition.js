let Competition = require('../models/competition')

module.exports = {

  create: (req, res, next) => {
    console.log(req.body);
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
      if(err) res.send(err)
      else res.send({data : detail})
    })
  },

  findOneList : (req,res,next) => {
    Competition.findOne({
      '_id' : req.body.id
    }, (err, doc) => {
      if (err) res.send(err)
      else res.send(doc)
    })
  },

  joinUser: (req, res, next) => {
    Competition.findById(req.params.id, (err, doc) => {
      if(err) res.send(err)
      else {
        doc.update({$push: {listPeopleJoin: req.params.userid}}, (error, result) => {
          if(error) res.send(error)
          else res.send(result)
        })
      }
    })
  },

  readOne: (req, res, next) => {
    Competition.findById(req.params.id, (err, doc) => {
      if(err) res.send(err)
      else res.send(doc)
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
