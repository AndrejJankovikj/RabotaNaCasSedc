console.log("Control Structures");




let score = parseInt(prompt('Vnesete poeni od ispitot'));
let pass = 50;
let splendid = 80

if (score >= splendid) {
    alert('You have passed the exam with splendid results!')

}
else if(score >=pass){
    alert('You have barely passed the exam, pity')
}
else{
    alert('You have failed the exam!')
}

