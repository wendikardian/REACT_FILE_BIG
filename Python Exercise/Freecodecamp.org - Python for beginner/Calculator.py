def calculator(operator, num1, num2):
    if(operator == "+"):
        return num1+num2
    elif(operator == "-"):
        return num1-num2
    elif(operator == "*"):
        return num1*num2
    elif(operator == "/"):
        return num1/num2
    else:
        return "False operator"


i = True
while i == True:
    num1 = float(input("Insert the first number : "))
    operator = input("insert the operator : ")
    num2 = float(input("Insert the second number : "))
    print("Your operator is " + str(num1) + str(operator) + str(num2))
    result = calculator(operator, num1, num2)
    print("And then the result is " + str(result))
    check = input("Do you wanna repeat this ? (yes/no) ")
    if(check == "yes" or check =="YES"):
        i = True
    else:
        i = False