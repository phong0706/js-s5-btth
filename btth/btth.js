const priceS = 30000;
const priceM = 36000;
const priceL = 40000;
const priceT = 8000;

const orderString = "MSLXTMM";
const isGoldMember = true;
const maxValidItems = 4;

let totalOrderAmount = 0;
let validItemCount = 0;

for (let i = 0; i < orderString.length; i++) {
  if (validItemCount >= maxValidItems) {
    break;
  }

  const currentItem = orderString[i];

  if (currentItem === "X") {
    continue;
  }

  let itemPrice = 0;
  if (currentItem === "S") {
    itemPrice = priceS;
  } else if (currentItem === "M") {
    itemPrice = priceM;
  } else if (currentItem === "L") {
    itemPrice = priceL;
  } else if (currentItem === "T") {
    itemPrice = priceT;
  }

  totalOrderAmount += itemPrice;
  validItemCount++;
}

let finalBill = totalOrderAmount;
if (isGoldMember) {
  finalBill = totalOrderAmount * 0.9;
}

console.log("Tổng tiền hóa đơn:", finalBill, "VNĐ");