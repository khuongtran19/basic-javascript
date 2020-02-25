var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//PUSH
//adding element at the end of an Array
arr.push(10)
//require parameter
//Expect arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//POP
//removing element from the end of an Array
arr.pop()
//Expect arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]

//UNSHIFT
//adding element at the front of an Array
arr.unshift(0)
//require parameter
//Expect arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//SHIFT
//removing element from the front of an Array
arr.shift()
//Expect arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//SPLICE
//Insertion and Removal in between an Array
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
var secArr = [10, 11, 12]
arr.concat(secArr)
//Expect [1,2,3,4,5,6,7,8,9,10,11,12]

