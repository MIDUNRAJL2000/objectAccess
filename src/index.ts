function getNestedValue<T>(obj: T, path: string): any {

    if(typeof obj !== 'object' || obj === null){
        throw new Error('obj is not an object at all and must be non null')
    }
    if(typeof path !== 'string'){
        throw new Error('path should be a string')
    }

    const sections = path.split('.');

    type Key ={
        [key: string] : any
    }

    let keys: Key = obj1

    for(const sec1 of sections ){
        if(typeof keys!=='object' || keys === null || !(sec1 in keys)) {
            return undefined
        }
        keys = keys[sec1]
    }
    return keys
}
type User = {
    address: {
        street: string;
        city: string;
        state: string;
        house: number;

    }
    contacts: {
        type: string;
        value: string
    }[]
}

const obj1: User = {
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

console.log(getNestedValue<User>(obj1,'address.street'))
console.log(getNestedValue<User>(obj1, 'contacts.0.value'));
console.log(getNestedValue<User>(obj1, 'contacts.1.value'));
console.log(getNestedValue<User>(obj1, 'nonexistent.path'))

console.log(getNestedValue<User>(obj1,'address.house'))
