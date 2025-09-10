const coding = ["js", "rb", "py", "java", "c++"]

// coding.forEach(function (val) {
//     console.log(val);

// })

// coding.forEach((item) => {
//     console.log(item);

// })


// function printme(item) {
//     console.log(item);

// }

// coding.forEach(printme)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);

// })


const myCoding = [

    {
        languageName: "Java script",
        languageFileName: "js"
    },

    {
        languageName: "Java",
        languageFileName: "java"
    },

    {
        languageName: "Python",
        languageFileName: "Python"
    },

    {
        languageName: "html",
        languageFileName: "html"
    },

    {
        languageName: "ruby",
        languageFileName: "ruby"
    },

]

myCoding.forEach((item) => {

    console.log(item.languageName);

})