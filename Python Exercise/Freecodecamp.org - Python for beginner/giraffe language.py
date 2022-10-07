def translate (phrase):
    translation = "";
    vowels = ["a", "i", "u", "e", "o", "A", "I", "U", "E", "O"]
    for letter in phrase:
        for vowel in vowels:
            if letter == vowel:
                if letter.isupper():
                    letter = "G"
                else:
                    letter = "g"
        translation = translation + letter;

    print("In translate it become = " + translation)

print("---------------------------------------------")
print("-------------- giraffe lanuage --------------")
print("---------------------------------------------\n\n")
i = 1
while i>0:
    word = input("Input the word = ")
    translate(word)
    check= input("do you wanna repeat the program (yes/no) ?")
    if (check == "yes" or check == "YES"):
        i = 1
    else:
        i = i - 1

