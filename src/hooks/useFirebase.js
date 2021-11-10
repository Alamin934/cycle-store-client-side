import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Components/FireBase/firebase.init";
initializeAuthentication();

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false))
    };

    const logOut = () => {
        setIsLoading(true);
        return signOut(auth)
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);



    return {
        user,
        error,
        setUser,
        setError,
        signInUsingGoogle,
        logOut,
        isLoading
    }
};

export default useFirebase;