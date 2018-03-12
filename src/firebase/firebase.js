import * as firebase from 'firebase';
import moment from 'moment';

const config = {
  apiKey: "AIzaSyDrtjhlzGe8p2EC6wiY4IWsncLlbRFL3dg",
  authDomain: "expensify-5b7e9.firebaseapp.com",
  databaseURL: "https://expensify-5b7e9.firebaseio.com",
  projectId: "expensify-5b7e9",
  storageBucket: "expensify-5b7e9.appspot.com",
  messagingSenderId: "993430400439"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });
// //     console.log(expenses);
// //   });

// // database.ref('expenses').on('value', (snapshot) => {
// //   const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });
// //     console.log(expenses);
// // });

// database.ref('expenses').push({
//     description: 'Gum',
//     note: '',
//     amount: 195,
//     createdAt: 0
//   }
// );


// // database.ref('notes/-L7NHof4rA74B3ckZYlU').update({
// //   title: 'New title',
// //   body: 'New Body'
// // });

// // database.ref('notes').push({
// //   title: 'Course Topics',
// //   body: 'React Native, Angular, Python'
// // });


// // const firebaseNotes = {
// //   notes: {
// //     apoijasdf: {
// //       title: 'First note!',
// //       body: 'This is my note'
// //     },
// //     aspoasdf: {
// //       title: 'Another note',
// //       body: 'This is my note'
// //     }
// //   }
// // };

// // const notes = [{
// //   id: '12',
// //   title: 'First note!',
// //   body: 'This is my note'
// // }, {
// //   id: '761ase',
// //   title: 'Another note',
// //   body: 'This is my note'
// // }];

// // database.ref('notes').set(notes);

// // database.ref('location/city')
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch((e) => {
// //     console.log('Error fecthing data', e);
// //   });

// // database.ref().set({
// //   name: 'Daniel Waters',
// //   age: 38,
// //   isSingle: false,
// //   location: {
// //     city: 'Santa Clara',
// //     country: 'United States'
// //   }
// // }).then(() => {
// //   console.log('Data is saved');
// // }).catch((e) => {
// //   console.log('This failed.', e);
// // });

// // database.ref('isSingle').remove();

