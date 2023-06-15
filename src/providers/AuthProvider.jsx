import { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from 'firebase/auth';
import { app } from '../firebase/firebase.config'
// import { getRole } from '../Api/Api';

export const AuthContext = createContext(null)

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    // const [loading, setLoading] = useState(true)

    // User Role
    // const [role, setRole] = useState(null);

    // useEffect(() => {
    //     if (user) {
    //         getRole(user.email)
    //             .then(data => setRole(data))
    //     }
    // }, [user]);


    //create new user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign in
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //sign in with google
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // Log out
    const logOut = () => {
        return signOut(auth)
    }

    // Update profile
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    // Auth state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        signIn,
        signInWithGoogle,
        logOut,
        updateUserProfile,
        // role,
        // setRole,
    }

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider
