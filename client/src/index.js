import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';
import "./index.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";



const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});
ReactDOM.render(
  <ApolloProvider client={client}><BrowserRouter> <App /> </BrowserRouter></ApolloProvider>,
  
  
   
 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();