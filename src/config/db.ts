
import * as admin from 'firebase-admin';
let db: any;
export const initDatabaseConnection = async (): Promise<any> => {
    if (!db) {
        const serviceAccount = require(process.env.SERVICE_ACCOUNT_KEY);

        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });
        db = admin.firestore();
    }

    return db;
};
