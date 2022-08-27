#Write a program that prints the numbers from 1 to 100
#for multiples of "3" print “Fizz”
#for multiples of "5" print “Buzz” 
#for multiples of "3" & "5" print "Fizzbuzz"
for currentNumber in range(1, 101):
    if currentNumber % 15 == 0:
        print("Fizzbuzz")
        continue
    elif currentNumber % 3 == 0:
        print("Fizz")
        continue
    elif currentNumber % 5 == 0:
        print("Buzz")
        continue
    else:
        print(currentNumber)

