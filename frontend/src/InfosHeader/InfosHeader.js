import React from 'react';
import styled from 'styled-components';

const InfosHeaderStyle = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    justify-content: space-between;
    margin-bottom: 32px;
    border-bottom: 1px solid #dbdbdb;
    padding-bottom: 8px;
    h2 {
        margin-bottom: 8px;
    }
    p {
        font-size: 12px;
        margin: 0;
        b {
            color: rgba(92, 219, 149, 1);
            &:first-letter {
                text-transform: uppercase;
            }
        }
    }
`

export const InfosHeader = ({dateDay, dateHours , category}) => (
    <InfosHeaderStyle >
        <div>
            <h2>Articles</h2>
            <p>Mise à jour le : <b>{dateDay}</b> à <b>{dateHours}</b>. <br />Catégorie: <b>{category}</b> <b></b></p>
        </div>
    </InfosHeaderStyle>

)
   