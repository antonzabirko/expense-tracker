import * as firebase from 'firebase';
import expenses from '../tests/fixtures/expenses';

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

export { firebase, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
//
// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
//
// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
//
// // const onValueChange = database.ref('expenses')
// //     .on('value', (snapshot) => {
// //         const expenses = [];
// //
// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });
// //
// //         console.log(expenses);
// //     });
//
// // database.ref('expenses').push({
// //     ...expenses[0]
// // });
//
//
//
// // database.ref('notes/-LEb7FWeK6tbYIR_4Ef_').remove();
//
// // database.ref('notes').push({
// //     title: 'Course topics',
// //     body: 'react, angular, python'
// // });
//
// // const onValueChange = database.ref().on('value', (snapshot) => {
// //     const val = snapshot.val();
// //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`)
// // }, (e) => {
// //     console.log('Error: ' + e)
// // });
//
// // const onValueChange = database.ref().on('value', (snapshot) => {
// //     console.log(snapshot.val());
// // }, (e) => {
// //     console.log('Error: ' + e);
// // });
// //
// // setTimeout(() => {
// //     database.ref('age').set(29);
// // }, 3500);
// //
// // setTimeout(() => {
// //     database.ref().off(onValueChange);
// // }, 7000);
// //
// // setTimeout(() => {
// //     database.ref('age').set(30);
// // }, 10000);
//
// // database.ref()
// //     .once('value')
// //     .then((snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val);
// //     })
// //     .catch((err) => {
// //         console.log(err);
// //     });
//
// // database.ref().set({
// //     name: 'Anton Zabirko',
// //     age: 26,
// //     stressLevel: 6,
// //     job: {
// //         title: 'Software Developer',
// //         company: 'Google'
// //     },
// //     location: {
// //         city: 'New York',
// //         country: 'United States'
// //     }
// // }).then(() => {
// //     console.log('Data is saved')
// // }).catch((err) => {
// //     console.log('Error: ' + err);
// // });
// //
// // database.ref('isSingle').remove().then(() => {
// //     console.log('isSingle removed!');
// // }).catch((err) => {
// //     console.log(err);
// // });
// //
// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Seattle'
// // });