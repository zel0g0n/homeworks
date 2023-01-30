function changeVower(sentence) {
    let vowArr = ['a','e','o','i','u']
    let newStr = ''
    let newSentence = ''
    for(let i=0; i<sentence.length; i++) {
        checkVower(sentence[i])
        if(newStr == sentence[i]) {
            newSentence += `*`
        }else {
            newSentence += sentence[i]
        }

        function checkVower(vower) {
            for(let j=0; j<vowArr.length; j++) {
                if(vower.toLowerCase() == vowArr[j]) {
                    newStr = vower
                    break
                }
            }
        }
        
    }
    console.log(newSentence)
}
changeVower(prompt('Pls, enter you random text!'))
