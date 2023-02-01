// function changeVower(sentence) {
//     let vowArr = ['a','e','o','i','u']
//     let newStr = ''
//     let newSentence = ''
//     for(let i=0; i<sentence.length; i++) {
//         checkVower(sentence[i])
//         if(newStr == sentence[i]) {
//             newSentence += `*`
//         }else {
//             newSentence += sentence[i]
//         }

//         function checkVower(vower) {
//             for(let j=0; j<vowArr.length; j++) {
//                 if(vower.toLowerCase() == vowArr[j]) {
//                     newStr = vower
//                     break
//                 }
//             }
//         }
        
//     }
//     console.log(newSentence)
// }
// changeVower(prompt('Pls, enter you random text!'))

function isIsogram(str){
    let str2=0;
      str = str.toLowerCase()
      for(let i=0; i<str.length-1; i++) {
        if(str.indexOf(str[i],i+1) != -1) {
            str2 += 1
          
        }
      }
      if(str = ``) {
        return true
      }else if(str2 == 0) {
        return true
      }else {
        return false
      }
  }

