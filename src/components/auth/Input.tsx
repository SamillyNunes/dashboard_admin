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
        <div className="flex flex-col mt-4">
            <label> {props.label} </label>
            <input 
                type={props.type} 
                required={props.required}
                value={props.value}
                onChange={e => props.onValueChanged?.(e.target.value)}
                className="
                    px-4 py-3 rounded-lg bg-gray-200 mt-2
                    border focus:border-blue-500
                    focus:outline-none focus:bg-white
                "
            />
        </div>
    );
}