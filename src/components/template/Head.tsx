import useAppData from "@/data/hook/useAppData";
import ChangeThemeButton from "./ChangeThemeButton";
import Title from "./Title";

interface HeadProps{
    title: string;
    subtitle: string;
}

export default function Head(props: HeadProps){
    const {theme, changeTheme} = useAppData();

    return (
        <div className="flex">
            <Title title={props.title} subtitle={props.subtitle} />
            <div className="flex flex-grow justify-end" >
                <ChangeThemeButton theme={theme ?? 'dark'} changeTheme={changeTheme } />
            </div>
        </div>
    );
}