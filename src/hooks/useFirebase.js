import { useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import initialieAuthentication from "../firebase/firebase.init";

initialieAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    //sing in with google
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    //sign in with other will be added here

    //log out
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    };

    //observing state change or not
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, []);

    //return
    return {
        user,
        error,
        signInWithGoogle,
        logOut
    }
}


//export
export default useFirebase;