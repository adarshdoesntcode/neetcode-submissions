class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const anagrams = new Map()
        let output = []

        strs.forEach(str => {
            const sorted = str.split("").sort().join("")

            if(anagrams.has(sorted)){
                anagrams.set(sorted,[...anagrams.get(sorted), str])
            }else{
                anagrams.set(sorted,[str])
            }
        })

        for(const values of anagrams.values()){
            output.push(values);
        }

        return output

    }
}
