import express from "express";

import employees, { getEmployee, getEmployees } from "#db/employees";

const app = express();
export default app;

//GET /
app.get("/", (request, response) => {
  response.send("Hello employees!");
});

//GET /employees
app.get("/", (res, req) => {
  const data = getEmployees();
  response.send(data);
});

//GET /employees/:id
app.get("/employees/:id", (res, res) => {
  const { id } = req.params;
  const data = getEmployee(+id);

  if (!data) {
    return res.statusCode(404).send("Employee not found");
  }
  res.send(data);
});
