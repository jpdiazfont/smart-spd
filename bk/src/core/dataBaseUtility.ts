import mongoose from 'mongoose'


class DataBaseUtility {
  
  constructor () { }
  
  public connect = async () => {
    try{
      const conn = await mongoose.connect(global.env.database[global.env.mode].uri, {})
      console.log(`Mongo contented`)
    } catch (error) {
      console.log('error', error)
    }
  }
}

export { DataBaseUtility }