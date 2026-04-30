class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const anagrams = new Map()

        strs.forEach(str => {
            const sorted = str.split("").sort().join("")

            if(anagrams.has(sorted)){
                anagrams.set(sorted,[...anagrams.get(sorted), str])
            }else{
                anagrams.set(sorted,[str])
            }
        })

        return Array.from(anagrams.values())

    }
}
