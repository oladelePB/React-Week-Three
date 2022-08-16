import * as yup from 'yup'

// Min of 5 characters, 1 uppercase, 1 lower case, 1 numeric.
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
    email: yup.string().email('Please enter a valid email').required('Required'),
    age: yup.number().positive().integer().required('Required'),
    password: yup.string().min(5).matches(passwordRules, {message: 'Please create a stronger password'}).required('Required'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must macth').required('Required'),
})