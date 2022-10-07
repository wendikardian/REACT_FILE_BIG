from Question import Question

question_promp = [
    "What color are apples ? \n(a). Red/Green\n(b). Purple\n(c). Orange\n\n",
    "What color are bananas ? \n(a). Teal\n(b). Magenta\n(c). Yellow\n\n",
    "What color are Strawberries ? \n(a). Red\n(b).Yellow\n(c). green \n\n"
]

questions = [
    Question(question_promp[0], "a"),
    Question(question_promp[1], "c"),
    Question(question_promp[2], "a")
]


def test_quiz(questions):
    score = 0
    for question in questions:
        answer = input(question.prompt)
        if(answer == question.answer ):
            score += 1
    print(" You've got "+ str(score) + "/" + str(len(questions)) + " correct")
    if(score == 3):
        print("Congratulations, it's a perfect score")

test_quiz(questions)