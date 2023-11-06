# BrewLabs LLC

## Nodejs Backend Developer Challenge

##### Instruction to Setup & Install

---

- Clone the Repository:

```cmd
git clone https://github.com/dhavalveera/brewlabs-llc-nodejs-dev-task.git
```

- then move or change into the clone directory by:

```cmd
cd brewlabs-llc-nodejs-dev-task
```

- then Install the packages by running following command:

```cmd
npm install
```

or

```cmd
yarn
```

- and you'll need to create an env file in the root of the project and name is as `env.development`
- and in the `.env.development` add the following line:

```
DB_URL='MONGODB_DB_URI'

# BACKEND SERVER
NODE_ENVIRONMENT='development'
SERVER_PORT= 5000
```

- once all this done, you can simply run the server by below command:

```cmd
npm run dev
```

##### API EndPoints & Usage

---

`POST` -> `/api/v1/books/create`

- The API End Point is to create the Book & following is the body for POST Method:
  - title (string)
  - author (string)
  - summary (string)
- Response `201` || `500`

`GET` -> `/api/v1/books/all`

- The API End Point is to Get All the Books and it's a GET Method and no Params or anything is required.
- Response
  - `200` with the Array of Objects which contains Book Details
  - `404` No Books Found

`GET` -> `/api/v1/books/:booksid/detail`

- The API End Point is to fetch the single book based on ID & it's an GET Method
- Response
  - `200` with the Book Details
  - `404` No Books Found

`PATCH` -> `/api/v1/books/:booksid/patch`

- The API End Point is used to update the book based on ID & it's an PATCH Method and below the body:
  - title (string)
  - author (string)
  - summary (string)
- Response
  - `200` with the Book Details
  - `404` No Books Found

`DELETE` -> `/api/v1/books/:booksid/delete`

- The API End Point is used to delete the book based on ID & it's an DELETE Method and no body is required.
- Response
  - `200` with the Book Details
  - `500` Internal Server Error
