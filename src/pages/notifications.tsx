import Layout from "@/components/template/Layout";
import useAppData from "@/data/hook/useAppData";

export default function Notifications(){
    const {changeTheme} = useAppData();

    return (
        <Layout title="Notificações" subtitle="Suas mensagens" >
        </Layout>
    );
}