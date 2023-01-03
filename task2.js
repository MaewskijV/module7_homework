const student = {
    city: "Moscow",
    sex: "Male"
}


function checkObjectKey (str, object) {
    return (str in object);
}

console.log(checkObjectKey('sex', student));
