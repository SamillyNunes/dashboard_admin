import { createContext, useEffect, useState } from "react";
import firebase from "../../firebase/config";
import User from "@/model/User";
import route from "next/router";
import Cookies from "js-cookie";

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

function manageCookies(loggedIn: boolean){
    if(loggedIn){
        Cookies.set('admin-template-samydev-auth', `${loggedIn}`, {
            expires: 7
        });
    } else {
        Cookies.remove('admin-template-samydev-auth');
    }
}

export function AuthProvider(props: any){

    const [user, setUser] = useState<User | undefined>(undefined);
    const [loading, setLoading] = useState<boolean | null>(null);

    useEffect(()=>{
        //essa funcao abaixo vai ficar observando mudancas no token do usuario e quando acontecer vai chamar a funcao em questao
        // eh importante observar que quando da o refresh eh nula, mas depois eh alterada
        const cancel = firebase.auth().onIdTokenChanged(setSession);

        // foi pega acima a funcao que cancela esse registro de monitoramento de token, e abaixo diz que quando
        // o componente desmontar, vai chamar essa funcao
        return () => cancel();
    }, []);

    async function setSession(firebaseUser: firebase.User | null){
        if(firebaseUser?.email){
            const user = await convertedUser(firebaseUser);
            setUser(user);
            manageCookies(true);
            setLoading(false);
            return user.email;
        } else {
            setUser(undefined);
            manageCookies(false);
            setLoading(false);
            return false;
        }
    }

    async function loginGoogle(){

        const resp = await firebase.auth().signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        );

        setSession(resp.user);
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