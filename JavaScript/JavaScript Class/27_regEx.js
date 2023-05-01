// Regular Expression

let pattern = "pw"

let regExOne = new RegExp (pattern)

let flag = "gi"

let regExTwo = new RegExp (pattern, flag)

let regExThree = /pw/gi

const strToCheck = "PW is growing at a rapid speed and recently they are working on Pwskills to create skills based pwcontent"

const result = regExThree.test (strToCheck)
console.log(result);

const anotherResult = strToCheck.match (regExThree)
console.log(anotherResult);

const oneMoreResult = strToCheck.replace (regExThree, "p-w")
console.log(oneMoreResult);

const webUrl = "https://pwskills.com/ayush%20kumar"

const useableUrl = webUrl.replace (/%20/, "-")
console.log(useableUrl);

const webUrl1 = "https://pwskills.com/ayush%30kumar"

const useableUrl1 = webUrl1.replace (/%\d0/, "-")  // \d replace the digit
console.log(useableUrl1);

const webUrl2 = "https://pwskills.com/ayush%32kumar"

const useableUrl2 = webUrl2.replace (/%\d\d/, "-")
console.log(useableUrl2);

