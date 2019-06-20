import React, {Component} from 'react';
import {GlobalStyle, InputsContainer, DataContainer, ArticleContainer} from './App.style';
import {ArticleItem} from '../ArticleItem/ArticleItem';
import {SelectInput} from '../Select/Select';
import {Button} from '../Button/Button';
import {ExportPanel} from '../ExportPanel/ExportPanel'
import {InfosHeader} from '../InfosHeader/InfosHeader';

// Config
import {api_endpoint} from '../config';

// Airbnb Datepicker (the best)
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import axios from 'axios';
import moment from 'moment';

export default class App extends Component {
  constructor(props) {
    super(props);
    moment.locale('fr');
    this.state = {
      articles: [],
      category: "",
      message: "",
      loading: false,
      startDate: moment().subtract('1', 'days'),
      endDate: moment(),
    }
  }

  componentDidMount() {
    this.showScrappedArticles();
  }

  scrapData = () => {
    let {category, startDate, endDate} = this.state
    this.setState({ loading: true })
    axios.post(`${api_endpoint}/scrap`, {
      method: 'POST',
      category,
      startDate,
      endDate
    }).then((response) => {
      this.setState({
        message: response.data,
      })
      this.showScrappedArticles();
    }).catch( (error) => {
      this.setState({
        message: error,
        loading: false
      })
    })
  }

  showScrappedArticles = () => {
    axios.get(`${api_endpoint}/scrapedData`, {
      method: 'GET'
    }).then((response) => {
      this.setState({
        articles: response.data,
        loading: false
      })
    }).catch((error) => {
      this.setState({
        message: error,
        loading: false
      })
    })
  }

  selectCategory = selectedOption => {
    this.setState({
      category: selectedOption.value
    })
  }

  articlesListItems = (articles) => {
    if(articles.length > 0) {
      return articles.map(
        (article, index) => 
        <ArticleItem article={article} key={index}/>
      )
    }
    return null;
  }

  render () {
    let {loading, articles, startDate, endDate} = this.state;
    return(
      <React.Fragment>
        <GlobalStyle />
        <h1>Scrapping test</h1>
        <InputsContainer>
            <SelectInput 
              onChange={this.selectCategory}
              value={this.state.category} 
            />
            <DateRangePicker
              startDate={startDate} 
              startDateId="start_date"
              endDate={endDate}
              showClearDates={true}
              endDateId="end_date"
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
              focusedInput={this.state.focusedInput} 
              onFocusChange={focusedInput => this.setState({ focusedInput })}
              numberOfMonths={1}
              isOutsideRange={
                (day) => 
                day.isAfter(moment().add('1', 'days'))||
                day.isBefore(moment().subtract('7', 'days')) ||
                day.isSame(moment())
              }
            />
          <div>
            <Button 
              disabled={this.state.category.length === 0} 
              onClick={this.scrapData}>
                {loading === true ?  "Scrapping" : "Scrap data" }
            </Button>
          </div>
        </InputsContainer>

        <DataContainer> 
          { articles.length > 0 &&
            <InfosHeader 
            dateDay={moment(articles[0].createdAt).format('L')} 
            dateHours={moment(articles[0].createdAt).format('LT')}
            category={articles[0].category}
            />
          }
         

          <ArticleContainer>
            {articles.length > 0 &&  this.articlesListItems(articles)}
         </ArticleContainer>
        </DataContainer>
        { articles.length > 0 && <ExportPanel articles={articles}/>}
      </React.Fragment>
    )
  }
}
