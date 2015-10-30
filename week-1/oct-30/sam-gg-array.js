var ques = [['Is Sam a Libra?', 'yes', 'That\'s right, he was born in late September.', 'Wrong. You COSMICFAIL.'],
            ['Is Emily a rabbi?', 'yes', 'Shalom.', 'You really should get to know her better, and seek her guidance.'],
            ['Does Darcy have 8 kids?', 'no', 'You\'re right! She only has 3 kids!', 'Are you crazy?!?!?!'],
            ['Is Jonathan a ninja?', 'yes', 'Yep. You are lucky to be alive!', 'Wrong... he is, and you better be careful. His ninja name is "Kevin."'],
            ['Was Scott born with a tail?', 'no', 'Correct. Thankfully.', 'Nope. Only in your dreams. But his kid will have one.']];

function displayQues() {
  for (var i = 0; i < ques.length; i++) {
    var nextQuestion = document.createElement('h2');
    var nextAnswer = document.createElement('p');

    nextQuestion.innerHTML = ques[i][0];
    document.body.appendChild(nextQuestion);
    var user = prompt(ques[i][0]);

    if (user === ques[i][1]) {
      nextAnswer.innerHTML = ques[i][2];
    } else {
      nextAnswer.innerHTML = ques[i][3];
    }
    document.body.appendChild(nextAnswer);
  }
}

displayQues();
