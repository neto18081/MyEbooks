import Head from 'next/head'
import axios from "axios";

import {
  Container,

} from "../styles/pages/Home";

// export async function getStaticProps({ param }) {
//   const res = await axios.get(
//     "https://agenciaade.com.br/wp-json/wp/v2/posts?per_page=8"
//   );

//   // Pass data to the page via props
//   return {
//     props: {
//       posts: res.data,
//     },
//     revalidate: 5,
//   };
// }

export default function Home() {
  return (
    <>
      <Head>
        <title>MyEbooks</title>
        <meta property="og:image" content="/print.png" />
        <meta property="og:image:width" content="1280"/>
        <meta property="og:image:height" content="800"/>
      </Head>
      <Container>
        <h2>Em Construção</h2>
      </Container>
    </>
  );
}
