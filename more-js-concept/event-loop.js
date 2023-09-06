const a = () => {
    console.log('a');
    b()
    console.log('aa');
}
const b = () => {
    console.log('b');
    c()
    console.log('bb');
}
const c = () => {
    console.log('c');
    d()
    console.log('cc');
}
const d = () => {
    console.log('d');
    x()
    console.log('dd');
}
const x = () => {
    console.log('x');
    y()
    console.log('xx');
}
const y = () => {
    console.log('y');
    z()
    console.log('yy');
}
const z = () => {
    console.log('z');
    console.log('zz');
}
setTimeout(()=>console.log('Event loop'), 4000);
a()
