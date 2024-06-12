import Input from "@/components/auth/Input";
import { WarningIcon } from "@/components/icons";
import useAuth from "@/data/hook/useAuth";
import { useState } from "react";

const imageSrc = "https://images.unsplash.com/photo-1716725239696-ae7ee120cde1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function Auth() {
    const { loginGoogle, login, signUp } = useAuth();

    const [mode, setMode] = useState<'login' | 'register'>('login');

    const [error, setError] = useState<string | null>(null);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit() {
        console.log('Submiting...');

        try {
            console.log('1o if');

            if (mode === 'login') {
                await login?.(email, password);
            } else {
                console.log('Cadastrar');
                await signUp?.(email, password);
            }
        } catch (e) {
            console.log('Catching submiting error...');

            let msg;

            if (e instanceof Error) {
                console.log(e);
                msg = e.message;
            } else {
                msg = String(e);
            }

            showError(msg);

        }
    }

    function showError(msg: string, duration = 5) {
        setError(msg);
        // depois desse tempo, vai setar pra nulo:
        setTimeout(() => setError(null), duration * 1000);
    }

    return (
        <div className="flex  h-screen items-center justify-center">
            <div className="hidden md:block md:w-1/2 lg:w-2/3">
                <img src={imageSrc} alt="Imagem da tela de autenticação" className="h-screen w-full object-cover" />
            </div>

            <div className="m-10 w-full md:w-1/2 lg:w-1/3">
                <h1 className="text-3xl font-bold mb-5">
                    {mode === 'login' ? 'Entre com a sua conta' : 'Cadastre-se na Plataforma'}
                </h1>

                {error && (
                    <div className="
                        flex items-center 
                        bg-red-400 text-white p-2  rounded-lg my-2 
                    ">
                        {WarningIcon()}
                        <span className="ml-3 text-sm"> {error} </span>
                    </div>
                )}

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

                <button onClick={loginGoogle} className="
                    w-full bg-red-500 hover:bg-red-400 text-white rounded-lg
                    px-4 py-3 
                ">
                    Entrar com Google
                </button>

                {mode === 'login' ? (
                    <p className="mt-8">
                        Novo por aqui?
                        <a onClick={() => setMode('register')} className="
                            text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
                        "> Crie uma conta gratuitamente</a>
                    </p>
                ) : (
                    <p className="mt-8">
                        Já faz parte da nossa comunidade?
                        <a onClick={() => setMode('login')} className="
                            text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
                        "> Entre com as suas credenciais</a>
                    </p>
                )}
            </div>
        </div>
    );
}