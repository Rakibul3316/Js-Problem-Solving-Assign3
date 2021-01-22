// GitHub-Link=> https://github.com/Rakibul3316/Js-Problem-Solving-Assign3

// Kilometer to Meter Convertor Start.

function kilometerToMeter(num) {
  if (num < 0 && Number(num)) {
    return "Input is invalid. Input a positive Number.";
  } else {
    return num * 1000;
  }
}

var result = kilometerToMeter("5");

// Kilometer to Meter Convertor End

// Budget Calculator Start

function budgetCalculator(watch, phone, laptop) {
  if (
    (parseInt(watch) && watch < 0) ||
    (parseInt(phone) && phone < 0) ||
    (parseInt(laptop) && laptop < 0)
  ) {
    return "Input is invalid. Insert appropriate input.";
  } else {
    var watchCost = watch * 50;
    var phoneCost = phone * 100;
    var laptopCost = laptop * 500;

    var totalBudget = watchCost + phoneCost + laptopCost;
    return totalBudget;
  }
}

var result = budgetCalculator(1, -9.5, "10.88");

// Budget Calculator End

// Hotel Cost Start

function hotelCost(num) {
  if (num < 0) {
    return "Invalid input. Insert how many days you stayed in this hotel.";
  } else {
    var total = 0;
    total += first(num) + second(num) + resetOf(num);
    return total;
  }
}
// For first 10 days Cost
function first(num) {
  if (num <= 10) {
    return num * 100;
  } else if (num > 10) {
    return 10 * 100;
  } else {
    return 0;
  }
}
// For Second 10 days Cost
function second(num) {
  if (num > 10 && num <= 20) {
    return (num - 10) * 80;
  } else if (num > 20) {
    return 10 * 80;
  } else {
    return 0;
  }
}
// For rest of the days Cost
function resetOf(num) {
  if (num > 20) {
    return (num - 20) * 50;
  } else {
    return 0;
  }
}

var result = hotelCost(26);

// Hotel Cost End

// Mega Friend Start

function megaFriend(arr) {
  if (Array.isArray(arr) != true) {
    return "Input is invalid. Input a name of array.";
  } else {
    var longestLength = -1;
    var longestIndex = null;

    for (var i = 0; i < arr.length; i++) {
      var elementLength = arr[i].length;
      if (longestLength < elementLength) {
        longestLength = elementLength;
        longestIndex = arr[i];
      }
    }
    return longestIndex;
  }
}

var result = megaFriend(["shofiul", "hasib"]);

// Mega Friend End
