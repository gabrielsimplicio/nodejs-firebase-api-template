import uuidV4 from 'uuid/v4';

class Entity {

    /**
     * Representa uma entidade
     * @param {string} id Identificador da Entidade
     */
    constructor(id) {
        this.id = !id ? uuidV4() : id;
    }

}

export default Entity;