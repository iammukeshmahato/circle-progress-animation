
let number = document.querySelector("#number");
let count = 0;
let percentVal = number.innerHTML.slice(0, -1);    // getting number after removing % i.e 65% as 65
let interval = 2000 / percentVal;   // since our animation time is 2s so, interval = 2000 / percentVal
setInterval(() => {
    if (count == percentVal) {
        clearInterval()
    } else {
        count++;
        number.innerHTML = count + "%";
    }
}, interval);
