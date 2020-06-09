import React, {Component} from 'react'
import axios from 'axios'
import './App.css';
import StockEventsTable from './components/StockEventsTable'

const fetchedProducts = []
const fetchedStockEvents = []

class App extends React.Component {
  state = {
    fetchedProducts,
    fetchedStockEvents
  }

  async componentDidMount(){
    const productsRes = await axios({
      method: 'GET',
      url: 'https://strapi-postrgres-api.herokuapp.com/products'
    })

    const stockEventsRes = await axios({
      method: 'GET',
      url: 'https://strapi-postrgres-api.herokuapp.com/stockevents'
    })

    const fetchedProducts = productsRes.data
    const fetchedStockEvents = stockEventsRes.data

    this.setState({ fetchedProducts, fetchedStockEvents})
  }

  render(){

    return (
      <div className="App">
        <h1>Merch Inventory</h1>
        <StockEventsTable 
          products={this.state.fetchedProducts} 
          stockEvents={this.state.fetchedStockEvents} 
        />
      </div>
    );
  }
}

export default App;
