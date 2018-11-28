import { Person, Address, Email, Phone } from '../../../src/domain/person';
import moment from 'moment';

const name = 'Name';
const lastName = 'Random 9123';
const birthDate = '1990-01-01';
const email = new Email('teste@email.com');
const phone = new Phone('65', '999998888');
const address = new Address('street', 'streetNumber', 'district', '78978977', 'city', 'MT');
const person = new Person(name, lastName, birthDate, email, phone, address);

it('person should be a function', () => {
    expect(typeof Person).toBe('function');
});

it('person should detect an invalid "name" value', () => {
    const action = () => new Person('');
    expect(action).toThrow('O campo "Nome da Pessoa" é obrigatório.');
});

it('person should have a "name" attribute', () => {
    expect(person.name).toBeDefined();
    expect(person.name).toBe(name);
});

it('person should detect an invalid "lastName" value', () => {
    const action = () => new Person(name, '');
    expect(action).toThrow('O campo "Sobrenome da Pessoa" é obrigatório.');
});

it('person should have a "lastName" attribute', () => {
    expect(person.lastName).toBeDefined();
    expect(person.lastName).toBe(lastName);
});

it('person should detect an invalid "birthDate" value', () => {
    const action = () => new Person(name, lastName, '');
    expect(action).toThrow('O campo "Data de Nascimento da Pessoa" é obrigatório.');
});

it('person should detect that "birthDate" is string', () => {
    const action = () => new Person(name, lastName, new Date());
    expect(action).toThrow('O campo "Data de Nascimento da Pessoa" deve do tipo string.');
});

it('person should detect that "birthDate" is an invalid Date', () => {
    const action = () => new Person(name, lastName, 'stringQualquer');
    expect(action).toThrow('O campo "Data de Nascimento da Pessoa" deve ser uma data no formato YYYY-MM-DD.');
});

it('person should have a "birthDate" attribute', () => {
    expect(person.birthDate).toBeDefined();
    const dateComparison = moment(birthDate, 'YYYY-MM-DD').format();
    expect(person.birthDate).toBe(dateComparison);
});

it('person should detect an invalid "email" value', () => {
    const action = () => new Person(name, lastName, birthDate, '');
    expect(action).toThrow('O campo "E-mail da Pessoa" é obrigatório.');
});

it('person should detect that "email" is typeof Email', () => {
    const action = () => new Person(name, lastName, birthDate, 'email@email.com');
    expect(action).toThrow('O campo "E-mail da Pessoa" deve ser do tipo Email.');
});

it('person should have a "email" attribute', () => {
    expect(person.email).toBeDefined();
    expect(person.email).toBe(email);
});

it('person should detect an invalid "phone" value', () => {
    const action = () => new Person(name, lastName, birthDate, email, '');
    expect(action).toThrow('O campo "Telefone da Pessoa" é obrigatório.');
});

it('person should detect that "phone" is typeof Phone', () => {
    const action = () => new Person(name, lastName, birthDate, email, '65456456');
    expect(action).toThrow('O campo "Telefone da Pessoa" deve ser do tipo Phone.');
});

it('person should have a "phone" attribute', () => {
    expect(person.phone).toBeDefined();
    expect(person.phone).toBe(phone);
});

it('person should detect an invalid "address" value', () => {
    const action = () => new Person(name, lastName, birthDate, email, phone, null);
    expect(action).toThrow('O campo "Endereço da Pessoa" é obrigatório.');
});

it('person should detect that "address" is typeof Address', () => {
    const action = () => new Person(name, lastName, birthDate, email, phone, 'dsdasd');
    expect(action).toThrow('O campo "Endereço da Pessoa" deve ser do tipo Address.');
});

it('person should have a "address" attribute', () => {
    expect(person.address).toBeDefined();
    expect(person.address).toBe(address);
});