import Input from "@/components/auth/Input";
import { useState } from "react";

export default function Auth(){
    const [mode, setMode] = useState<'login' | 'register'>('login');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function submit(){
        if(mode==='login'){
            console.log('Login');
        }else {
            console.log('Cadastrar');
        }
    }

    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <div className="w-1/2">
                <h1 className="text-xl font-bold mb-5">
                    {mode === 'login' ? 'Entre com a sua conta' : 'Cadastre-se na Plataforma'}
                </h1>
                <Input 
                    label="Email"
                    value={email}
                    type="email"
                    onValueChanged={setEmail}
                    required
                />
                <Input
                    label="Senha"
                    value={password}
                    type="password"
                    onValueChanged={setPassword}
                    required
                />

                <button onClick={submit} className="
                    w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg
                    px-4 py-3 mt-6
                ">
                    {mode === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>

                <hr className="my-6 border-gray-300 w-full" />

                <button onClick={submit} className="
                    w-full bg-red-500 hover:bg-red-400 text-white rounded-lg
                    px-4 py-3 
                ">
                    Entrar com Google
                </button>
            </div>
        </div>
    );
}