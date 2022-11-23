const stockName = document.querySelector("#input-0");
const buyPrice = document.querySelector("#input-1");
const currentPrice = document.querySelector("#input-2");
const Quantity = document.querySelector("#input-3");
const bttnHandler = document.querySelector("#bttn");
const output = document.querySelector("#out");

function finalResults() {
  const bp = Number(buyPrice.value);
  const cp = Number(currentPrice.value);
  const qt = Number(Quantity.value);
  profitLossCalculator(bp, cp, qt);
}
function profitLossCalculator(buyprice, currentprice, quantity) {
  if (currentprice > buyprice) {
    const profit = (currentprice - buyprice) * quantity;
    const profitPercentage = (profit / buyprice) * 100;

    output.innerHTML = "Hey your profit is " + profit + " rs. in     "+stockName.value + " which is " + profitPercentage + "%" + " of your capital !!";

  } else if (currentprice < buyprice) {
    const loss = (buyprice - currentprice) * quantity;
    const lossPercentage = (loss / buyprice) * 100;

    output.innerHTML = "Opps your loss is " + loss + " rs. in "+ stockName.value +" which is " + lossPercentage + "%" + " of your capital !!";
  } else {
    output.innerHTML = "you are in safe zone"
  }
}
bttnHandler.addEventListener("click", finalResults);
