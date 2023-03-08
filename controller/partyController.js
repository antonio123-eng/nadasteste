import Party from "../models/Party.js"

export const createParty = async(req, res) => {

   const file = req.file
   //req.file.mimetype: image/png
   // req.route.path = /parties
   const party = {
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      budget: req.body.budget,
      image: file.filename
   }

   const response = await Party.create(party)

   res.status(201).json({response, msg: "Festa criada com sucesso."})

}


export const getAllParties = async(req, res) => {

   const parties = await Party.find().sort("-createdAt")

   res.json(parties)

}