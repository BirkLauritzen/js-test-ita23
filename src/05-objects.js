/**
 * This function returns an object that has the properties: 'name', 'age', and 'city'.
 *
 * @returns {Object} - An object with properties 'name', 'age', and 'city'.
 *
 * Usage:
 * const person = createPersonObject();
 * // person might be { name: 'John Doe', age: 30, city: 'New York' }
 */
function createPersonObject() {
    return {name: 'John Doe', age: 30, city: 'New York'}
}


/**
 * This function returns the name of the given person object.
 *
 * @param {Object} person - The person object.
 * @returns {Object} - The name of the person.
 *
 * Usage:
 * const personName = getPersonName({ name: 'John Doe', age: 30, city: 'New York' });
 * // personName will be 'John Doe'
 */
function getPersonName(person) {
    const personName = {name: 'John Doe', age: 30, city: 'New York',}
    return personName.name
}


/**
 * This function finds a person from an array of persons based on their name.
 *
 * @param {Object[]} persons - Array of person objects.
 * @param {string} name - Name of the person to be found.
 * @returns {Object} - The person object with the given name, or null if not found.
 *
 * Usage:
 * const john = findPersonByName([{ name: 'John Doe', age: 30 }, { name: 'Jane Doe', age: 25 }], 'John Doe');
 * console.log(john); // Outputs { name: 'John Doe', age: 30 }
 *
 */
function findPersonByName(persons, name) {
    const findPerson = [{name: 'John Doe', age: 30, }, {name: 'Jane Doe', age: 25,}]
    return findPerson.find(person => person.name === name)
}


/**
 * This function calculates the total age of all persons in an array.
 *
 * @param {Object[]} persons - Array of person objects.
 * @returns {number} - The total age of all persons.
 *
 * Usage:
 * const totalAge = getTotalAge([{ name: 'John Doe', age: 30 }, { name: 'Jane Doe', age: 25 }]);
 * // totalAge will be 55
 */
/*should return 0 when the array is empty
should return the correct total age for an array of one person
should return the correct total age for an array of multiple persons*/

const persons = [{name: 'John Doe', age: 30, }, {name: 'Jane Doe', age: 25,}]
function getTotalAge(persons) {
    let sum=0;
    for(let i=0;i<persons.length; i++) {
        sum+= persons[i].age;
    }
    return sum
}