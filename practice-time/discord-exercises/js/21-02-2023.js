function add(num1, num2){
    return num1 + num2;
}

add(2,5);
add("Hello",2);


console.log(add(2,5))


//((((ratePerHour*8)*discount)/100)*(Math.floor(numDays/22)*22))+(numDays-(Math.floor(numDays/22)*22))
//Expected: 14528
//11968
//2560
function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    if (discount != 0){
        let totalOfDiscountDays = 0;
        let totalOfNormalDays = 0;
        let ratePerHourDiscounted = 0;
        let rateperHourNormalDay = ratePerHour * 8;
        ratePerHourDiscounted = 8*(ratePerHour - (ratePerHour * discount)) ;
        totalOfDiscountDays = (Math.floor(numDays/22)*22) * ratePerHourDiscounted;
        numDays -= (Math.floor(numDays/22)*22);
        totalOfNormalDays = numDays * rateperHourNormalDay;

        let discountDays = ratePerHour * discount
        return console.log(totalOfNormalDays+totalOfDiscountDays);
        //return console.log(11968+2560)
    }else{

    }
    ratePerHour *= 8 * numDays;
}
  priceWithMonthlyDiscount(16,130,0.15);