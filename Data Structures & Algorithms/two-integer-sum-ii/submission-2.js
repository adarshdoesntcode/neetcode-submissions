class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let check = new Map()
        for(let i = 0; i < numbers.length; i++){
            const compliment = target - numbers[i];
            if(check.has(numbers[i])){
                return [check.get(numbers[i]) + 1, i + 1]
            }else{
                check.set(compliment, i)
            }
        }
    }
}
