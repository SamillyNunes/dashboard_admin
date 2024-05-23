import { HomeIcon, NotificationsIcon, SettingsIcon } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function SideMenu(){
    return (
        <aside>
            <div className={`
                h-20 w-20
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-500 to-purple-800
            `}>
                <Logo />

            </div>
            <ul>
                <MenuItem url="/" text="Inicio" icon={HomeIcon} />
                <MenuItem url="/settings" text="Ajustes" icon={SettingsIcon} />
                <MenuItem url="/notifications" text="Novidades" icon={NotificationsIcon} />
            </ul>
        </aside>
    );
}