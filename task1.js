const person = {
    city: "Moscow",
}

const student = Object.create(person);

student.ownCity = "Piter";


function getObjectOwnInfo (object) {
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            console.log(key);
            console.log(object[key])
        }
    }

    return
}

getObjectOwnInfo(student);