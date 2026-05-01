class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const frequency = new Map();

        for (let n of nums){
            if (frequency.has(n)){
                frequency.set(n, frequency.get(n) + 1)
            }else{
                frequency.set(n, 1)
            }
        }

        const sortedFrequency = new Map([...frequency.entries()].sort((a, b) => b[1] - a[1]));
        
        return Array.from(sortedFrequency.keys()).slice(0, k);

    }
}
