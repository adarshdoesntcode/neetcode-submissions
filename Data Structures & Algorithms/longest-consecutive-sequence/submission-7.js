class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const sorted = Array.from(new Set(nums.sort((a,b)=> a-b)));
        console.log(sorted)
        let initialStreak = sorted.length > 0 ? 1 : 0;
        let currentMax = initialStreak
        let currentStreak  = initialStreak

        if(sorted.length > 1){

        for(let i = 0; i < sorted.length - 1; i++){
            if(sorted[i+1] === sorted[i] + 1){
                currentStreak = currentStreak+1
                if (currentStreak >= currentMax){
                    currentMax = currentStreak
                }
            }else{
                currentStreak  = initialStreak
            }
        }
        }else{
            currentMax = initialStreak
        }

        return currentMax
    }
}
