import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

export default function Home({ allPostsData }) {
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

      <section className={ `${ utilStyles.headingMd } ${ utilStyles.padding1px }` }>
        <h2 className={ utilStyles.headingLg }>Meu blog</h2>

        <ul className={ utilStyles.list }>
          { allPostsData.map(({ id, date, title }) => {

            return (
              <li className={ utilStyles.listItem } key={ id }>
                <Link href="/posts/[id]" as={ `/posts/${ id }` }>
                  <a>{ title }</a>
                </Link>
                <br />
                <small className={ utilStyles.lightText }>
                  <Date dateString={ date } />
                </small>
              </li>
            );
          }) }
        </ul>

      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData
    }
  };
}