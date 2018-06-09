import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDPLqlb7K6DvSMx3sF62IBtQ8tk47YHuQc",
    authDomain: "expensemap-f84b7.firebaseapp.com",
    databaseURL: "https://expensemap-f84b7.firebaseio.com",
    projectId: "expensemap-f84b7",
    storageBucket: "expensemap-f84b7.appspot.com",
    messagingSenderId: "647345373851"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
    name: 'Anton Zabirko',
    age: 26,
    isSingle: true,
    location: {
        city: 'New York',
        country: 'United States'
    }
});

// database.ref().set('This is my data');

database.ref('age').set(27);
database.ref('location/city').set('Philadelphia');

database.ref('attributes').set({
    height: 75,
    weight: 185
});