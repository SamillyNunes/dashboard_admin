import Layout from "@/components/template/Layout";
import useAppData from "@/data/hook/useAppData";

export default function Notifications(){
    const data = useAppData();

    return (
        <Layout title="Notificações" subtitle="Suas mensagens" >
            <h3>Notificações</h3>
            <h3> {data.name} </h3>
        </Layout>
    );
}