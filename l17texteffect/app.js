// get Ui

const languages = ['Nodejs','Reactjs','Vuejs','Laravel'];
const colors = ['red','skyblue','violet','yellow'];
const gettxtani = document.querySelector('.txtani');
const gettxtlights = document.querySelectorAll('.text-light')

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
            deletewords();
        }else{
            gettxtani.innerHTML += word[x];
            x++;
        }
    },250);
}

function deletewords(){
    let getword = gettxtani.innerHTML;
    // console.log(getword);

    let getlastidx = getword.length-1;
    // console.log(getlastidx);

    // Nodejs // 0 1 2 3 4 5
    // Nodej // 0 1 2 3 4 
    // Node // 0 1 2 3 
    // Nod // 0 1 2 
    // No // 0 1 
    // No// 0 

    let delinterval = setInterval(function(){
        if(getlastidx = 0){
            gettxtani.innerHTML = gettxtani.innerHTML.substring(0,gettxtani.innerHTML.length-1);
            getlastidx--;
        }else{
            // remove old color
            gettxtani.classList.remove(colors[languages.indexOf(getword)]);

            // get new language
            showwords(languages[testnumber.next().value]); // Nodejs
            clearInterval(delinterval);
        }

    },250);    

}

gettxtlights.forEach(function(gettxtlight){
    // console.log(gettxtlight);

    let arrtexts = gettxtlight.textContent.split("");

    gettxtlight.textContent = "";

    arrtexts.forEach(function(arrtext,idx){
        // console.log(arrtext);
        // console.log(idx);

        let newem = document.createElement("em");

        newem.textContent = arrtext;
        // console.log(newem);

        newem.style.animationDelay = `${idx * 0.5}s`

        gettxtlight.append(newem);
    });
});



showwords(languages[testnumber.next().value]);  // showword ("Nodejs")