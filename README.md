 # <img src="https://github.com/user-attachments/assets/e91942a7-1180-49b4-a1df-59f26ff382d0" alt="logo" width="35" height="35"> FullStack Inventory Management Dashboard 
![Screenshot (277)](https://github.com/user-attachments/assets/059e602b-a2c9-4ce7-ab39-d7d6575ab970)
A comprehensive Inventory Management Dashboard that provides businesses with a consolidated overview of key metrics and sales performance, enabling a quick and insightful glance at overall business operations.

![GitHub last commit](https://img.shields.io/github/last-commit/rahu1-ku/foot-vault)
![NPM Version](https://img.shields.io/npm/v/next)
![GitHub top language](https://img.shields.io/github/languages/top/rahu1-ku/foot-vault)


## Features






- A comprehensive dashboard displaying all components at a glance.
- Seamless light/dark mode toggle for an enhanced user experience.
- Feature to add items with price and rating details.
- Real time update and retrival using local Api.
- Fully responsive design, optimized for all screen sizes. 

## Pre-requisites 

To install Node.js go to https://nodejs.org/en/download/package-manager

Check and update node to latest version using-

```bash
  npm install npm@latest -g
```

Installing the database postgresql  https://www.postgresql.org/download/

*I would also suggest installing a database manager like pgAdmin4(it is usually installed with it)*



## Run Locally

Clone the project

```bash
  git clone https://github.com/rahu1-ku/foot-vault
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Go to server directory
```bash
  cd server
```
Create the .env file in the server side with the correct database credentials

```bash
  PORT = 8000
  DATABASE_URL="postgresql://postgres:YourPass@localhost:yourPort/YourDatabase?schema=public"
```
Start the server and client

```bash
  npm run dev
```


Live preview at http://localhost:3000/ (on your system)


## Tech tree
![Static Badge](https://img.shields.io/badge/Next%20JS-red) ![Static Badge](https://img.shields.io/badge/Redux%20Toolkit-red) ![Static Badge](https://img.shields.io/badge/Node%20JS-orange) ![Static Badge](https://img.shields.io/badge/Meta%20UI%20Data%20Grid-grey)

![Static Badge](https://img.shields.io/badge/Prisma-blue) ![Static Badge](https://img.shields.io/badge/Redux%20Toolkit%20Query-red200) ![Static Badge](https://img.shields.io/badge/Tailwind-purple) ![Static Badge](https://img.shields.io/badge/Numeral-black)


All components were developed using ![Static Badge](https://img.shields.io/badge/Typescript-purple)
 and integrated into containers, which were then organized into a unified main dashboard. Container divs were styled and aligned using a combination of CSS Grid and Flexbox to achieve the desired layout and appearance. Item cards were dynamically generated based on data received from the API.

For visual representation, graphs and charts were created using ![Static Badge](https://img.shields.io/badge/Recharts-red)
, with API data used to calculate and plot the values. Each component was built and interconnected within the TypeScript files, culminating in a cohesive, fully functional project.

## Data and Database
![Static Badge](https://img.shields.io/badge/JSON-red) ![Static Badge](https://img.shields.io/badge/SQL-red300) ![Static Badge](https://img.shields.io/badge/PostgreSQL-blue) ![Static Badge](https://img.shields.io/badge/Typescript-purple)




This project leverages a structured set of JSON files to manage and store data pertaining to products, including key attributes such as price, stock quantity, and sales details. Additionally, the data covers important company metrics like sales summaries and employee information, allowing for a comprehensive view of operations.

We utilize Prisma, PostgreSQL, pgAdmin4, and TypeScript to handle the compilation, storage, and seeding of this data into the web application. Prisma ORM serves as a bridge between our application and the database, enabling seamless data interactions, such as inserting, updating, and retrieving data, all directly from the website interface.

![DB-1](https://github.com/user-attachments/assets/edb07eb5-f4e5-45b2-a575-0829bbfc336d)

The data structure is defined using Prisma schema, ensuring consistency and ease of access to manipulate data across the system. Here's an example of how product data is modeled within the schema:

```js
model Products {
  productId     String      @id

  name          String
  price         Float
  rating        Float?
  stockQuantity Int
  Sales         Sales[]
  Purchases     Purchases[]
}
```

This model defines products with fields such as productId, name, price, and stockQuantity. It also establishes relationships with Sales and Purchases to track transactions and inventory.

By organizing the data with Prisma schema, we ensure that the JSON files are integrated efficiently, allowing for dynamic updates and modifications to be reflected in real-time within the database. This setup guarantees that both product and company-related data are consistently managed, scalable, and easy to maintain throughout the lifecycle of the project.
## Previews

![Screenshot (284)](https://github.com/user-attachments/assets/3b8810f0-9979-4a30-8d3b-d60166da5257)
![Screenshot (278)](https://github.com/user-attachments/assets/bf9574f8-c509-429e-afd4-9f80b9a9de05)
![Screenshot (280)](https://github.com/user-attachments/assets/0b410819-6d7f-4dee-bfc1-5c321b8a8694)
![Screenshot (281)](https://github.com/user-attachments/assets/274e343a-35be-41a8-81cc-1f97254a3a04)
![Screenshot (283)](https://github.com/user-attachments/assets/5227740f-5518-495e-bb95-db6689613490)
![Screenshot (282)](https://github.com/user-attachments/assets/db9c3271-4290-4f7f-86e1-bd81848d4a59)



