import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from "../Firebase/config";



export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logoutUser = () => {
        setLoading(true);
        localStorage.removeItem('doctors-token');
        return signOut(auth);
    }



    useEffect(() => {
        const unmount = onAuthStateChanged(auth, currentUser => {
            console.log("state changed", currentUser);
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unmount();
        }
    }, [])

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    }


    const authInfo = {
        user,
        loading,
        createUser,
        updateUser,
        loginUser,
        logoutUser,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider