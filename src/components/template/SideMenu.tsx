import { HomeIcon, LogoutIcon, NotificationsIcon, SettingsIcon } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function SideMenu(){
    return (
        <aside className="
            flex flex-col 
            bg-gray-200 text-gray-700
            dark:bg-gray-900 dark:text-gray-200
        ">
            <div className={`
                h-20 w-20
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-500 to-purple-800
            `}>
                <Logo />

            </div>
            <ul className="flex-grow">
                <MenuItem url="/" text="Inicio" icon={HomeIcon} />
                <MenuItem url="/settings" text="Ajustes" icon={SettingsIcon} />
                <MenuItem url="/notifications" text="Novidades" icon={NotificationsIcon} />
            </ul>
            <ul>
                <MenuItem 
                    text="Sair" 
                    icon={LogoutIcon} 
                    onClick={()=>console.log('Saindo...')} 
                    className="
                        text-red-600 dark:text-red-400
                        hover:bg-red-400 hover:text-white dark:hover:text-white
                    " 
                />
            </ul>
        </aside>
    );
}