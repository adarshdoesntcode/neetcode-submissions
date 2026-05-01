class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const h = new Map()
        const v = new Map()
        const b = new Map()

        for(let i = 0; i < board.length; i++ ){
            for(let j = 0; j < board[i].length; j++ ){
                const horizontal =  this.validate(h, board[i][j], i,)
                const vertical =  this.validate(v, board[i][j], j)
                const box =  this.validateBox(b, board[i][j], i, j)
                if(!(horizontal && vertical && box)){
                    return false
                }
            }
        }

        console.log("h" , h )
        console.log("v" , v )
        console.log("b" , b )

        return true
    }

    validate(map, culprit, key){
        if(culprit === "."){
            return true
        }else if(!(culprit > 0 && culprit < 10)){
            return false
        }else if (map.has(key)){
            let array = map.get(key)
            if(array.includes(culprit)){
                return false
            }else{
                array.push(culprit)
            }
            return true
        }else{
            map.set(key, [culprit])
            return true
        }
    }

    validateBox(map, culprit, i, j){
        if(culprit === "."){
            return true
        }else if(!(culprit > 0 && culprit < 10)){
            return false
        }
        
        const id = Math.floor(i / 3) * 3 + Math.floor(j / 3)
        
        if(map.has(id)){
            let array = map.get(id)
            if(array.includes(culprit)){
                return false
            }else{
                array.push(culprit)
            }
            return true
        }else{
            map.set(id, [culprit])
            return true
        }

    }
}
