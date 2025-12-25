import mongoose from "mongoose";

const VerificationTokenSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
    },
    token: {
      type: String,
      required: true,
    },
    expires: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
    _id: true,
  }
);

// Virtual for identifier (maps to _id)
VerificationTokenSchema.virtual("identifier").get(function () {
  return this._id;
});

VerificationTokenSchema.set("toJSON", {
  virtuals: true,
  transform: function (doc, ret) {
    ret.identifier = ret._id;
    return ret;
  },
});

// Compound unique index for identifier and token
VerificationTokenSchema.index({ identifier: 1, token: 1 }, { unique: true });

export default mongoose.models.VerificationToken || mongoose.model("VerificationToken", VerificationTokenSchema, "verification_tokens");

