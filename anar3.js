function characterremover(word,whichCharacterYouWantToRemove){
    word === 'anar'
    whichCharacterYouWantToRemove === 'a'   
    
    for (let i = 0; i < word.length; i++) {
        
        if ( word[i] = whichCharacterYouWantToRemove ){

            delete word[i]
        }

            
        


    }
    
        
}
console.log(characterremover('anar','a'))