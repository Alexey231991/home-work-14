const hourse = document.querySelector('.hourse');
const minutes = document.querySelector('.minutes');
const secondes = document.querySelector('.secondes');

function update() {
    const date = new Date();
    const h = ("0" + date.getHours()).slice(-2);
    const m = ("0" + date.getMinutes()).slice(-2);
    const s = ("0" + date.getSeconds()).slice(-2);
    console.log( h + ':' + m + ':' + s );

    hourse.innerText = h;
    minutes.innerText = m;
    secondes.innerText = s;




}

update();

setInterval(update, 1000);



