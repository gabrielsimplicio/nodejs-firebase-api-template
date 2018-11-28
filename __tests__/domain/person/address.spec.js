import { Address } from '../../../src/domain/person';

const street = 'Av. Brigadeiro Faria Lima';
const streetNumber = '2927';
const district = 'Itaim';
const zipCode = '01234000';
const city = 'São Paulo';
const state = 'SP';
const additionalInfo = 'Complemento';
const address = new Address(street, streetNumber, district, zipCode, city, state, additionalInfo);

it('address should be a function', () => {
    expect(typeof Address).toBe('function');
});

it('address should detect an invalid "street" value', () => {
    const action = () => new Address('');
    expect(action).toThrow('O campo "Rua" é obrigatório.');
});

it('address should have a "street" attribute', () => {
    expect(address.street).toBeDefined();
    expect(address.street).toBe(street);
});

it('address should detect an invalid "streetNumber" value', () => {
    const action = () => new Address(street, '');
    expect(action).toThrow('O campo "Número", referente ao "Endereço" é obrigatório.');
});

it('address should have a "streetNumber" attribute', () => {
    expect(address.streetNumber).toBeDefined();
    expect(address.streetNumber).toBe(streetNumber);
});

it('address should detect an invalid "district" value', () => {
    const action = () => new Address(street, streetNumber, '');
    expect(action).toThrow('O campo "Bairro" é obrigatório.');
});

it('address should have a "district" attribute', () => {
    expect(address.district).toBeDefined();
    expect(address.district).toBe(district);
});

it('address should detect "zipcode" null values', () => {
    const action = () => new Address(street, streetNumber, district, null);
    expect(action).toThrow('O campo "CEP" é obrigatório.');
});

it('address should detect an invalid "zipCode" value', () => {
    const action = () => new Address(street, streetNumber, district, '7878');
    expect(action).toThrow('O campo "CEP" deve conter 8 números, sem traços ou pontos.');
});

it('address should detect that "zipCode" has characters different of numbers', () => {
    const action = () => new Address(street, streetNumber, district, '78778-00');
    expect(action).toThrow('O campo "CEP" deve conter 8 números, sem traços ou pontos.');
});

it('address should have a "zipCode" attribute', () => {
    expect(address.zipCode).toBeDefined();
    expect(address.zipCode).toBe(zipCode);
});

it('address should detect an invalid "city" value', () => {
    const action = () => new Address(street, streetNumber, district, zipCode, '');
    expect(action).toThrow('O campo "Cidade" é obrigatório.');
});

it('address should have a "city" attribute', () => {
    expect(address.city).toBeDefined();
    expect(address.city).toBe(city);
});

it('address should detect an invalid "state" value', () => {
    const action = () => new Address(street, streetNumber, district, zipCode, city, '');
    expect(action).toThrow('O campo "Estado" é obrigatório.');
});

it('address should detect that "state" has length different of 2', () => {
    const action = () => new Address(street, streetNumber, district, zipCode, city, 'AAA');
    expect(action).toThrow('O campo "Estado" deve conter somente 2 letras, sem traços ou pontos.');
})

it('address should detect that "state" has characters different of letters', () => {
    const action = () => new Address(street, streetNumber, district, zipCode, city, 'a-');
    expect(action).toThrow('O campo "Estado" deve conter somente 2 letras, sem traços ou pontos.');
});

it('address should have a "state" attribute', () => {
    expect(address.state).toBeDefined();
    expect(address.state).toBe(state);
});

it('address should have a "additionalInfo" attribute', () => {
    expect(address.additionalInfo).toBeDefined();
    expect(address.additionalInfo).toBe(additionalInfo);
});