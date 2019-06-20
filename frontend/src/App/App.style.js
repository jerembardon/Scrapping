import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0 auto;
    height: 100vh;
    max-width: 1024px;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
  }

  h1 {
    text-align: center;
    text-transform: uppercase;
  }

  * {
    box-sizing: border-box;
  }

  @media screen and (max-width: 1024px) {
    body {
      padding: 16px;
    }
  }
`

export const InputsContainer = styled.div`
  margin-top: 32px;
  width: 100%;
  background-color: #ffffff;
  padding: 8px;
  box-shadow: 0 10px 28px rgba(0,0,0,0.12), 0 6px 8px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1 1 100%;
`

export const DataContainer = styled.div`
  margin-top: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ArticleContainer = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 140px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

`