import Link from "next/link";

interface MenuItemProps{
    text: string;
    icon: any;
    className?: string;
    url?: string;
    onClick?: (event: any)=> void;
}

export default function MenuItem(props: MenuItemProps){
    function renderContent(){
        return (
            <div className={`flex flex-col justify-center items-center w-20 h-20 text-gray-600 ${props.className}`}>
                {props.icon}
                <span className={`
                    text-xs font-light 
                `} >
                    {props.text}
                </span>
            </div>
        );
    }

    return (
        <li onClick={props.onClick} className={`hover:bg-gray-100 cursor-pointer`}>
            {props.url ? (
                <Link href={props.url} >
                    {renderContent()}
                </Link>
            ) : renderContent()}
        </li>
    );
}