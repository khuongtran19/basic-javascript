this keyword\
call/apply/bind\
new keyword\
oop\

OOP Defined
- A programming model based around the idea of objects
- These objects are constructed from what are called "classes", which we can think of like a blueprint. We call these objects created from classes "instances"
- We strive to make our classes abstract and modular

Keyword "new"
- Create an object out of thin air
- Assign the value of "this' to be that object
- Adds 'return this' to the end of the function
- Creates a link between the object created and the prototype property of the constructor function

Closure
- A closure is a funciton that makes use of variables defined in outer functions that have previously returned

**Example**:
function outer(){\
    var data = "closure are ";\
    return function inner(){\
        var innerData = "awesome";\
        return data + innerData;\
    }
}

$ outer() <==== when call outer function, the outer function will return a function inner\
function inner(){\
        var innerData = "awesome";\
        return data + innerData;\
    }

$ outer()() <==== but when we call outer function and inner function we got the return of inner
closure are awesome

**Example**:
function outer(a){
    return function inner(b) {
        return a + b
    }
}
$ outer(5)(5) // 10



