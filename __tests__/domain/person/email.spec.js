import { Email } from '../../../src/domain/person';

it('Email should be a function', () => {
    expect(typeof Email).toBe('function');
});

it('CPF should detect an invalid "email" value', () => {
    const action = () => new Email('');
    expect(action).toThrow('O campo "E-mail" é obrigatório.');
});

it('Email should detect an invalid email', () => {
    const action = () => new Email('dasdsadsadsa');
    expect(action).toThrow('O e-mail informado é inválido.');
});

it('Email should detect an invalid email 2', () => {
    const action = () => new Email('a@b');
    expect(action).toThrow('O e-mail informado é inválido.');
});

it('Email should detect an invalid email 3', () => {
    const action = () => new Email('a@b.c');
    expect(action).toThrow('O e-mail informado é inválido.');
});

it('Email should have a "value" attribute', () => {
    const emailValue = 'teste@email.com';
    const email = new Email(emailValue);
    expect(email.value).toBe(emailValue);
});