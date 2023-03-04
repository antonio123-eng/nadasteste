import Party from "../models/Party.js"

export const createParty = async(req, res) => {

   const party = {
      title: req.body.title,
      authot: req.body.authot,
      description: req.body.description,
      budget: req.body.budget,
      // image: req.body.image,
   }

   const response = await Party.create(party)

   res.status(201).json({response, msg: "Festa criada com sucesso."})

}


export const getAllParties = async(req, res) => {

   const parties = await Party.find()

   res.json(parties)

}