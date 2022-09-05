import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

//defining schema //
const studSchema = new mongoose.Schema({
  username: { type: String, required: true, trim: true, unique: true },
  password: { type: Number, required: true, trim: true },
  LicenseStartDate: { type: String, required: true, trim: true,},
  LicenseExpiryDate: { type: String, required: true, trim: true,},
});
studSchema.plugin(uniqueValidator);
const EmpModal = mongoose.model("studentdata", studSchema);
export default EmpModal;
