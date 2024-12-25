import Joi from 'joi'

const userValidation = Joi.object({
    firstName: Joi.string().min(2).max(50).required().messages({
        "string.empty": "İsim alanı boş bırakılamaz!",
        "string.min": "İsim en az 2 karakter olmalıdır!",
        "string.max": "İsim en fazla 50 karakter olmalıdır!",
        "any.required": "İsim alanı zorunludur!",
    }),
    lastName: Joi.string().min(2).max(50).required().messages({
        "string.empty": "Soyisim alanı boş bırakılamaz!",
        "string.min": "Soyisim en az 2 karakter olmalıdır!",
        "string.max": "Soyisim en fazla 50 karakter olmalıdır!",
        "any.required": "Soyisim alanı zorunludur!",
    }),
    email: Joi.string().email().required().messages({
        "string.empty": "E-posta alanı boş bırakılamaz!",
        "string.email": "Geçersiz e-posta adresi!",
        "any.required": "E-posta alanı zorunludur!",
    }),
});

export default userValidation;