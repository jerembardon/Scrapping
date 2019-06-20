import React, {Component} from 'react';
import styled from 'styled-components';
import {DownloadButton} from '../Button/Button';

const PanelContainerStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 16px 0;
    background-color: #ffffff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid #DBDBDB;
    box-shadow: 0 8px 16px rgba(0,0,0,0.24), 0 8px 8px rgba(0,0,0,0.24);
    .text {
        margin-bottom: 0px;
    }
    
    @media screen and (max-width: 1024px) {
        flex-direction: column;
        padding: 16px 0;
        .button, .text {
            margin-bottom: 16px;
        }
    }
`

export class ExportPanel extends Component {
    formatedData = (articles) => {
        let csvBody = [];
        let csvHeader = ["Tags", "Id", "Titre", "Lien web", "Date", "Image", "catégorie", "Date de création", ""];
        if(articles.length)
            articles.map(article => csvBody.push(Object.values(article)))
           
        let csvData = [csvHeader, ...csvBody];
        return csvData
    }

    render() {
        return(
            <PanelContainerStyle>
                <div className="text">
                    <p>Téléchargement de vos données</p>
                </div>
                <div className="button">
                    <DownloadButton data={this.formatedData(this.props.articles)}> Télécharger en CSV </DownloadButton>
                </div>
            </PanelContainerStyle>
        )
    }
}  

    