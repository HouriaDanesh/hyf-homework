function resolveAfterTime(resolveAfter){
    return new Promise(function(resolve, reject)
    {
        setTimeout(function()
        {
           resolve("I am called asynchronously");
        }, resolveAfter * 1000);
    });
}
    resolveAfterTime(3).then(value => console.log(value))
    resolveAfterTime(6).then(value => console.log(value))



