
const btn = document.getElementById('btn');

function switchOn(){
    if (document.body.style.backgroundColor === 'white'){
        document.body.style.backgroundColor = 'black'
    }else{
        document.body.style.backgroundColor = 'white'
    }
}

btn.addEventListener('click', switchOn);
