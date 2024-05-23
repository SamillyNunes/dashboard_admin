import Content from "./Content";
import Head from "./Head";
import SideMenu from "./SideMenu";

interface LayoutProps{
    title: string;
    subtitle: string;
    children?: any;
}

export default function Layout(props: LayoutProps){
    return (
        <div>
            <SideMenu />
            <Head title={props.title} subtitle={props.subtitle} />
            <Content>
                {props.children}
            </Content>
        </div>
    );
}