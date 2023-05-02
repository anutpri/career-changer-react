import express from "express";
const webServer = express();
const port = 3001;
const ipAddress = "127.0.0.1";

// code down below
webServer.get("/", (request, response) => {
    response.send("This is root route");
});

webServer.get("/news", (request, response) => {
    const name = [];
    response.json([
        { name: "news 1", detail: "detail 1" },
        { name: "news 2", detail: "detail 2" },
        { name: "news 3", detail: "detail 3" },
      ]);
});

webServer.get("/users", (request, response) => {
    response.json([
        { userId: "mock-id-" },
        { name: "mock-id-2" },
        { name: "mock-id-3" },
      ])
    });

webServer.get("/me", (request, response) => {
    response.json([{
        name: "mock-name",
        role: "user",
        picture: "https://shorturl.at/qtFJM"
      }]);
});
  
webServer.get("/health-check", (request, response) => {
    response.send("This is /health-check route");
});

webServer.listen(port, ipAddress, () => {
  console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
  console.log(`Address: http://${ipAddress}:${port}`);
});


