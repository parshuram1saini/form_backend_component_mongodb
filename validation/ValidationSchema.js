import Joi from "joi";
const joiValidation = Joi.object({
  username: Joi.string().required(),
  password: Joi.number()
    .max(999999)
    .min(100000)
    .required(),
  LicenseStartDate: Joi.date().raw(),
  LicenseExpiryDate: Joi.string().raw(),
});
export default joiValidation;
