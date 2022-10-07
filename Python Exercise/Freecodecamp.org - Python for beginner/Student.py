class Student:
    def __init__(self, name, major, gpa, is_on_track):
        self.name = name
        self.major = major
        self.gpa = gpa
        self.is_on_track = is_on_track

    def is_honor(self):
        if self.gpa >= 3.5:
            return True
        else:
            return False

    def study(self):
        print("Every student study every day")

class ArtStudent(Student):
    def drawing(self):
        print("The art student is drawing")

    def painting(self):
        print("The art student is painting the card")