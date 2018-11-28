import admin from 'firebase-admin';

const auth = async (req, res, next) => {
    try {
        await admin.auth().verifyIdToken(req.headers.authorization);
        next();
    } catch (e) {
        res.sendStatus(401);
    }
}

export default auth;