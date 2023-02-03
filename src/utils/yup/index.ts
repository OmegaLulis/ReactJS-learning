import * as yup from 'yup'
import appErros from "../../common/errors";

export const LoginSchema = yup.object().shape({
    email: yup.string()
        .email(appErros.InvalidEmail)
        .required(appErros.RequiredField),
    password: yup.string()
        .min(8, appErros.minLength)
        .required(appErros.RequiredField)
        .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/, appErros.InvalidPassword)
})

export const RegisterSchema = yup.object().shape({
    email: yup.string()
        .email(appErros.InvalidEmail)
        .required(appErros.RequiredField),
    password: yup.string()
        .min(8, appErros.minLength)
        .required(appErros.RequiredField)
        .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/,
            appErros.InvalidPassword),
    confirmPassword: yup.string()
        .min(8, appErros.minLength)
        .required(appErros.RequiredField)
        .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/,
            appErros.InvalidPassword),
    firstName: yup.string().required(),
    userName: yup.string().required(),

})