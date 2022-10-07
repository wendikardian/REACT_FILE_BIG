from Student import *

student1 = Student("Wendi Kardian", "Computer_Science", 3.3, True)
student2 = ArtStudent("Wendi Kardian", "Art", 3.5, True)
student3 = ArtStudent("Wendi Kardian", "Art", 3.9, True)


print(student1.is_honor())
print(student1.study())
print(student3.is_honor())
print(student2.drawing())
print(student3.painting())
print(student3.study())