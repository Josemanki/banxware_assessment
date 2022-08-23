# Banxware Flowchart Assessment

Small charting application made as part of the interview process for an internship in Banxware.

## Running in your environment

---

1. Install the dependencies by running

```bash
  $ yarn
```

2. Rename `.env.local.template` to `.env.local` and fill out with Banxware's authorization token.

3. Enter the dev server with

```bash
$ yarn dev
```

4. The application can be tested by running

```bash
$ yarn test
```

## Tools used for the task

---

The application was made using Next.js and Typescript. The chart was possible using Chart.js line charts.

Testing was done using Jest and React Testing Library.

## Features

---

- The application initially makes a request to Banxware's balance and transactions API endpoints.
- Processes and formats the obtained data using specific user-selected timeframes.
- Plots the data using Chart.js.
