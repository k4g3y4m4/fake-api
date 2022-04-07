const express = require('express');
//use faker
const { faker } = require('@faker-js/faker');
const app = express();
const port = 8000;


class User{
    constructor(){
        this.id = faker.datatype.uuid()
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company{
    constructor(){
        this.id = faker.datatype.uuid()
        this.name = faker.company.companyName();
        this.address = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}

console.log(new User());
console.log(new Company());

app.get("/api/users/new",(req,res)=>{
    res.json(new User());
});

app.get("/api/companies/new",(req,res)=>{
    res.json(new Company());
});

//Crea una ruta api "/api/user/company" que devuelva tanto un nuevo usuario como una nueva compañía
app.get("/api/user/company",(req,res)=>{
    res.json({
        user: new User(),
        company: new Company()
    });
});


const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);