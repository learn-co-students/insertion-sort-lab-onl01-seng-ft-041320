function findMinAndRemove(array){
    let min = array[0]
    let index = 0
    array.forEach((el, i) => {
        if(el < min){
            min = el
            index = i
        }
    })
    array.splice(index, 1)
    return min
}

// recursive

// function selectionSort(array, sortedArr = []){
//     let unsortedArr = [...array]
//     sortedArr.push(findMinAndRemove(unsortedArr))
//     if(unsortedArr.length > 0){
//         selectionSort(unsortedArr, sortedArr)
//     }
//     return sortedArr
// }

// while loop

function selectionSort(array){
    let unsortedArr = [...array]
    let sortedArr = []
    while (unsortedArr.length > 0 ){
        sortedArr.push(findMinAndRemove(unsortedArr))
    }
    return sortedArr
}
