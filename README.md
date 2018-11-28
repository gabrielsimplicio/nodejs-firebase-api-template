# nodejs-firebase-api-template

This is a simple API that uses NodeJS and Firebase (Firestore, Cloud functions and Auth).

In this sample project, there is a CRUD of `People`.

## How to start

- clone this repo
- run `yarn`

## Firebase

- create a new firebase project into [Firebase Console](https://console.firebase.google.com)
- Navigate into `Database` menu, and activate firestore.
- Initiate firestore in test mode

## Application

- run `yarn fb.use`
    1) Select the project that you just created.
    2) Type `test` as alias for this project.
    3) You should see the new `.firebaserc` file.
- run `yarn start`

## Endpoints

- GET All: `http://localhost:5000/<MY-APP-ID>/us-central1/api/person`
- GET by ID: `http://localhost:5000/<MY-APP-ID>/us-central1/api/person/<ID>`
- POST: `http://localhost:5000/<MY-APP-ID>/us-central1/api/person`
- PUT: `http://localhost:5000/<MY-APP-ID>/us-central1/api/person/<ID>`
- DELETE: `http://localhost:5000/<MY-APP-ID>/us-central1/api/person/<ID>`

## Person object

In POST method, you can use this object:

```
{
    "address": {
        "street": "rua teste",
        "streetNumber": 123456,
        "district": "Bairro de teste",
        "zipCode": "78787878",
        "city": "Cuiaba",
        "state": "MT"
    },
    "phone": {
        "areaCode": "66",
        "number": "123456789"
    },
    "email": "teste@email.com",
    "name": "Nome de teste",
    "lastName": "Sobrenome de teste",
    "birthDate": "1980-01-01"
}
```

## Deploy

- run `yarn deploy`
- access `https://us-central1-<MY-APP-ID>.cloudfunctions.net/api/person`

## Test

This project uses jest.

- run `yarn test`