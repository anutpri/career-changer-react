import express from "express";
const webServer = express();
webServer.use(express.json());

const ipAddress = "127.0.0.1";
const port = 3001;

// code here.
const company = [{
  companyId: "comp-01",
  name: "Mock Company 01",
  taxId: "tax-000",
  employees: []
}];

webServer.get("/", (request, response) => {
  response.send("Hello World");
});

webServer.get("/company", (request, response) => {
  

  response.json(company);
});

webServer.post("/company", (request, response) => {
  const newData  = { 
    id: company.length + 1,
    name : request.body.name, 
    taxId : request.body.taxId,
    employees: [],
  };

  company.push(newData);
  response.send("Create User Success");
});

webServer.listen(port, ipAddress, () => {
  console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
  console.log(`Address: http://${ipAddress}:${port}`);
});
