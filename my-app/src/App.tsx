import './App.css';
import * as React from 'react';
import FilterState from './Components/FilterState';
import PieChart from './Components/piechart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ChartView from './Components/ChartView';
import totalConfirmed from './Components/GetData';
function App() {
 return(
    <Router>
       <Switch>
         <Route exact path = '/'>   
         <PieChart/>
         <PieChart/>
         <PieChart/>
         <PieChart/>
         </Route>
         <Route path='/ChartView' component={ChartView}/>
         </Switch>
    </Router>
 );
} 

export default App;