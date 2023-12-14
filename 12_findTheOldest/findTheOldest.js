const findTheOldest = function(people) {
    let ages = [];
    let age = 0;
    let oldestIndex = 0;
    let oldestAge = 0;

    for (let i = 0; i<people.length; i++) {
        if (people[i].yearOfDeath === undefined) {
            age = 2023 - people[i].yearOfBirth;
        } else {
            age = people[i].yearOfDeath - people[i].yearOfBirth;
        }

        if(age>oldestAge) {
            oldestIndex = i;
            oldestAge = age;
        }
    }
    
    return people[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
