# Expense Tracker 

[![Build Status](https://travis-ci.org/antonzabirko/expense-tracker.svg?branch=master)](https://travis-ci.org/antonzabirko/expense-tracker)
[![Coverage Status](https://coveralls.io/repos/github/antonzabirko/expense-tracker/badge.svg?branch=master)](https://coveralls.io/github/antonzabirko/expense-tracker?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/antonzabirko/expense-tracker/badge.svg)](https://snyk.io/test/github/antonzabirko/expense-tracker)
 
ExpenseMap is a tiny budget management app created to demonstrate the power of React:Redux.

## Features

* **Add/Edit/Remove Expenses:** Expenses can be added, edited, and removed.
* **Filter by date, by amount, or by a date range:** Expenses can be filtered by the date they were created in or by the amount of the expense (in descending order). An additional, parallel filter can be applied to show expenses within a range of dates.
* **Search:** Expenses can be searched by description.
* **Overview of Filtered Expenses:** An overview of expenses is given at all times. The overview includes the number of currently visible expenses and their total value.

Created with React using Redux alongside [Andrew Mead](https://twitter.com/andrew_j_mead?lang=en)'s course.
 
Please note that the github code is *nightly*, and the Heroku deploy is *versioned*. If you want the latest features: pull, compile, and run `node server/server.js`.
 
[expensemap.herokuapp.com](https://expensemap.herokuapp.com)
