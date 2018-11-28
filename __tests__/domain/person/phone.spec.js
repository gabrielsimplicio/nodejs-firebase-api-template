import { Phone } from '../../../src/domain/person';

const areaCode = '65';
const number = '999998888';
const phone = new Phone(areaCode, number);

it('Phone should be a function', () => {
    expect(typeof Phone).toBe('function');
});

it('Phone should detect an invalid "areaCode" value', () => {
    const action = () => new Phone('');
    expect(action).toThrow('O campo "DDD" é obrigatório.');
});

it('Phone should detect lengths different of 2 to "areaCode" field', () => {
    const action = () => new Phone('555');
    expect(action).toThrow('O campo "DDD" deve conter 2 dígitos.');
});

it('Phone should detect invalid "areaCode" characters', () => {
    const action = () => new Phone('ab');
    expect(action).toThrow('O campo "DDD" deve conter somente números.');
});

it('Phone should have a "areaCode" attribute', () => {
    expect(phone.areaCode).toBe(areaCode);
});

it('Phone should detect an invalid "number" value', () => {
    const action = () => new Phone(areaCode, '');
    expect(action).toThrow('O campo "Número do Telefone" é obrigatório.');
});

it('Phone should detect lengths different of 8 or 9 to "number" field', () => {
    const action = () => new Phone(areaCode, '99');
    expect(action).toThrow('O campo "Número do Telefone" deve conter 8 ou 9 dígitos.');
});

it('Phone should detect invalid "number" characters', () => {
    const action = () => new Phone(areaCode, '9999-8888');
    expect(action).toThrow('O campo "Número do Telefone" deve conter somente números.');
});

it('Phone should have a "number" attribute', () => {
    expect(phone.number).toBe(number);
});