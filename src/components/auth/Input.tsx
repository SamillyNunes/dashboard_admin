interface InputProps{
    label: string;
    value: any;
    type?: 'text' | 'email' | 'password';
    onValueChanged: (newValue: any) => void;
    required?: boolean;
    notRender?: boolean;
}

export default function Input(props: InputProps){
    return props.notRender ? null : (
        <div className="flex flex-col">
            <label> {props.label} </label>
            <input 
                type={props.type} 
                required={props.required}
                value={props.value}
                onChange={e => props.onValueChanged?.(e.target.value)}
            />
        </div>
    );
}