import mongoose_delete from "mongoose-delete";
import mongoose from 'mongoose';


const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: Schema.Types.String,
    required: true,
    unique: true
  },
  password: {
    type: Schema.Types.String,
  },
  code:{
    number: {
      type: Schema.Types.String,
    },
    date:{
      type: Schema.Types.Date,
    },
    times: {
      type: Schema.Types.Number,
      default: 0
    }
  },
  profile: {
    phone: {
      type: Schema.Types.String,
    },
    email: {
      type: Schema.Types.String,
    },
    phone_code:{
      type: Schema.Types.String,
    },
    first_name:{
      type: Schema.Types.String,
    },
    last_name:{
      type: Schema.Types.String,
    },
  },
  roles:[
    {
      type: Schema.Types.ObjectId,
      ref: 'Role'
    }
  ],
  permissions:[
    {
      type: Schema.Types.ObjectId,
      ref: 'Permission'
    }
  ]
}, {
  collection: 'users', timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

UserSchema.plugin(mongoose_delete, {
  deletedAt: true,
  overrideMethods: 'all',
  indexFields: 'all'
});


export const UserModel = mongoose.model<any, any>('User', UserSchema);