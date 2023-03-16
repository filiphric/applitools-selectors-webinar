import * as path from 'path';
import * as fs from 'fs';

const dbPath = path.resolve('./trello-app/backend/data/database.json')

export const seedDb = () => {

  const data = {
    "boards": [
      {
        "name": "My Shopping",
        "user": 0,
        "starred": false,
        "created": "2023-03-15",
        "id": 1
      }
    ],
    "cards": [
      {
        "order": 0,
        "boardId": 1,
        "listId": 1,
        "name": "Milk",
        "created": "2023-03-15",
        "deadline": "2023-03-18",
        "description": "",
        "completed": false,
        "id": 1
      },
      {
        "order": 0,
        "boardId": 1,
        "listId": 2,
        "name": "Soap",
        "created": "2023-03-15",
        "deadline": "2023-03-18",
        "description": "",
        "completed": false,
        "id": 2
      },
      {
        "order": 1,
        "boardId": 1,
        "listId": 1,
        "name": "Bread",
        "created": "2023-03-15",
        "deadline": "2023-03-18",
        "description": "",
        "completed": false,
        "id": 3
      }
    ],
    "lists": [
      {
        "boardId": 1,
        "name": "Groceries",
        "order": 0,
        "created": "2023-03-15",
        "id": 1
      },
      {
        "boardId": 1,
        "name": "Drugstore",
        "order": 1,
        "created": "2023-03-15",
        "id": 2
      }
    ],
    "users": []
  }

  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2))

  return data;

};