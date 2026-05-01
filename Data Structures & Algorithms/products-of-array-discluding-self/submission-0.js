class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        const leftMultiples = []
        const rightMultiples = []
        let currLeftMulti = 1
        let currRightMulti = 1
        const resultArray =[]

        for (let i = 1 ; i < nums.length; i++){
            currLeftMulti *= nums[i-1] 
            leftMultiples.push(currLeftMulti)
        }

        for (let i = nums.length - 2 ; i >= 0; i--){
            currRightMulti *= nums[i+1] 
            rightMultiples.unshift(currRightMulti)
        }

        console.log("leftMultiples", leftMultiples)
        console.log("rightMultiples", rightMultiples)

        for(let i = 0; i < nums.length ; i++){
            if(i === 0 ){
                resultArray[i] = rightMultiples[0];
            }else if(i === nums.length -1){
                resultArray[i] = leftMultiples[leftMultiples.length - 1];
            }else{
                resultArray[i] = leftMultiples[i-1] * rightMultiples[i]
            }

            
        }

        console.log("resultArray", resultArray)

        return resultArray

    }
}
