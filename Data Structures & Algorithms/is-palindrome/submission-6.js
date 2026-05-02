class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const alphanumeric = s.replace(/[^A-Za-z0-9]/g,"").toLowerCase()
        // const l = alphanumeric.length

        // if(l > 0){
        //     for(let i = 0 ; (l - 1 - i) - i !== -1 && (l - 1 - i) - i !== 0 ; i++){
        //         if(!(alphanumeric[i] === alphanumeric[l - 1 - i])){
        //             return false
        //         }
        //     }
        // }

        return alphanumeric === alphanumeric.split("").reverse().join("")
    }
}
