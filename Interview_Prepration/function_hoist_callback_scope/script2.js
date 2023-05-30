// Closures
function t() {

    function timeout(i) {
        setTimeout(()=>{
            console.log(i);
        }, i*1000)
    }

    for(var i =0; i< 3; i++){
        timeout(i);
    }
}

t()