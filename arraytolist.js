let samplearray = [2,5,6,1,7,4,56,12,34,32,30,0,1];
let arrayTolist = function(array){
    let list=[];
    n = array.length;
    for(let i = 0;i<array.length;i++){
        list.push("{value: "+ array[i] +",\n rest: { \n");
    }
    for(let i = 0;i<array.length;i++){
        list.push("}\n");
    }
    return list
}
arrayTolist(samplearray);