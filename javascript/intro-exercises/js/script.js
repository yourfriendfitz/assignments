// Palindrome

function isPalindrome(word) {
    wordFlipArray = []
    wordNoSpace = word.replace(/\s/g, '')
    for (i = wordNoSpace.length - 1; i >= 0; i --) {
        wordFlipArray.push(wordNoSpace[i])
    }

    wordFlip = wordFlipArray.join("")
    

    if (wordNoSpace == wordFlip) {
        window.alert(`${word} is a palindrome`)
    } else {
        window.alert(`${word} is not a palindrome`)
    }
    
}

// Remove Duplicates from an array

function removeDups(dupsArray) {
    noDupsArray = []
    for (i=0; i < dupsArray.length; i++) {
        item = dupsArray[i]
        if (!(noDupsArray.includes(item))) {
            noDupsArray.push(item)
        }
    }
    return noDupsArray
}

dupsArray = [1,6,3,8,6,5,2,6,3,8,9,6,3,6,-5]
console.log(removeDups(dupsArray))

// is item in the array?

function containsItem(item,array) {
    inArray = false
    for (i=0; i < array.length; i++) {
        if (array.includes(item)) {
            inArray = true
            break
        }
    }
    return inArray
}

console.log(containsItem(4,dupsArray))

// finds largest number in array

function findMax(array) {
    let large = array[0]
    for (i = 1; i < array.length; i ++) {
        if (array[i] > large) {
            large = array[i]
        }
    }
    return large
}

//finds smallest number in array

function findMin(array) {
    let small = array[0]
    for (i = 1; i < array.length; i ++) {
        if (array[i] < small) {
            small = array[i]
        }
    }
    return small
}

console.log(findMax(dupsArray))
console.log(findMin(dupsArray))

// Fizz Buzz

function fizzBuzz(num) {
    if ((num % 5 == 0) && (num % 3 == 0)) {
        console.log("FIZZ BUZZ")
    } else if (num % 5 == 0) {
        console.log("FIZZ")
    } else if (num % 3 == 0) {
        console.log("BUZZ")
    }
}

fizzBuzz(10)

// odd or even

function evenOdd(num) {
    if (num == 0) {
        return "null value"
    }
    if (num % 2 == 0) {
        return "even"
    } else {
        return "odd"
    }
}

console.log(evenOdd(8))

// sort array

function descendingSort(array) {
    for (i = 1; i < array.length; i++) {
        pull = array[i]
        for (j = i - 1; j >= 0 && array[j] < pull; j--) {
            array[j + 1] = array[j]
        }
        array[j + 1] = pull
    }
    return array
}

function ascendingSort(array) {
    for (i = array.length - 2; i >= 0; i--) {
        pull = array[i]
        for (j = i + 1; j < array.length && array[j] < pull; j++) {
            array[j - 1] = array[j]
        }
        array[j - 1] = pull
    }
    return array
}




console.log(descendingSort(dupsArray))
console.log(ascendingSort(dupsArray))

class BankAccount {
    constructor(firstName, lastName, middleName = "") {
        this.firstName = firstName
        this.lastName = lastName
        this.middleName = middleName
        this.accountType = ""
        this.balance = ""
        this.status = ""
    }

        openAccount(accountType, balance) {
            if (balance >= 100) {
                this.accountType = accountType
                this.balance = balance
                this.status = "Opened"
                console.log(`Account opened with balance: $${balance}`)
            } else {
                console.log("Insufficient funds. Minimum initial deposit: $100")
            }
        }

        checkFunds() {
            if (this.balance < 0) {
                this.balance -= 35
                console.log("Negative balance penalty charged.")
            }
        }

        transferFunds(accountTo, txAmount) {
                this.balance -= txAmount
                accountTo.balance += txAmount
                console.log(`Transferred $${txAmount}
Current Balance: $${this.balance}`)
                this.checkFunds()
            }

        withdrawFunds(wxAmount) {
                this.balance -= wxAmount
                console.log(`Withdrew $${wxAmount}
Current balance: $${this.balance}`)
                this.checkFunds()
        }

}

snovAccount = new BankAccount("Eric", "Snover")
snovAccount.openAccount("Checking",200)
ericAccount = new BankAccount("Rob","Snovski")
ericAccount.openAccount("Checking", 500)

snovAccount.transferFunds(ericAccount,150)
ericAccount.withdrawFunds(500)
ericAccount.withdrawFunds(300)
console.log(snovAccount)
console.log(ericAccount)
