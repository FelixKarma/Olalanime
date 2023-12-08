function isPlaindrome (word) {
    const reversedWord = word
    .split ('')
    .reverse ('')
    .join ('')
    return word.toUpperCase() === reversedWord.toUpperCase()
    
}
console.log(isPlaindrome('kayak'))