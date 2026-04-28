class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const source = s.split('').sort().join('');
        const target = t.split('').sort().join('');

        if(source === target){

        return true
        }else{
            return false
        }
    }
}
