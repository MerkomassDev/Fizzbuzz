//Write a program that prints the numbers from 1 to 100
//for multiples of "3" print “Fizz”
//for multiples of "5" print “Buzz” 
//for multiples of "3" & "5" print "Fizzbuzz"

for (let i = 1; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 == 0){
        console.log("fizzbuzz")
    }
    else if(i % 3 == 0){
        console.log("fizz")
    }
    else if(i % 5 == 0){
        console.log("buzz")
    }
    else{
        console.log(i)
    }
}
