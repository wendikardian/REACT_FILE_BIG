employee_file = open("employee.txt", "r+")
print(employee_file.readable())
print(employee_file.read())
#
# for line in employee_file.readlines():
#     print(line)

append_file = open("employee.txt", "a")
newline = input("Insert new employee = ")
append_file.write(newline + ".\n")

employee_file.close()