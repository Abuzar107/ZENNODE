const inputA = document.getElementById("inputA");
const inputB = document.getElementById("inputB");
const inputC = document.getElementById("inputC");
const but = document.getElementById("but");

but.addEventListener("click", () => {
    calculateValueOfProdects();
});

const calculateValueOfProdects = () => {
  const cheackA = document.getElementById("giftWrapA").checked;
  const cheackB = document.getElementById("giftWrapB").checked;
  const cheackC = document.getElementById("giftWrapC").checked;

  const amountOfProductA = parseFloat(inputA.value);
  const shippingFeeA = Math.ceil(amountOfProductA / 10) * 5;
  const giftWrapedFeeA = cheackA == true ? amountOfProductA : 0;
  const priceOfProductA = 20 * amountOfProductA;
  const subTotalOfA = priceOfProductA + giftWrapedFeeA + shippingFeeA;

  const amountOfProductB = parseFloat(inputB.value);
  const shippingFeeB = Math.ceil(amountOfProductB / 10) * 5;
  const giftWrapedFeeB = cheackB == true ? amountOfProductB : 0;
  const priceOfProductB = 40 * amountOfProductB;
  const subTotalOfB = priceOfProductB + giftWrapedFeeB + shippingFeeB;

  const amountOfProductC = parseFloat(inputC.value);
  const shippingFeeC = Math.ceil(amountOfProductC / 10) * 5;
  const giftWrapedFeeC = cheackC == true ? amountOfProductC : 0;
  const priceOfProductC = 50 * amountOfProductC;
  const subTotalOfC = priceOfProductC + giftWrapedFeeC + shippingFeeC;

  const subTotal = priceOfProductA + priceOfProductB + priceOfProductC;
  const totalShippingFee = shippingFeeA + shippingFeeB + shippingFeeC;
  const totalGiftWrapFee = giftWrapedFeeA + giftWrapedFeeB + giftWrapedFeeC;
  let total = subTotal + totalShippingFee + totalGiftWrapFee;

  let flat_10_discount = 0;
  let bulk_5_discount = 0;
  let bulk_10_discount = 0;
  let tiered_50_discount = 0;

  if(subTotal > 200){
    flat_10_discount = 10;
  }

  if(amountOfProductA > 10){
    bulk_5_discount += (5/100)*priceOfProductA;
  }
  if(amountOfProductB > 10){
    bulk_5_discount += (5/100)*priceOfProductB;
  }
  if(amountOfProductC > 10){
    bulk_5_discount += (5/100)*priceOfProductC;
  }

  if((amountOfProductA + amountOfProductB + amountOfProductC) > 20){
    bulk_10_discount += (10/100)*subTotal;
  }
  if((amountOfProductA + amountOfProductB + amountOfProductC) > 30 && amountOfProductA > 15){
    tiered_50_discount += ((amountOfProductA - 15)*20)/2;
  }
  if((amountOfProductA + amountOfProductB + amountOfProductC) > 30 && amountOfProductB > 15){
    tiered_50_discount += ((amountOfProductB - 15)*40)/2;
  }
  if((amountOfProductA + amountOfProductB + amountOfProductC) > 30 && amountOfProductC > 15){
    tiered_50_discount += ((amountOfProductC - 15)*50)/2;
  }

  if(flat_10_discount >= bulk_5_discount && flat_10_discount >= bulk_10_discount && flat_10_discount >= tiered_50_discount){
    document.getElementById("list5").innerText = `You Got flat_10_discount Worth $${flat_10_discount}`
    total -= flat_10_discount;
  }else if(bulk_5_discount >= flat_10_discount && bulk_5_discount >= bulk_10_discount && bulk_5_discount > tiered_50_discount){
    document.getElementById("list5").innerText = `You Got bulk_5_discount Worth $${bulk_5_discount}`;
    total -= bulk_5_discount;
  }else if(bulk_10_discount >= flat_10_discount && bulk_10_discount >= bulk_5_discount && bulk_10_discount > tiered_50_discount){
    document.getElementById("list5").innerText = `You Got bulk_10_discount Worth $${bulk_10_discount}`;
    total -= bulk_10_discount;
  }else{
    document.getElementById("list5").innerText = `You Got tiered_50_discount Worth $${tiered_50_discount}`;
    total -= tiered_50_discount
  }

  console.log(flat_10_discount, bulk_5_discount, bulk_10_discount, tiered_50_discount, subTotal);

//   console.log(
//     `Amount of productA is ${amountOfProductA}, Price of ProductA is ${priceOfProductA}, Gift Wraper if ProductA is ${giftWrapedFeeA}, Shipping fee of ProductA is ${shippingFeeA}, Sub Total of ProdectA is ${subTotalOfA}`
//   );
//   console.log(
//     `Amount of productB is ${amountOfProductB} and Price of ProductB is ${priceOfProductB}, Gift Wraper if ProductB is ${giftWrapedFeeB}, Shipping fee of ProductB is ${shippingFeeB}, Sub Total of ProdectA is ${subTotalOfB}`
//   );
//   console.log(
//     `Amount of productC is ${amountOfProductC} and Price of ProductC is ${priceOfProductC}, Gift Wraper if ProductC is ${giftWrapedFeeC}, Shipping fee of ProductC is ${shippingFeeC}, Sub Total of ProdectC is ${subTotalOfC}`
//   );

  document.getElementById("list1").innerText = `Product Name [ProductA], Quantity [${amountOfProductA}], Total Amount [$${priceOfProductA}]`
  document.getElementById("list2").innerText = `Product Name [ProductB], Quantity [${amountOfProductB}], Total Amount [$${priceOfProductB}]`
  document.getElementById("list3").innerText = `Product Name [ProductC], Quantity [${amountOfProductC}], Total Amount [$${priceOfProductC}]`
  document.getElementById("list4").innerText = `Sub Total:-> $${subTotal}`
  document.getElementById("list6").innerText = `Shipping Fee $${totalShippingFee} & Gift Wrap Fee $${totalGiftWrapFee}`
  document.getElementById("list7").innerText = `Total $${total}`

};
