function ageInDays(){
    var ageInDays = prompt('What year were your born?');
    var ageInDayss = (2022-ageInDays)*365;
    var h2 = document.createElement('h2');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old');
    h2.setAttribute('id','ageInDays');
    h2.appendChild(textAnswer);
    document.getElementById('result').appendChild(h2);
}

function reset(){
    document.getElementById('ageInDays').remove();
}