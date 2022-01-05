import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    .container {
        max-width: 1920px;
        margin: 0 auto;

        .header {
            padding: 50px 20px 0 20px;
            background: linear-gradient(to right, white 80%, var(--amarelo) 80% 100%);
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            .h1 {
                width: 60%;
                .text {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;
                    width: 700px;
                    margin: 0 auto;

                    span {
                        font-size: 26px;
                        color: var(--amarelo);
                        font-weight: 700;
                    }
                    h1 {
                        font-size: 70px;
                        line-height: 80px;
                    }
                    p {
                        font-size: 22px;
                    }
                    a {
                        background: var(--amarelo);
                        padding: 20px 50px;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        font-size: 20px;
                        font-weight: 500;
                        svg {
                            height: 20px;
                            width: 20px;
                            margin: 0 10px;
                        }
                    }
                }
            }
            .h2 {
                width: 40%;
                .image {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    img {
                        box-shadow: 0px 0px 40px rgba(0,0,0,.2);
                    }
                }
            }
            @media (max-width: 1250px) {
                .h1 {
                    .text {
                        width: 500px;
                    }
                }
            }
            @media (max-width: 1000px) {
                .h1 {
                    .text {
                        h1 {
                            font-size: 55px;
                        }
                    }
                }
            }
            @media (max-width: 860px) {
                flex-direction: column;
                background: linear-gradient(to bottom, white 80%, var(--amarelo) 80% 100%);
                height: auto;
                .h1 {
                    width: 100%;
                    margin-bottom: 50px;
                    .text {
                        @media (max-width: 540px) {
                            width: 100%;

                        }
                        @media (max-width: 470px) {
                            h1 {
                            font-size: 40px;
                            line-height: 50px;
                            }
                        }
                        @media (max-width: 350px) {
                            h1 {
                                font-size: 30px;
                                line-height: 40px;
                            }
                        }
                    }
                }
                .h2 {
                    width: 100%;
                }
            }
            
        }
    }
`; 