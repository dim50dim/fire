import { GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged } from 'firebase/auth';
import { useContext,createContext } from 'react'

const AuthContext = createContext();
export const AuthContextProvider = ({children}) => {
    return (

        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}