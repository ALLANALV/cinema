class Person {
    constructor(name, age, cpf) {
        this._name = name;
        this._age = age;
        this._cpf = cpf;
    }

    get name() {
        return this._name
    }
    set name(valueName) {
        if (isNaN(valueName)) {
            this._name = valueName
        }
    }

    get age() {
        return this._age
    }
    set age(valueAge) {
        if (!isNaN(valueAge)) {
            this._age = valueAge
        }
    }

    get cpf() {
        const format = this._cpf.split('');
        format.forEach((value, index) => {
            if (index === 3 || index === 7) {
                format.splice(index, 0, '.')
            }
        });
        format.forEach((value, index) => {
            if (index === 11) {
                format.splice(index, 0, '-')
            }
        })

        return format.join('')
    }
    set cpf(valueCPF) {
        if (!isNaN(valueCPF) && valueCPF.length === 11 || valueCPF === 14) {
            this._cpf = valueCPF
        }
    }
}

export { Person };