// get Ui

const languages = ['Nodejs','Reactjs','Vuejs','Laravel'];
const colors = ['red','skyblue','violet','yellow'];
const gettxtani = document.querySelector('.txtani');

// console.log(languages);
// console.log(languages[0]);  // give index get value Nodejs

// console.log(languages.indexOf('Reactjs')); // give value take index   1
// console.log(languages.indexOf('laravel')); // give value take index  -1 (*spelling mistake)
// console.log(languages.indexOf('Laravel')); // give value take index   3

// console.log(colors[(languages.indexOf('Laravel'))]);  // yellow
// console.log(colors[(languages.indexOf('Nodejs'))]);   // red

function* generator(){
    var idx = 0;

    while(true){
        yield idx++;

        if(idx > 3){
            idx = 0;
        }
    }
}

const testnumber = generator();
// console.log(testnumber);
// console.log(testnumber.next()); // {value: 0, done: false}
// console.log(testnumber.next().value); // 0    0
// console.log(testnumber.next().value); // 1    1
// console.log(testnumber.next().value); // 2    2
// console.log(testnumber.next().value); // 3    3
// console.log(testnumber.next().value); // 4    0
// console.log(testnumber.next().value); // 5    1

// console.log(languages[testnumber.next().value]); // Nodejs
// console.log(languages[testnumber.next().value]); // Reactjs
// console.log(languages[testnumber.next().value]); // Vuejs
// console.log(languages[testnumber.next().value]); // Laravel
// console.log(languages[testnumber.next().value]); // Nodejs
// console.log(languages[testnumber.next().value]); // Reactjs

function showwords(word){
    // console.log(word); // Nodejs
    // console.log(word[0]); // N

    let x = 0;

    gettxtani.innerHTML = '';
    gettxtani.classList.add(colors[languages.indexOf(word)]);

    // gettxtani.innerHTML = word;
    // gettxtani.innerHTML = word[0];  // N
    // gettxtani.innerHTML += word[1]; // No
    // gettxtani.innerHTML += word[2]; // Nod

    let showinterval =  setInterval(function(){

        if(x >= word.length){
            clearInterval(showinterval);
        }else{
            gettxtani.innerHTML += word[x];
            x++;
        }
    },500);



}



showwords(languages[testnumber.next().value]);  // showword ("Nodejs")