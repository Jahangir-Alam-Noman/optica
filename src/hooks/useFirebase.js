import { getAuth, GithubAuthProvider, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";

import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState(' ');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
        //         .then(result => {
        //         console.log(result.user);
        //         setUser(result.user);
        //     })
        //  .catch(error => {
        //     setError(error.message);
        //  })
    }

    const signInUsinGithub = () => {
        const auth = getAuth();
        setIsLoading(true);
        const gitProvider = new GithubAuthProvider();
        return signInWithPopup(auth, gitProvider);
        //         .then(result => {
        //         console.log(result.user);
        //         setUser(result.user);
        //     })
        // .catch(error => {
        //     setError(error.message);
        // })

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
        signInUsinGithub

    }

}

export default useFirebase;