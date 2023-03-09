import Party from "../models/Party.js"

export const createParty = async(req, res) => {

   //req.file.mimetype: image/png
   // req.route.path = /parties
   console.log(req.file)
   const { title, author, description, budget } = req.body
   let image

   if(req.file) {
      image = req.file.filename
   }

   const party = {
      title, 
      author, 
      description, 
      budget: Number(budget), 
      image
   }


   const response = await Party.create(party)

   res.status(201).json({response, msg: "Festa criada com sucesso."})

}


export const getAllParties = async(req, res) => {

   const parties = await Party.find().sort("-createdAt")

   res.json(parties)

}