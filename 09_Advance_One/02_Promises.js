
// ***************************************************************************************************

const promiseOne = new Promise(function (resolve, reject) {

      // Do an Async task
      // DB calls, Cryptography, Network

      setTimeout(function () {
            console.log("Async task is completed");
            resolve()

      }, 1000)

})

promiseOne.then(function () {
      console.log("Promise consume completed");

})

// ***************************************************************************************************

new Promise(function (resolve, reject) {
      setTimeout(function () {
            console.log("Async task 2");
            resolve()
      }, 1000)
}).then(function () {
      console.log("Async 2 resolve");

})

// ***************************************************************************************************

const promiseThree = new Promise(function (resolve, reject) {
      setTimeout(function () {
            resolve({ username: "Rohan", email: "Rohan@gmail.com", })
      }, 1000)
})

promiseThree.then(function (user) {
      console.log(user);

})

// ***************************************************************************************************

const promiseFour = new Promise(function (resolve, reject) {
      setTimeout(function () {
            let error = false
            if (!error) {
                  resolve({ username: "Rohan@777", pass: "1234" })
            } else {
                  reject("ERROR : Something went wrong")
            }

      }, 1000)
})

promiseFour.then((user) => {
      console.log(user);
      return user.username
}).then((username) => {
      console.log(username);

}).catch((error) => {
      console.log(error);

}).finally(() => console.log("The promise is either resolver or rejected"))


// ***************************************************************************************************

const promiseFive = new Promise(function (resolve, reject) {

      setTimeout(function () {
            let error = true
            if (!error) {
                  resolve({ username: "JavaScript", pass: "1234" })
            } else {
                  reject("ERROR : Js went wrong")
            }

      }, 1000)
})


async function consumePromiseFive() {

      // const response = await promiseFive
      // console.log(response);

      try {
            const response = await promiseFive
            console.log(response);
      } catch (error) {
            console.log(error);

      }
}

consumePromiseFive()

// ***************************************************************************************************

// async function getAllUsers() {

//       try {
//             const response = await fetch('https://jsonplaceholder.typicode.com/users')
//             const data = await response.json()
//             console.log(data);

//       } catch (error) {
//             console.log('E:', error);

//       }

// }

// getAllUsers()

// ***************************************************************************************************

fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
            return response.json()
      })
      .then((data) => console.log(data)

      )
      .catch((error) => console.log(error)
      )
