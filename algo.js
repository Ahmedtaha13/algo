function analyzeSentence(sentence) {
    let vowels = 'aeiou';
    let vowelCount = 0;
    let wordCount = 0;
    let characterCount = 0;

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence.charAt(i);
        characterCount++;

        if (vowels.includes(char.toLowerCase())) {
            vowelCount++;
        }

        if (char === ' ') {
            wordCount++;
        }
    }

    
    if (sentence.charAt(sentence.length - 1) !== ' ') {
        wordCount++;
    }

    return {
        characterCount: characterCount,
        wordCount: wordCount,
        vowelCount: vowelCount
    };
}


let sentence = "Ahmed Taha Seddiki";
let { characterCount, wordCount, vowelCount } = analyzeSentence(sentence);
console.log(`Length of sentence: ${characterCount}`);
console.log(`Number of words: ${wordCount}`);
console.log(`Number of vowels: ${vowelCount}`);