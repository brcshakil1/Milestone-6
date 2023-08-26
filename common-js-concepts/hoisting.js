print5()

for(var i = 0; i < 5; i++) {
    console.log(i)
}

console.log('outside', i);


function print5() {
    console.log('inside', 5);
}