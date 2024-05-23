import { HomeIcon, NotificationsIcon, SettingsIcon } from "../icons";
import MenuItem from "./MenuItem";

export default function SideMenu(){
    return (
        <aside>
            <h1>Menu</h1>
            <ul>
                <MenuItem url="/" text="Inicio" icon={HomeIcon} />
                <MenuItem url="/settings" text="Ajustes" icon={SettingsIcon} />
                <MenuItem url="/notifications" text="Novidades" icon={NotificationsIcon} />
            </ul>
        </aside>
    );
}