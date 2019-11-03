// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//function chunk(array, size) {
//    let chunked = [];
//    for (const elem of array) {
//        const lastChunk = chunked[chunked.length - 1]
//        if (!lastChunk || lastChunk.length === size) {
//            chunked.push([elem])
//        } else {
//            last.push(elem)
//        } 
//    }
//    return chunked;
//} 
function chunk(array, size) {
    let chunked = [];
    for (var i = 0; i < array.length; i+= size) {
        chunked.push(array.slice(i, i+size))
    }
    return chunked;
}

module.exports = chunk;
