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
          User.create({
            email: req.body.email,
            fb_id: req.body.id,
            name: req.body.name,
            profilePic: req.body.picture.data.url,
            gender: req.body.gender
          }, (error, createdUser) => {
            if(err) res.send(err)
            else {
              var send = require('gmail-send')({
                          user: 'user@gmail.com',               // Your GMail account used to send emails
                          pass: 'abcdefghijklmnop',             // Application-specific password
                          to:   `${createdUser.name} <${createdUser.email}>`,      // Send back to yourself
                          // from:   '"User" <user@gmail.com>'  // from: by default equals to user
                          // replyTo:'user@gmail.com'           // replyTo: by default undefined
                          subject: 'Activate your account to continue using our service.',
                          html: `<p> Click <a href='http://localhost:3000/api/users/${createdUser._id}/activate'>here</a> to activate your account </p>`
                          // html:    '<b>html text text</b>'
                        });
                        // Override any default option and send email
                        send({
                        }, function (err, res) {
                          console.log('* [example1] send(): err:', err, '; res:', res);
                        });
              let token = jwt.sign(createdUser, 'Kelompok3Hacktiv8')
              res.send({token: token})
            }
          })
        }
        else {
          console.log("dari else");
          let token = jwt.sign(user, 'Kelompok3Hacktiv8')
          res.send({token: token})
        }
      }
    })
  },

  getOne : (req,res,next) => {
    User.findById(req.params.id, (err,doc) => {
      if(err) res.send(err)
      else res.send(doc)
    })
  },

  activeAccount: (req, res, next) => {
    User.findById(req.params.id, (err,doc) => {
      if (err) res.send(err)
      else {
        doc.update({active: true}, (err, result) => {
          if(error) res.send(error)
          else res.redirect('http://localhost:8080/profile/', req.params.id)
        })
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
