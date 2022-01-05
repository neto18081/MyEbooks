import Head from "next/head";
import { useRouter } from "next/router";

import ReactHtmlParser from "react-html-parser";
import axios from "axios";
import { AiOutlineArrowRight, AiTwotoneLock } from "react-icons/ai";


import {
  Container,
} from "../../styles/pages/Ebooks";

export async function getStaticProps({ params }) {
  const res = await axios.get(
    `https://myebooks.com.br/wp-json/wp/v2/ebooks?slug=${params.slug}`
  );

  return {
    props: {
      ebook: res.data[0],
    },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  const res = await axios.get(
    "https://myebooks.com.br/wp-json/wp/v2/ebooks/?per_page=1"
  );

  const paths = res.data.map((ebook) => ({
    params: { slug: ebook.slug },
  }));

  return { paths, fallback: true };
}

export default function Single({ ebook }) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>carregando...</p>;
  }
  console.log(ebook);
  return (
    <>
      <Head>
        <title>{ebook.title.rendered} | MyEbooks</title>

        {/* {post.acf.imagem_capa && (
          <>
            <meta
              property="og:image"
              content={post.acf.imagem_capa.sizes.large}
            />
            <meta property="og:image:width" content="1240" />
            <meta property="og:image:height" content="678" />
          </>
        )} */}

        <meta property="og:type" content="article" />
        <meta property="article:author" content="@tomattone" />
        {/* <meta property="article:published_time" content={post.date}></meta> */}
      </Head>
      <Container>
        <div className="container">
          <div className="header">
            <div className="h1">
              <div className="text"> 
                <span>E-book</span>
                <h1>{ebook.title.rendered}</h1>
                <p>{ReactHtmlParser(ebook.acf.sinopse)}</p>
                <a target="_blank" href={ebook.acf.link_compra}>Comprar Agora<AiOutlineArrowRight/></a>
              </div>
            </div>
            <div className="h2">
              <div className="image">
                <img src={ebook.acf.image_banner.sizes.large} alt={ebook.title.rendered} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
