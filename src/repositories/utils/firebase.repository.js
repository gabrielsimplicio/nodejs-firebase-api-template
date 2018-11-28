import * as admin from 'firebase-admin';

class FirebaseRepository {

    constructor(collection) {
        let defaultApp;

        if (!admin.apps.length) {
            defaultApp = admin.initializeApp();
            defaultApp.firestore().settings({ timestampsInSnapshots: true });
        } else {
            defaultApp = admin.app();
        }

        this.db = defaultApp.firestore();
        this.collection = collection;
        this.firebaseCollection = this.db.collection(collection);
    }

    async getById(id) {
        const response = await this.firebaseCollection
            .where('id', '==', id)
            .get();

        if (response.empty) {
            return null;
        }

        return this.processFirebaseResponse(response)[0];
    }

    async set(item) {
        await this.db
            .doc(`${this.collection}/${item.id}`)
            .set(JSON.parse(JSON.stringify(item)));
    }

    async delete(id) {
        await this.db
            .doc(`${this.collection}/${id}`)
            .delete();
    }

    processFirebaseResponse(response) {
        return response.docs.map(itemRef => itemRef.data());
    }

}

export default FirebaseRepository;