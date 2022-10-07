def max_number(num1,num2,num3):
    if(num1 > num2):
        if(num1 > num3):
            return num1
        else:
            return num3
    else:
        if(num2> num3):
            return num2
        else:
            return num3

def max_number_2(num1, num2, num3):
    if(num1 >= num2 and num1 >= num3):
        return num1
    elif(num2 >= num1 and num2 >= num3):
        return num2
    else:
        return num3
try:
    num1 = int(input("Please insert number 1 : "))
    num2 = int(input("Please insert number 2 : "))
    num3 = int(input("Please insert number 3 : "))
    result = max_number(num1,num2, num3)
    result2 = max_number_2(num1,num2, num3)
    print("The biggest number is " + str(result))
    print("The biggest number is " + str(result2))
except ValueError:
    print("Invalid value")


