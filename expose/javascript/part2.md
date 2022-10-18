Question 1 Answer: The console will log the value 3, which is the value var i has at that point in the program

Question 2 Answer: The console will log the value 150, which is the value discountedPrice has at that point in the program

Question 3 Answer: The console will log the value 150, which is the value finalPrice has at that point in the program

Question 4 Answer: This function will return the list containing the values 50, 100, 150 (so what is returned is [50, 100, 150]). The program goes through the list that was inputted in the first argument, and multiplies each of the elements in the list by 0.5, rounds these halved values, and then adds this resulting value to the list discounted. So the values pushed onto discounted are approximately 50% of the inputted values.

Question 5 Answer: The code causes an error, because at line 12, i has gone out of scope (it only has scope in the for loop), so as far as the program knows, i does not exist.

Question 6 Answer: The code causes an error, because at line 13, discountedPrice has gone out of scope (it only has scope in the for loop), so as far as the program knows, discountedPrice does not exist.

Question 7 Answer: The console will log the value 150, which is the value finalPrice has at that point in the program

Question 8 Answer: This function will return the list containing the values 50, 100, 150 (so what is returned is [50, 100, 150]). The program goes through the list that was inputted in the first argument, and multiplies each of the elements in the list by 0.5, rounds these halved values, and then adds this resulting value to the list discounted. So the values pushed onto discounted are approximately 50% of the inputted values.

Question 9 Answer: The code causes an error because at that point in the program, i has gone out of scope (it only has scope in the for loop), so as far as the program knows, i does not exist.

Question 10 Answer: The console will log the value 3, which is the value length has at that point in the program.

Question 11 Answer: This function will return the list containing the values 50, 100, 150 (so what is returned is [50, 100, 150]). The program goes through the list that was inputted in the first argument, and multiplies each of the elements in the list by 0.5, rounds these halved values, and then adds this resulting value to the list discounted. So the values pushed onto discounted are approximately 50% of the inputted values. The fact that discounted is a const doesn't impact its size - elements can still be added to discounted.

Question 12 Answer: 
    A. student.name
    B. student["Grad Year"]
    C. student["greeting"]
    D. student["Favorite Teacher"].name
    E. student.courseLoad[0]

Question 13 Answer:

A. Output: '32'. This output was generated because 2 was mapped to its string representation '2', and the two strings were concatenated

B. Output: 1. This output was generated because '3' was mapped to its integer representation 3, and 2 was subtracted from 3

C. Output: 3. This output was generated because null was mapped to its integer representation 0, and 0 was added to 3

D. Output: '3null'. This output was generated because null was mapped to its string representation 'null', and the two strings were concatenated

E. Output: 4. This output was generated because true was mapped to its integer representation 1, and 1 was added to 3

F. Output: 0. This output was generated because false and null were mapped to their integer representation 0, and 0 was added to 0.

G. Output: '3undefined'. This output was generated because undefined was mapped to its string representation 'undefined', and the two strings were concatenated

H. Output: NaN. This output was generated because '3' was mapped to its integer representation 3 and undefined was mapped to NaN. Including NaN in a mathematical operation will return NaN.

Question 14 Answer:

A. Output: true. This output was generated because '2' was mapped to its integer representation 2, and 2 > 1 is true.

B. Output: false. This output was generated because the first characters of both strings ('2' and '1') were compared. Since '1' is less than '2', the comparison '2' < '12' returned false

C. Output: true. This output was generated because '2' was mapped to its integer representation 2, and 2 == 2 is true.

D. Output: false. This output was generated because the strict equality checks the equality of 2 and '2' without type conversions. Since a string is not equal to an integer, the output is false.

E. Output: false. This output was generated because true was mapped to its integer representation 1, and 1 == 2 is false.

F. Output: true. This output was generated because Boolean(2) is converted to true, and true === true is true

Question 15 Answer: The == and === both check for equality, but the == operator performs type conversion if the two arguments compared are of different types. The === operator does not perform type conversion while comparing

Question 17 Answer: The result returned from the function is the list [2, 4, 6]. modifyArray iterates through each element of [1, 2, 3], and for each element, calls the function doSomething which multiplies the number passed in by 2, and returns the doubled number. This doubled number is then added to the list newArr, and after iterating over the inputted list, newArr is returned.

Question 19 Answer: The output are the numbers 1, 3, 4, 2 in that order
