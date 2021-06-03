let advancedIndexOf= (x, yourArray)=>{
    let count =0;
    let indexes = [];
    let responseObj = {}
for(i=1; i<yourArray.length, i++;){
    if(x===yourArray[i]){
        i=i++;
        indexes.push(i);
        responseObj.indexes = indexes;
        responseObj.count = i
    }
}

if(count===0){
    return -1
}
else {
    console.log(responseObj.indexes);
    console.log(count);
}
}