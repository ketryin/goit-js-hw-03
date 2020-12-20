const countTotalSalary = function (employees) {
  
  let countSalary = 0;
  
  for (const iterator of Object.keys(employees)) {
      countSalary = countSalary + employees[iterator];
  }

  return countSalary;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400