class Email {

    /**
     * E-mail
     * @param {string} value Valor correspondente ao e-mail
     */
    constructor(value) {
        if (!value) throw new TypeError('O campo "E-mail" é obrigatório.');
        if (!this.validateEmail(value)) throw new TypeError('O e-mail informado é inválido.');

        this.value = value;
    }

    validateEmail(value) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(value);
    }
}

export default Email;