import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Components/FireBase/firebase.init";
initializeAuthentication();

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);


    const userRegistration = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const newUser = { email, displayName: name }
                setUser(newUser);

                saveUser(email, name, 'POST');
                //send name to firebase after user creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    const userSignIn = (email, password, history, location) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                const redirectUri = location.state?.from || '/';
                history.replace(redirectUri);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    const signInUsingGoogle = (history, location) => {
        return signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                const redirectUri = location.state?.from || '/';
                history.replace(redirectUri);
                saveUser(user.email, user.displayName, 'PUT');
                setError('');
            }).catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    };

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email]);

    const logOut = (history) => {
        setIsLoading(true);
        return signOut(auth)
            .then(() => {
                history.push('/');
                setUser({});
            })
            .catch(error => {
                setError(error.message);
            })
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

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then()
    }



    return {
        user,
        error,
        setUser,
        setError,
        signInUsingGoogle,
        logOut,
        isLoading,
        userSignIn,
        userRegistration,
        admin
    }
};

export default useFirebase;