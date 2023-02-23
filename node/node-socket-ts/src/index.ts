import express, { NextFunction, Request, Response } from "express";

const app = express()

app.get('/main', (request: Request, response: Response, next: NextFunction) => {
  response.send("Hello World!")
})

app.listen('8808', () => {
  console.log(` 
  ################################################
  🛡️  Server listening on port: http://localhost:1234 🛡️
  🛡️  welcome listening on port: http://localhost:1234/welcome 🛡️
  ################################################
`)
})