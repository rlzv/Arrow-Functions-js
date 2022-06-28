// const person = {
//     firstName: 'Viggo',
//     lastName: 'Pachomsky',
//     fullName: function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

const person = {
    firstName: 'Viggo',
    lastName: 'Pachomsky',
    fullName: function() {
        console.log(this)
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function() {
        setTimeout(() => {
            console.log(this.fullName())
        }, 3000)
    }
}