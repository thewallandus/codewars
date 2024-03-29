/*

Task:
Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

number	price (cents)
n < 5	100
n >= 5 and n < 10	95
n >= 10	90
You can use if..else or ternary operator to complete it.

When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code pass this kata.

*/

// P => n which is an integer
// R => return integer
// E => saleHotdogs(1),100
// P 

function saleHotdogs(n){
    return n >= 10 ? 90 * n
        : n >= 5 && n < 10 ? 95 * n : 100 * n
  }