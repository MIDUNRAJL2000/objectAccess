"use strict";
function getNestedValue(obj, path) {
    if (typeof obj !== 'object' || obj === null) {
        throw new Error('obj is not an object at all and must be non null');
    }
    if (typeof path !== 'string') {
        throw new Error('path should be a string');
    }
    if (path.trim().length === 0) {
        throw new Error('path cannot be empty');
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
    user: {
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
    }
};
console.log(getNestedValue(obj1, 'user.address.street'));
console.log(getNestedValue(obj1, 'user.contacts.0.value'));
console.log(getNestedValue(obj1, 'user.contacts.1.value'));
console.log(getNestedValue(obj1, 'nonexistent.path'));
console.log(getNestedValue(obj1, 'user.address.house'));
try {
    getNestedValue(obj1, '');
}
catch (e) {
    console.log(e.message);
}
try {
    getNestedValue(obj1, 123);
}
catch (e) {
    console.log(e.message);
}
