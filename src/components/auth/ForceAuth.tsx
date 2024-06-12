import useAuth from "@/data/hook/useAuth";
import Head from "next/head";
import Image from "next/image";
import Router from "next/router";

export default function ForceAuth(props: any){

    const { user, loading } = useAuth();

    // Nesta funcao abaixo, eh incluindo o componente Head em conjunto com a tag script, que no passo a passo
    // implementado abaixo esta verificando se tem o cookie deste projeto, e caso nao tenha, enviar o usuario para
    // a pagina de autenticacao
    function renderContent(){
        return (
            <>
                <Head>
                    <script 
                        dangerouslySetInnerHTML={{
                            __html:`
                                if(!document.cookie?.includes("admin-template-samydev-auth")){
                                    window.location.href = "auth"
                                }
                            `
                        }}
                    />
                </Head>
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