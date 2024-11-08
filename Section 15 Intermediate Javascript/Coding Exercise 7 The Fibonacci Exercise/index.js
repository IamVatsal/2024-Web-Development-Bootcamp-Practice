function fibonacciGenerator (n){
    var output = [];
    var first ;
    var second ;
    var sum ;
    for (var count= 0; count<n; count++){
        if(count===0){
            output.push(0);
            first=count;
        }
        if(count===1){
            output.push(1);
            second=count;
        }
        else if (count>1){
            sum = first + second;
            output.push(sum);
            first = second;
            second = sum;
        }
    }
    console.log(output)
}

fibonacciGenerator (15);