const jwt = require('jsonwebtoken');

let User = require('../models/user')


module.exports = {

  create: (req, res, next) => {
    User.findOne({
      'fb_id': req.body.id
    }, (err, user) => {
      if(err) res.send(err)
      else {
        if(!user) {
          user = new User({
            email: req.body.email,
            fb_id: req.body.id,
            name: req.body.name,
            profilePic: req.body.picture.data.url,
            gender: req.body.gender
          })
          user.save().then( (createdUser) => {
              if(error) res.send(error)

              else {
                let token = jwt.sign(createdUser, 'Kelompok3Hacktiv8')
                res.send({token: token})
              }
          })
          .catch( (error) => {
            res.send(error)
          })
        }
        else {
          let token = jwt.sign(user, 'Kelompok3Hacktiv8')
          res.send({token: token})
        }
      }
    })
  },

  read: (req, res, next) => {
    User.find({}).exec((err, docs) => {
        if(err) res.send(err)
        res.json(docs)
    })
  },

  update: (req, res, next) => {
    User.findById(req.params.id, (err, doc) => {
      if (err) res.send(err)
      else {
        doc.update(req.body, (error, data) => {
          if(error) res.send(error)
          else res.send(data)
        })
      }
    })
  },

  deleteUser: (req, res, next) => {
    User.remove({_id : req.params.id}, (err, doc) => {
      if (err) res.send(err)
      else res.send(doc)
    })
  }

}
