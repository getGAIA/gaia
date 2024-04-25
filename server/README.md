
# GAIA Server

## Description

## Features

- Postgres DB to persist data from fetches to reduce network traffic.
- Focus on cyclic complexity to break apart large logic structures.

TODO
- [ ] Add more features

## Usage

You should provide a `.env`ironment with a connection string under the variable `DATABASE_URL`.

Initialize Prisma with `npx prisma init --datasource-provider postgresql` Migrate Models to Database with `npx prisma migrate dev --name init`

To run locally use `npm run dev` in your terminal.

If you change the Models remember to run `npx prisma db push` to update your DB tables.
If you have any issues with prisma, you can run `npx prisma db reset` to get fresh tables.

If you have JSdoc installed globally, use `jsdoc controllers -r -d docs` to update the static html.

## How to Contribute

Please veiw the issues tab or open a discussion for non-listed issues.
Adhere to the [Contributor Covenant](https://www.contributor-covenant.org/)
