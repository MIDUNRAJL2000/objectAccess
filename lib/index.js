"use strict";
function getNestedValue(obj, path) {
    if (typeof obj !== 'object' || obj === null) {
        throw new Error('obj is not an object at all and must be non null');
    }
    if (typeof path !== 'string') {
        throw new Error('path should be a string');
    }
    const sections = path.split('.');
    let keys = obj1;
    for (const sec1 of sections) {
        if (typeof keys !== 'object' || keys === null || !(sec1 in keys)) {
            return undefined;
        }
        keys = keys[sec1];
    }
    return keys;
}
const obj1 = {
    address: {
        street: '123 Main St',
        city: 'bostton',
        state: 'USA',
        house: 12
    },
    contacts: [
        {
            type: 'email',
            value: 'test@example.com'
        }
    ]
};
console.log(getNestedValue(obj1, 'address.street'));
console.log(getNestedValue(obj1, 'contacts.0.value'));
console.log(getNestedValue(obj1, 'contacts.1.value'));
console.log(getNestedValue(obj1, 'nonexistent.path'));
console.log(getNestedValue(obj1, 'address.house'));
