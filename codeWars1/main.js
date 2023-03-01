function rentalCarCost(d) {
    // Your solution here
    const dailyCost = 40;
    let total = d * dailyCost;
    if (d >= 7) {
      total = total - 50;
    } else if (d >= 3) {
      total = total - 20;
    }
    return total;
  }
  rentalCarCost()