import Image from "next/image";

import { Container } from "../styles/components/Footer";

function footer() {
  return (
    <Container>
      Feito com ❤️ por{" "}
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/logo.svg" alt="Logo" width={48} height={20} />
      </a>
    </Container>
  );
}

export default footer;
