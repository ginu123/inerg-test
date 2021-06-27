import { useState } from "react";
import state_data from '../data.json'

let  totalConfirmed = ()=> {
    var data = JSON.stringify(state_data);
    data = JSON.parse(data);
    if(data.isArray(keys)){
     data.forEach(function(Confirmed) {
         totalConfirmed = totalConfirmed+Confirmed;
    });
}
    console.log(totalConfirmed);
    return totalConfirmed;
}

export default totalConfirmed;