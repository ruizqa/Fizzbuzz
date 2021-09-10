function FizzBuzz(n){

for(var i=1; i<=n;i++ ){
    console.log("Number: ", i);

    if(i%3==0 && i%5 ==0){
        console.log("\n---FizzBuzz---\n");
    }

    else if(i%3==0){
        console.log("\n---Fizz---\n");
    }

    else if(i%5 ==0){
        console.log("\n---Buzz---\n");
    }



}

}

FizzBuzz(20);