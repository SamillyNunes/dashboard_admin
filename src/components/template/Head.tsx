import Title from "./Title";

interface HeadProps{
    title: string;
    subtitle: string;
}

export default function Head(props: HeadProps){
    return (
        <div>
            <Title title={props.title} subtitle={props.subtitle} />
        </div>
    );
}