import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/template/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout title="Página Inicial" subtitle="Construindo nossa aplicação" >
      <h3>Conteúdo!</h3>
    </Layout>
  );
}
