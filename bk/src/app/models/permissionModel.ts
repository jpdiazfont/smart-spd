import mongoose_delete from "mongoose-delete";
import mongoose from 'mongoose';


const { Schema } = mongoose;

const PermissionSchema = new Schema({
  name:{
    type: Schema.Types.String,
    required: true,
  },
  module:{
    type: Schema.Types.String,
  },
  description: {
    type: Schema.Types.String
  },
  slug:{
    type: Schema.Types.String,
  }
}, {
  collection: 'permissions', timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

PermissionSchema.plugin(mongoose_delete, {
  deletedAt: true,
  overrideMethods: 'all',
  indexFields: 'all'
});


export const PermissionModel = mongoose.model<any, any>('Permission', PermissionSchema);