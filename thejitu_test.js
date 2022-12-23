// represents n  number of companies. reps amount of polution produces by cos.
// const companies= [100, 50, 60, 40]
//when you install 1 filter it breaks down the polution by half e.g 
// how many filters needed to break no. of polutions by half or less.

function leastNumberOfFilters(companies) {
  //count total polution
  let totalPollution = companies.reduce((previousValue, currentValue) => previousValue + currentValue)
  let expectedPollution = totalPollution/2
  // Sort the companies array in descending order
  companies.sort((a, b) => b - a);

  // Initialize a counter to keep track of the number of filters used
  let filtersUsed = 0;

  // Loop through the companies array
  for (let i = 0; i < companies.length; i++) {
    // If the total pollution is already at the expected level, return the number of filters used
    let newTotalPollution = companies.reduce((previousValue, currentValue) => previousValue + currentValue)
    if (newTotalPollution <= expectedPollution) {
      return filtersUsed;
    }

    //sort array using mergesort + insertionsort
    companies.sort((a, b) => b - a);
    // insert filtered data to init position,first data is largest
    companies[0] = companies[0] / 2
    //
    filtersUsed++;
  }

  // Return the number of filters used
  return filtersUsed;
}
const companies1 = [100,50,60,40]
console.log(leastNumberOfFilters(companies1))
const companies2 = [10000,50,60,40]
console.log(leastNumberOfFilters(companies2))
const companies3 = [10,50,60,40,60,78,21,1,78,5,3,8]
console.log(leastNumberOfFilters(companies3))