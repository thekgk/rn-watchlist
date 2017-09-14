import React from 'react';
import { connect } from 'react-redux';
import Watchlist from '../components/Watchlist';

const mapStateToProps = state => {    
    return {
        //move this to reducer
        watchlist: state.stocks.filter(
            (stock) => state.watchlist.includes(stock.id)
        ),
        stockPriceData:state.stockPriceData,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onStockViewDetails: (item, currentPrice, series) => {
            dispatch({ type: 'StockDetailsScreen', params: { item, currentPrice, series } })
        }
    }
};

const WatchlistScreen = connect(    
    mapStateToProps,
    mapDispatchToProps
)(Watchlist);

export default WatchlistScreen;

WatchlistScreen.navigationOptions = () => {
    return ({
        title: 'Watchlist',
    });
};