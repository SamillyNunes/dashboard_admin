import useAuth from "@/data/hook/useAuth";
import Image from "next/image";
import Router from "next/router";

export default function ForceAuth(props: any){

    const { user, loading } = useAuth();

    function renderContent(){
        return (
            <>
                {props.children}
            </>
        );
    }

    function renderLoading(){
        return (
            <div className="flex justify-center items-center h-screen" >
                <img src='/images/spin.gif' alt="Carregando" className="w-40" />
            </div>
        );
    }

    if(!loading && user?.email){
        return renderContent();
    } else if(loading){
        return renderLoading();
    } else {
        if(typeof window!=='undefined') Router.push("/auth");
        return null;
    }
}