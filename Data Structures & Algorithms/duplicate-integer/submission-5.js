class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let alreadySeen = new Set();

        for (const n of nums){
            if (alreadySeen.has(n)){
                return true;
            }else{
                alreadySeen.add(n);
            } 
        }
        return false;
    }
}
