

var contains_duplicate = function(nums) {
    if(!nums || nums.length === 0) {
        return false;
    }
    const numsSet = new Set();

    for(let i=0; i < nums.length; i++) {
        console.log("NUM", nums[i], numsSet);
        if(numsSet.has(nums[i])) {
            return true;
        } else {
            numsSet.add(nums[i]);
        }
    }
    if(nums.length === numsSet.size) {
        return false;
    }
};


console.log(contains_duplicate([1, 2, 3, 1]));
