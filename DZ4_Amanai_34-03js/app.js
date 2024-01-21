var numbers = [2, -78, 45, 4, -7, -6, -10, 26, 30, 8];
var sum = (array) => {
    var sum = 0
    var count = 0

    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sum += array[i]
            count++
        }
    }

    if (count === 0) {
        console.log('Нет положительных чисел для вычисления среднего')
        return 0
    }

    var average = sum / count.toFixed(2)
    console.log('Среднее значение: ' + average.toFixed(2))

    return average
}
    console.log(sum(numbers))

//2)
var numStr = [2,4,6,8]
const numeral = (array) => {
    var sum = 0;
    for (var i = 0; i < numStr.length; i++) {
        if (numStr[i] % 2 === 0) {
            sum +=numStr[i]*numStr[i]
        }
    }
    return sum
}
    console.log(numeral(numStr))

//3)
const wordsArray = ['cat', 'Elephant','text','frontend','Neo','Apple','school']
function findWordsWithAT(words) {
        const findingWords = words.filter(word => {
            const lowercaseWord = word.toLowerCase();
            return lowercaseWord.includes('a') || lowercaseWord.includes('t');
        });
        return findingWords
        }
        const findWords = (findWordsWithAT(wordsArray));
        console.log(findWords)