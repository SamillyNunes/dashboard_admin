interface MenuItemProps{
    url: string;
    text: string;
    icon: any;
}

export default function MenuItem(props: MenuItemProps){
    return (
        <li className={``}>
            {props.icon}
        </li>
    );
}