class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let strslength = strs.length
        let wordHexs=[]

        for (let i = 0 ; i < strslength; i++){
            let currentWord = strs[i];
            let wordLength = currentWord.length
            let hexs = []
             for (let j = 0 ; j < wordLength; j++){
                hexs.push(currentWord.charCodeAt(j).toString(16)); 
             }
             const wordHex = `${hexs.join("")}`
             wordHexs.push(wordHex)
        }

        const encoded = `${strslength}|${wordHexs.join(".")}`
        console.log("encoded", encoded)

        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const firstSplit = str.split("|")
        const strings = firstSplit[1]

        const splits = strings.split(".");
        const arrayLength = firstSplit[0]
        const decoded = [];

        for(let i = 0 ; i < arrayLength ; i++){
            const encodedWord = splits[i];
            const wordLength = encodedWord.length;
            const word=[];

            for(let j = 0 ; j < wordLength ; j+=2){ 
             const hex = encodedWord.slice(j,j+2)
             const character =  String.fromCharCode(parseInt(hex, 16)); 
                word.push(character)
            }


            decoded.push(word.join(""))

        }

        return decoded
    }
}
