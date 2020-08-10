import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{ siteTitle }</title>
      </Head>
      <section className={ utilStyles.headingMd }>
        <p>
          Meu nome é Roger Bernardo de Melo Lima e sou um desenvolvedor.
        </p>
        <p>
          Comecei nessa carreira em 2016, quando comecei o curso técnico de informática pelo IFSP. Lá tive contato com Java, C#, PHP e por conta do meu TCC e projetos de extensão decidi que definitivamente seguiria no ramo de desenvolvimento. Atualmente estou fazendo Análise e Desenvolvimento de Sistemas (ADS) na FATEC Rubens Lara.
        </p>
        <p>
          Minha paixão é resolver problemas, principalmente quando posso resolver com código. Alio desenvolvimento com design, afinal, não basta apenas ser funcionar, uma aplicação deve ter a melhor experiência de usuário possível e pra isso, estudo web design de forma auto didata.
        </p>
      </section>
    </Layout>
  );
}