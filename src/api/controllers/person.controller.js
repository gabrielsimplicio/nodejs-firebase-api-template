import { personRepository } from '../../repositories';
import { Address, Person, Email, Phone } from '../../domain/person';

class PersonController {

    async getAll() {
        return await personRepository.getAll();
    }

    async getById(id) {
        return await personRepository.getById(id);
    }

    async create(personDto) {
        const newPerson = this.parse(personDto);
        await personRepository.set(newPerson);
        return newPerson.id;
    }

    async update(id, personDto) {
        const existingPerson = await personRepository.getById(id);
        if (!existingPerson) throw new Error('Pessoa não encontrada.');

        const newPerson = Object.assign({}, existingPerson, personDto);
        newPerson.id = id;

        await personRepository.set(this.parse(newPerson));
    }

    async delete(id) {
        const existingPerson = await personRepository.getById(id);
        if (!existingPerson) throw new Error('Pessoa não encontrada.');

        await personRepository.delete(id);
    }

    parse(personDto) {
        if (!personDto) throw new Error('Os dados da pessoa são obrigatórios.');
        if (!personDto.address) throw new Error('O endereço da pessoa é obrigatório.');
        if (!personDto.phone) throw new Error('O telefone da pessoa é obrigatório.');

        const { name, lastName, birthDate, email, phone, address, id } = personDto;
        const { areaCode, number } = phone;
        const { street, streetNumber, district, zipCode, city, state, additionalInfo } = address;

        const personEmail = new Email(email);
        const personPhone = new Phone(areaCode, number);
        const personAddress = new Address(street, streetNumber, district, zipCode, city, state, additionalInfo);

        return new Person(name, lastName, birthDate, personEmail, personPhone, personAddress, id);
    }

}

export default new PersonController();