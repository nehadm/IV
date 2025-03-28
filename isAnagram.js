var isAnagram = function(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    }
    
    const countMap = new Map();
    
    for(let i=0; i<str1.length; i++) {
        if(countMap.has(str1[i])) {
            countMap.set(str1[i], countMap.get(str1[i]) + 1);
        } else {
            countMap.set(str1[i], 1);
        }
    }
}
