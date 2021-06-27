import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Multiselect from 'multiselect-react-dropdown';
import React, {Component} from 'react';
import state_data from '../data.json';
import { data } from 'jquery';
class FilterState extends React.Component <any, any> {


 constructor(props: any) {   
super(props);
this.state = {
    options:[{name:'kerala', id:1}]
     };
}
render(){
    return(
<Multiselect options={this.state.options} 
selectedValues={this.state.selectedValue} 
displayValue="name" />
    )};
}

export default FilterState;