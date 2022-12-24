import React, { Component,useState }  from 'react';
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth,signInWithGooglePopup,signInAuthUserWithEmailAndPassword} from '../../utils/Firebase/FirebaseUtils';
import FormInput from '../FormInput/FormInput';
import "./SignInForm.scss";
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { logIn } from '../../redux/userAuth';
const defaultFormFields = {
    email:'',
    password:'',
};

const SignInForm = () => {

    // const{count}= useSelector((state)=>state.counter);
    const dispatch= useDispatch();
    const navigate=useNavigate();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    console.log(formFields);

    const resetFormFields=()=>{
       setFormFields(defaultFormFields); 
    };

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
        dispatch(logIn({displayName:user.displayName}))
        navigate('/');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const response = await signInAuthUserWithEmailAndPassword(email,password);
            console.log(response);
            dispatch(logIn({displayName:response.user.email}))
            navigate('/');
        }catch(error){
            switch(error.code){
                case 'auth/wrong-password':
                    alert('incorrect password for this email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error);
            }
        };
    };
    
    const handleChange = (event) =>{
        const {name, value} = event.target;

        setFormFields({...formFields, [name]:value});

    };


    return(
        <div className='sign-up-container signIn12'>
            <h3>Already have an account</h3>
            <span>Sign In with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' type="email" required onChange={handleChange} name='email' value={email}/>
                <FormInput label='Password' type="password" required onChange={handleChange} name='password' value={password}/>

                <button className='btn btn-primary btn-lg mb-4' type='submit'>Sign In</button>
                <button className='btn btn-primary btn-lg mb-4 ms-4' type='button' onClick={signInWithGoogle}>Google Sign In</button>

            </form>
        </div>
    );
};

export default SignInForm;