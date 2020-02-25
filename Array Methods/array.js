var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//PUSH
//adding element at the end of an Array
//SYNTAX: array.push(item1, item2, ...)
arr.push(10)
//require parameter
//Expect arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//POP
//removing element from the end of an Array
//SYNTAX: array.pop()
//NO require parameter
arr.pop()
//Expect arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]

//UNSHIFT
//adding element at the front of an Array
//SYNTAX: array.unshift(item1, item2, ...)
//require parameter
arr.unshift(0)

//Expect arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//SHIFT
//removing element from the front of an Array
//SYNTAX: array.shift()
//NO require parameter
arr.shift()
//Expect arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//SPLICE
//Insertion and Removal in between an Array
//SYNTAX: array.splice(start, deleteCount, item1, item2, ...)
//array.splice(start (location of item you want to start), deleteCount (how many item you want to delete), item1, item2, ...)
arr.splice(3, 2);
//As we input 3 mean in array at position 3 we start, then we have 2 meaning we delete 2 item from that array start from position 3. In this case its mean number 4 and 5 will be delete.
//Array should have arr = [1, 2, 3, 6, 7, 8, 9]
//Expect return as [4, 5]
//to add the 4 and 5 back also use splice
arr.splice(3, 0, 4, 5);
//Array should have it original numbers and length

//CONCAT
//return both the first array and second arr
//SYNTAX: arr.concat(arr)
var secArr = [10, 11, 12]
arr.concat(secArr)
//Expect [1,2,3,4,5,6,7,8,9,10,11,12]

//FILTER
//arr.filter() function is used to created a new array from a given array consisting of only those elements from the given array which satisfy a condition set by the argument.
// SYNTAX: var newArray = arr.filter(arg_function[ , this_arg])
arr.filter((item) => item % 2 === 0)
//this filter will find even number in the array
//Expect [2,4,5,8] 

//INDEXOF
//array,indexOf() function is used to find the index of the first occurrence of the search element provided as the argument to the function.
//SYNTAX: arr.indexOf(searchElement[, index])
arr.indexOf(3)
//Expect 2 as number 3 locate at index 2
//[1,2,3,4,5,6,7,8,9] <= given array
// | | | | | | | | |
//[0,1,2,3,4,5,6,7,8] <= index of array


