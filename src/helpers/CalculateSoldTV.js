import {inventory} from "../constants/inventory.js";

function calculateSoldTV(productArray){
    let total = 0
    for (let i = 0 ; i < productArray.length ; i++){
        total = total + productArray[i].sold;
    }

    return total
}

console.log(calculateSoldTV(inventory));

export default calculateSoldTV;


