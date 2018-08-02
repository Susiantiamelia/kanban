import {initializeApp}from 'firebase'

const firebaseApp = initializeApp ({
    apiKey: "AIzaSyAchhtaKeRkDjgPlW_JAgvEzCHrptQE7I8",
    authDomain: "kanban-wa222.firebaseapp.com",
    databaseURL: "https://kanban-wa222.firebaseio.com",
    projectId: "kanban-wa222",
    storageBucket: "kanban-wa222.appspot.com",
    messagingSenderId: "913997765746"
  });

  // Get a reference to the database service
  export const db = firebaseApp.database()
  export const ref = db.ref('tasks')