// string ichida nechta "a" qatnashganini topish kerak

function app(params){
    console.log(params.match(/a/gi).length);
}
app('webbrain Academy')