const makeRunOn = function(str){
  const arr = str.split('')
  const len = str.length
  let string = ''

  for(let char of arr){
    if(char === '.'){
      char = ','
     string = string + char
} else{
  string = string + char
}
} if(string.charAt(string.length - 1) === ','){
  return string.slice(0, [string.length - 1]) + '.'
} else return string
}

const totalScore = function(score, mult = 1, bonus = 0){
  let total = 0

  for(const val of score){
    total = total + val.score

  } return total * mult + bonus
}

const nightOwls = function(people) {
  const arr = []
  for(const person of people){
    if(person.asleep === false && person.localTime <= 400 && person.localTime >= 100){
      arr.push(person)
    }
  } return arr
}

const getToBed = function(people) {
  const arr = []
  const copy = [...people]
  for(const person of copy){
    if(person.localTime <= 400 && person.localTime >= 100){
      person.asleep = true
      arr.push(person)
    } else {
      arr.push(person)
    }
  } return arr
}

const findIndices = function(arr,callback){
  const map = arr.map(callback)
  const newArr = []
  let count = 0
  for(const val of map){
    if(val === true){
      newArr.push(count)
      count++
    } else count++
  }
return newArr
}

const Faqtory = {
  set addQuestion(text) {
    const count = this.questions.length + 1
    const obj = {
      text: text,
      id: count,
      answered: false
    }
    this.questions.push(obj);
  },
  questions: []
};




if (typeof makeRunOn === 'undefined') {
  makeRunOn = undefined;
}

if (typeof nightOwls === 'undefined') {
  nightOwls = undefined;
}

if (typeof totalScore === 'undefined') {
  totalScore = undefined;
}

if (typeof getToBed === 'undefined') {
  getToBed = undefined;
}

if (typeof findIndices === 'undefined') {
  findIndices = undefined;
}

if (typeof Faqtory === 'undefined') {
  Faqtory = undefined;
}

module.exports = {
  makeRunOn,
  nightOwls,
  totalScore,
  getToBed,
  findIndices,
  Faqtory,
}
