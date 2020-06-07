let samplearray = [2,5,6,1,7,4,56,12,34,32,30,0,1];
let arrayTolist = function(array){
    let list1 = [];
    for(let a = array.length; a>=0;a--){
        let y = array.slice(a);
        let list = {value: array[a], rest:y};
        list1.unshift(list);
    }
    return list1
}
arrayTolist(samplearray);