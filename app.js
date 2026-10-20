import express from "express";

import {
  employees,
  getEmployee,
  getEmployees,
  getRandomEmployee,
} from "#db/employees";

const app = express();
export default app;

//GET /
app.get("/", (request, response) => {
  response.send("Hello employees!");
});

//GET /employees
app.get("/employees", (request, response) => {
  const employees = getEmployees();
  response.send(employees);
});

app.get("/employees/random", (req, res) => {
  const employee = getRandomEmployee();
  res.send(employee);
});

//GET /employees/:id
app.get("/employees/:id", (req, res) => {
  const { id } = req.params;
  const data = getEmployee(Number(id));

  if (!data) {
    return res.status(404).send("Employee not found");
  }
  res.send(data);
});
