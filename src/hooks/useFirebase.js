import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GithubAuthProvider, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";

import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState(' ');
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');
    const [isLogin, setIsLogin] = useState(false);

    const auth = getAuth();

    const handleRegistration = (e) => {
        const emailId = document.getElementById('email_id');
        const passwordId = document.getElementById('password_id');
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('please password at least 6 characters long');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must contain 2 uppercase');
            return;
        }
        if (isLogin) {
            processLogin(email, password);
        }
        else {
            registerNewUser(email, password)
        }
        emailId.value = '';
        passwordId.value = '';
    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError(' ');
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);

    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const toggleLogin = (e) => {
        setIsLogin(e.target.checked);
    }

    // login end

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }

    const signInUsinGithub = () => {
        const auth = getAuth();
        setIsLoading(true);
        const gitProvider = new GithubAuthProvider();
        return signInWithPopup(auth, gitProvider);

    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        error,
        isLoading,
        setIsLoading,
        logOut,
        signInUsingGoogle,
        signInUsinGithub,


        handleRegistration,
        handleEmailChange,
        handlePasswordChange,
        toggleLogin,
        isLogin


    }

}

export default useFirebase;