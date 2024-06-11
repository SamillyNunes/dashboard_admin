import { createContext, useState } from "react";
import firebase from "../../firebase/config";
import User from "@/model/User";
import route from "next/router";

interface AuthContextProps {
    user?: User;
    loginGoogle?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

async function convertedUser(firebaseUser: firebase.User): Promise<User>{
    
    const token = await firebaseUser.getIdToken();

    return {
        uid: firebaseUser.uid,
        name: firebaseUser.displayName,
        email: firebaseUser.email,
        token,
        provider: firebaseUser.providerData[0]?.providerId,
        imageUrl: firebaseUser.photoURL,
    }
}

export function AuthProvider(props: any){

    const [user, setUser] = useState<User | undefined>(undefined);

    async function loginGoogle(){

        const resp = await firebase.auth().signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        );

        if(resp.user == null){
            return;
        }

        const user = await convertedUser(resp.user);
        
        setUser(user!);
        route.push("/");
    }

    return (
        <AuthContext.Provider value={{
            user,
            loginGoogle,
        }} >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;