keyword = "wendi"
guess = ""
guess_count = 0
guess_limit = 3
is_lose = False

while keyword != guess and is_lose == False:
    if(guess_count < guess_limit):
        guess_limit_time = str(guess_limit - guess_count)
        print("Guess Limit = " + guess_limit_time )
        guess = input("Guess the word = ")
        guess_count += 1
    else:
        is_lose = True

if(is_lose):
    print("Ouppsi ... you lose")
else:
    print("You Win")

