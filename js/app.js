$(document).ready(function () {
    
    var quiz = [
        {
            "question": "How many planets are there in our solar system?",
            "answers": ["11", "9", "7", "8"],
            "correct": 3
        },
        {
            "question": "Which one of these is a dwarf planet?",
            "answers": ["Pluto", "Neptune", "Saturn", "Grumpy"],
            "correct": 0
        },
        {
            "question": "In what order do the planets orbit the sun, from closest to farthest?",
            "answers": [
                "Mercury, Venus, Earth, Jupiter, Saturn, Uranus, Neptune, Pluto",
                "Saturn, Venus, Neptune, Jupiter, Mercury, Pluto, Earth, Uranus",
                "Mercury, Pluto, Earth, Jupiter, Saturn, Uranus, Neptune, Venus",
                "Venus, Mercury, Earth, Jupiter, Saturn, Uranus, Neptune, Pluto"
            ],
            "correct": 0
        },
        {
            "question": "How many years ago was our solar system formed?",
            "answers": [
                "5.6 billion years",
                "4.8 billion years",
                "4.6 billion years",
                "6.8 billion years"
            ],
            "correct": 2
        },
        {
            "question": "Where is our solar system located?",
            "answers": [
                "The Big Dipper’s Handle of the Milky Way Galaxy",
                "The Orion Arm of the Milky Way Galaxy",
                "The Astronomical Claw of Ursa Major of the Milky Way Galaxy",
                "The Orion's Belt of the Milky Way Galaxy"
            ],
            "correct": 1
        }
    ];
    var questionIndex = 0
    var answerList = function () {
        $(".question").append(quiz[questionIndex].question);
        for (var i = 0; i < quiz[questionIndex].answers.length; i++) {
            $("ul").append("<li>" + "<input type='radio' name='answers' value='incorrect'>" +                   quiz[questionIndex].answers[i]);
        }
    };
    //Display first question and first set of answers
    answerList();
    //when user clicks next
    $("button").on("click", function () {
    //Empty questions and answers
        $(".question").empty();
        $("ul").empty();
    //Display the next set of questions and answers in a list format
        questionIndex++;
        if (questionIndex >= quiz.length) {
            $("button").remove();
            return;
        }
        answerList();
    });

});