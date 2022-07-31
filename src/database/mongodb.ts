import { connect, model, Schema } from 'mongoose'

export const Animal = model(
  'Animal',
  new Schema({
    type: String,
    state: String,
  })
)

connect('mongodb://timbergus:password@monguito:27017/my_app?authSource=admin')
