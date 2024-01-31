import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import calculateSoldTV from "./helpers/CalculateSoldTV.js";
import calculatePurchasedStockTV from "./helpers/CalculatePurchasedStockTV.js";
import calculateTvToSell from "./helpers/CalculateTvToSell.js";
import createProductName from "./helpers/CreateProductName.js";
import createProductPrice from "./helpers/CreateProductPrice.js";
import createScreenSizes from "./helpers/CreateScreenSizes.js";


function App() {
    function sortBestSellers() {
        console.log('Meest verkocht eerst');
    }

    function sortCheapest() {
        console.log('Goedkoopste eerst');
    }

    function sortSport() {
        console.log('Meest geschikt voor sport eerst');
    }

    return (
      <main className ="page-container">
          <h1>Tech it Easy dashboard</h1>
      <section>
      <h2>Verkoopoverzicht</h2>
  <div className="dashboard-container">
    <article className="dashboard-item items-sold">
      <h3>Aantal verkochte producten</h3>
      <h2>{calculateSoldTV(inventory)}</h2>
    </article>
      <article className="dashboard-item purchased-stock">
          <h3>Aantal ingekochte producten</h3>
          <h2>{calculatePurchasedStockTV(inventory)}</h2>
       </article>
      <article className="dashboard-item to-be-sold">
          <h3>Aantal te verkopen producten</h3>
          <h2>{calculateTvToSell(inventory)}</h2>
      </article>
  </div>
      </section>

          <h2>Best verkochte tv</h2>
      <section className="best-seller-container">
          <span>
                        <img className="product-image" src={bestSellingTv.sourceImg} alt="Afbeelding van het product"/>
                    </span>
          <div className="product-info">
              <h3>{createProductName(bestSellingTv)}</h3>
              <p className="product-price">{createProductPrice(bestSellingTv)}</p>
              <p className="product-size">{createScreenSizes(bestSellingTv.availableSizes)}</p>
              <ul className="options-list">
                  <li> <img className="icon icon-1" src="../src/assets/check.png" alt="icon" /> wifi</li>
                  <li> <img className="icon" src="../src/assets/minus.png" alt="icon" /> speech </li>
                  <li> <img className="icon" src="../src/assets/check.png" alt="icon" /> hdr </li>
                  <li> <img className="icon" src="../src/assets/check.png" alt="icon" /> bluetooth </li>
                  <li> <img className="icon" src="../src/assets/minus.png" alt="icon" /> ambilight </li>
              </ul>
          </div>
      </section>

          <section>
              <h2>Alle tvs</h2>
              <button className="button-sort" type="button" onClick={sortBestSellers}>
                  Meest verkocht eerst
              </button>
              <button className="button-sort" type="button" onClick={sortCheapest}>
                  Goedkoopste eerst
              </button>
              <button className="button-sort" type="button" onClick={sortSport}>
                  Meest geschikt voor sport eerst
              </button>
          </section>

      </main>
  )
}


export default App
