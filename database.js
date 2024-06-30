import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('myDatabase.db');

export const createTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT
      );`
    );
  });
};

export const insertUser = (name, email) => {
  db.transaction(tx => {
    tx.executeSql('INSERT INTO users (name, email) values (?, ?)', [name, email]);
  });
};

export const getUsers = (setUsers) => {
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM users', [], (_, { rows }) => {
      setUsers(rows._array);
    });
  });
};

export default db;
