
import SignUp from './routes/SignUp.svelte'
import SignIn from './routes/SignIn.svelte'
import ForgotPassword from './routes/ForgotPassword.svelte'

export default {
    '/': SignIn,
    '/signup': SignUp,
    '/fogotpassword': ForgotPassword,
   
   
}