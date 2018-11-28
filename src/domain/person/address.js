class Address {

    /**
     * Endereço
     * @param {string} street Rua
     * @param {string} streetNumber Número
     * @param {string} district Bairro
     * @param {string} zipCode CEP
     * @param {string} city Cidade
     * @param {string} state Estado (duas letras)
     * @param {string} additionalInfo Complemento
     */
    constructor(street, streetNumber, district, zipCode, city, state, additionalInfo) {
        if (!street) throw new TypeError('O campo "Rua" é obrigatório.');
        if (!streetNumber) throw new TypeError('O campo "Número", referente ao "Endereço" é obrigatório.');
        if (!district) throw new TypeError('O campo "Bairro" é obrigatório.');

        if (!zipCode) throw new TypeError('O campo "CEP" é obrigatório.');
        if (zipCode.length != 8) throw new TypeError('O campo "CEP" deve conter 8 números, sem traços ou pontos.');
        if (!/^\d+$/.test(zipCode)) throw new TypeError('O campo "CEP" deve conter 8 números, sem traços ou pontos.');

        if (!city) throw new TypeError('O campo "Cidade" é obrigatório.');

        if (!state) throw new TypeError('O campo "Estado" é obrigatório.');
        if (state.length != 2) throw new TypeError('O campo "Estado" deve conter somente 2 letras, sem traços ou pontos.');
        if (!/^[a-zA-Z]+$/.test(state)) throw new TypeError('O campo "Estado" deve conter somente 2 letras, sem traços ou pontos.');

        this.street = street;
        this.streetNumber = streetNumber;
        this.district = district;
        this.zipCode = zipCode;
        this.city = city;
        this.state = state;
        this.additionalInfo = additionalInfo;
        this.country = 'BRA';
    }

}

export default Address;