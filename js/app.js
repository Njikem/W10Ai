//Creating custom functions with integers and then add the two function arguments and multiply the result by five.
function name_mau(numb1, numb2){
    let bright = numb1+numb2;
    let cat = bright *5;
    return cat
    }
    
    let variable = name_mau(8,8)
    
    let dog = name_mau(9,9)
    
    let bread = name_mau(15,12)
    
    
    //Function argument expected to be string and the function will return true if the string length is >10.
    
    function string(food){
        if(food > 10){
            return food.length `true`;
    
        } else{
            return `false`;
        }
    }
        
    let happy_string = string(true);
    let enough_string = string(false);
    let strong_enough = string(true);
    
    console.log (string(`I am happy!`));
    console.log (string(`Not enough`));
    console.log(string(`Keep it up`));