let yesButton =document.getElementById('yes');

let noButton = document.getElementById('no');

messages = ['You will know it when you see it. It will know you when it sees you.', 
                  'From listening comes wisdom and from speaking repentance.', 
                  'Courtesy begins in the home.',
                  'Better ask twice than lose yourself once.',
                  'An acquaintance of the past will affect you in the near future.',
                  'A soft voice may be awfully persuasive.',
                  'A hunch is creativity trying to tell you something.',
                  'A dubious friend may be an enemy in camouflage.',
                  'To be found, stop hiding.',
                  'Some things are just too heavy to haul around.',
                  'Change comes with embracing the future, not fighting your past.',
                  'Unlearn everything that you aren’t. Relearn everything that you are.',
                  'When you love yourself, people who do not love you back become less interesting.',
                  'The middle of the process is no place to determine the end of it.',
                  'Follow what you love and see what turns up.'
            ]


//console.log(messages)
let count= 0;
const sum = ()=>{ 
    count +=1
}

yesButton.onclick = sum

function fortuneMessage(event) {
    let fortune = messages[Math.floor(Math.random() * 15)] ;
     if (count === 1){document.getElementById('message').innerHTML = fortune}
    else if ( count === 2){
    document.getElementById('message').innerHTML = 'You can have only one fortune a day!'
    yesButton.removeEventListener('click', fortuneMessage)}

}        

//function oneFortune(event){
    //document.getElementById('message').innerHTML = 'You can only have one fortune a day'
    //yesButton.removeEventListener('click', oneFortune)
//}

function noFortune(event) {
    document.getElementById('message').innerHTML = 'See you next time!'
}

yesButton.addEventListener('click', fortuneMessage);
yesButton.addEventListener('click', oneFortune);
noButton.addEventListener('click', noFortune);