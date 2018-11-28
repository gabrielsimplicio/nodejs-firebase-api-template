class Phone {

    /**
     * Telefone
     * @param {string} areaCode DDD - Código do Estado
     * @param {string} number Número do Telefone
     */
    constructor(areaCode, number) {
        if (!areaCode) throw new TypeError('O campo "DDD" é obrigatório.');
        if (areaCode.length != 2) throw new TypeError('O campo "DDD" deve conter 2 dígitos.');
        if (!/^\d+$/.test(areaCode)) throw new TypeError('O campo "DDD" deve conter somente números.');

        if (!number) throw new TypeError('O campo "Número do Telefone" é obrigatório.');
        if (number.length != 8 && number.length != 9) throw new TypeError('O campo "Número do Telefone" deve conter 8 ou 9 dígitos.');
        if (!/^\d+$/.test(number)) throw new TypeError('O campo "Número do Telefone" deve conter somente números.');

        this.countryCode = '55';
        this.areaCode = areaCode;
        this.number = number;
    }
}

export default Phone;