import {inventory} from "../constants/inventory.js";

    function calculatePurchasedStockTV(productArray){
        let total = 0
        for (let i = 0 ; i < productArray.length ; i++){
            total = total + productArray[i].originalStock;
        }

        return total
    }

console.log(calculatePurchasedStockTV(inventory));

export default calculatePurchasedStockTV;
