import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: false,  
    },
    firstName: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
      required: false,
    },
    profilePicture: {
      type: String,  
      required: false,
    },
    bio: {
      type: String,  
      required: false,
    },
    skillsOffered: {
      type: [String],  
      required: false,
    },
    skillsWanted: {
      type: [String],  
      required: false,
    },
    location: {
      type: {
        type: String,
        enum: ['Point'],
        required: false,
      },
      coordinates: {
        type: [Number], // [longitude, latitude]
        required: false,
      },
    },
    rating: {
      type: Number,  
      default: 0,
    },
    reviews: [
      {
        reviewer: { type: Schema.Types.ObjectId, ref: 'User' }, // Reference to the user who left the review
        rating: { type: Number, min: 1, max: 5 },
        comment: { type: String },
        date: { type: Date, default: Date.now },
      },
    ],
    isActive: {
      type: Boolean,  
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Adding geospatial index for location-based search
userSchema.index({ location: '2dsphere' }); 

export default mongoose.models.User || mongoose.model("User", userSchema);