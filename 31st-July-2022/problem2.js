/*

There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

The second value in the first integer array is 0, since the bus is empty in the first bus stop.


*/

//P: an array
//R: return an integer
//E: number([[10,0],[3,5],[5,8]]),5
//P: pseudo-code

var number = function(busStops){
    // every element in the array has:
    // first item: number of people get into the bus
    // second item: number of people get off the bus
    // num of people left over => sum of every first element of every element
    // sum of every second element of every element
    // sum of both
    // filter our the first element of every element
    // filter out the second element of every element
}