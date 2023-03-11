import mongoose from 'mongoose'
import { serviceSchema } from './Services.js'

const partySchema = new mongoose.Schema({
   title: String,
   author: String,
   description: String,
   budget: Number,
   image: {
      value: String,
      miType: String
   },
   services: {
      type: [serviceSchema]
   }
}, {timestamps: true})

export default mongoose.model("Party", partySchema)