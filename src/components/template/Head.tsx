import useAppData from "@/data/hook/useAppData";
import ChangeThemeButton from "./ChangeThemeButton";
import Title from "./Title";
import AvatarUser from "./AvatarUser";

interface HeadProps{
    title: string;
    subtitle: string;
}

export default function Head(props: HeadProps){
    const {theme, changeTheme} = useAppData();

    return (
        <div className="flex">
            <Title title={props.title} subtitle={props.subtitle} />
            <div className="flex flex-grow justify-end items-center" >
                <ChangeThemeButton theme={theme ?? 'dark'} changeTheme={changeTheme } />
                <AvatarUser className="ml-3"/>
            </div>
        </div>
    );
}