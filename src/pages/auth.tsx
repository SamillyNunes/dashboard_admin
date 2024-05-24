import Input from "@/components/auth/Input";
import { useState } from "react";

export default function Auth(){
    const [mode, setMode] = useState<'login' | 'register'>('login');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <h1>Autenticação</h1>
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
        </div>
    );
}