import React, {Component,useEffect}  from 'react';
import { getRedirectResult } from 'firebase/auth';
import {auth,signInWithGooglePopup,createUserDocumentFromAuth,signInWithGoogleRedirect} from "../../utils/Firebase/FirebaseUtils";
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import SignInForm from '../../components/SignInForm/SignInForm';
import './SignIn.scss';

const SignIn = () => {
    const solution=async () => {
        const response = await getRedirectResult(auth);
        if(response){
            const userDocRef = await createUserDocumentFromAuth(response.user);
        }
    };
    useEffect(() => {
        solution()
    },[])

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return(
        //id="main" className="container col-10 bg-light"
            <div>
                <h3 className="SignInTitle">Sign In</h3>
                <div className='authentication-container'>
                <SignInForm />
                <SignUpForm />
                </div>
            </div>
    );
}

export default SignIn;

