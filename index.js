function findMinAndRemove(arr){
    let index = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < arr[index]){
            index = i;
        }
    }
    return arr.splice(index, 1)[0];
};

function selectionSort(arr){
    let sorted = [];
    while(arr.length > 0){
        sorted.push(findMinAndRemove(arr));
    }
    return sorted;
};