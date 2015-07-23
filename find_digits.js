function processData(input) {
    //Enter your code here
    var inputArray = input.split('\n');
    var testCases = Number(inputArray[0]);
    var result = [];
    for(var i = 1 ; i <=testCases; ++i) {
        var test = Number(inputArray[i]);
        var originalTest = test;
        var counter = 0;
        while(test > 0) {
            var num = (test % 10);
            if (num != 0) { 
                if(originalTest % num === 0) {
                    counter +=1;
                }
            }
            test = ~~(test/10);
        }
        result.push(counter);
    }
    for(var i = 0; i<result.length;i++)
        console.log(result[i]);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
