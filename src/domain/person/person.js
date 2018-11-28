import { Address, Email, Phone } from '.';
import Entity from '../entity';
import moment from 'moment';

class Person extends Entity {

    /**
     * Pessoa
     * @param {string} name Nome
     * @param {string} lastName Sobrenome
     * @param {string} birthDate Data de Nascimento
     * @param {Email} email Endereço de email
     * @param {Phone} phone Telefone
     * @param {Address} address Endereço
     * @param {string} id Identificador da Pessoa
     */
    constructor(name, lastName, birthDate, email, phone, address, id) {
        super(id);

        if (!name) throw new TypeError('O campo "Nome da Pessoa" é obrigatório.');
        if (!lastName) throw new TypeError('O campo "Sobrenome da Pessoa" é obrigatório.');

        if (!birthDate) throw new TypeError('O campo "Data de Nascimento da Pessoa" é obrigatório.');
        if ((typeof birthDate) !== 'string') throw new TypeError('O campo "Data de Nascimento da Pessoa" deve do tipo string.');
        const bDate = moment(birthDate, 'YYYY-MM-DD');
        if (!bDate.isValid()) throw new TypeError('O campo "Data de Nascimento da Pessoa" deve ser uma data no formato YYYY-MM-DD.');

        if (!email) throw new TypeError('O campo "E-mail da Pessoa" é obrigatório.');
        if (!(email instanceof Email)) throw new TypeError('O campo "E-mail da Pessoa" deve ser do tipo Email.');

        if (!phone) throw new TypeError('O campo "Telefone da Pessoa" é obrigatório.');
        if (!(phone instanceof Phone)) throw new TypeError('O campo "Telefone da Pessoa" deve ser do tipo Phone.');

        if (!address) throw new TypeError('O campo "Endereço da Pessoa" é obrigatório.');
        if (!(address instanceof Address)) throw new TypeError('O campo "Endereço da Pessoa" deve ser do tipo Address.');

        this.name = name;
        this.lastName = lastName;
        this.birthDate = bDate.format();
        this.email = email;
        this.phone = phone;
        this.address = address;
    }

}

export default Person;