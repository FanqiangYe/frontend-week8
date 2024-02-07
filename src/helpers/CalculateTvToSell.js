import CalculatePurchasedStockTV from "./CalculatePurchasedStockTV.js";
import calculateSoldTV from "./CalculateSoldTV.js";


function calculateTvToSell(productArray) {
    const stock = CalculatePurchasedStockTV(productArray);
    const sold = calculateSoldTV(productArray);
    return stock - sold;
}

export default calculateTvToSell;