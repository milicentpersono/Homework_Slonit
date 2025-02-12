let sold_item_prices = [10000, 20000, 30000]

function countTotalPrice(prices){
    let total = 0
    prices.forEach(item_price => {
        total += item_price
    });
    return total
}

console.log(countTotalPrice(sold_item_prices))