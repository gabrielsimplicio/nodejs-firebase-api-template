import Entity from '../../src/domain/entity';
import validate from 'uuid-validate';

it('entity should be a function', () => {
    expect(typeof Entity).toBe('function');
});

it('entity should have an id', () => {
    const entity = new Entity('Identificador');
    expect(entity.id).toBe('Identificador');
});

it('entity should have an valid id', () => {
    const entity = new Entity();
    const idValid = validate(entity.id);
    expect(idValid).toBeTruthy();
});