import React from 'react';
import styled from 'styled-components';
import {ReadButton} from '../Button/Button'

const ArticleItemContainer = styled.div`
    display: block;
    color: #121212;
    margin-bottom: 16px;
    border: 1px solid #DBDBDB;
    p {
        margin: 0;
        font-size: .8em;
    }
`

const ImgContainer = styled.div`
    max-height: 180px;
    margin-bottom: 8px;
    overflow: hidden;
   img {
      width: 100%;
      margin: 0 auto;
      height: auto;
   }
`
const ArticleContent = styled.div`
    padding: 8px;
    margin: 16px 0 0 0;
    min-height: 60px;
`


export const ArticleItem = ({article: {title, link, img}} ) => (
    <ArticleItemContainer>
        <ImgContainer>
            <img src={`http://${img}`} alt={title} />
        </ImgContainer>
        <ArticleContent>
            <p>{title}</p>
        </ArticleContent>
        <ReadButton href={link}> Lire l'article </ReadButton>
    </ArticleItemContainer>
)
   