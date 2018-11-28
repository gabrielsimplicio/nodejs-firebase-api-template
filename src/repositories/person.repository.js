import FirebaseRepository from './utils/firebase.repository';

class PersonRepository extends FirebaseRepository {

    constructor() {
        super('people');
    }

    async getAll() {
        const response = await this.firebaseCollection.get();
        return this.processFirebaseResponse(response);
    }

}

export default new PersonRepository();