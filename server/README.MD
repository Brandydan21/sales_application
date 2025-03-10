## Endpoints

### SalesPerson
- create salesperson

  Endpoint (POST): ```localhost:4000/salesperson/create```
  request body example: 
  ```
  {"firstName":"Brandy", "lastName":"Dan", "email":"bd@gmail.com", "phoneNumber":"111"}
  ```

- Get all salesperson

  Endpoint (GET): ```localhost:4000/salesperson/```

- Update salesperson

  Endpoint (PUT): ```localhost:4000/salesperson/update```
  request body example: 
  ```
   {
        "id": 1,
        "update_data":{
            "firstName": "Brandy",
            "lastName": "Dan",
            "email": "bd@gmail.com",
            "phoneNumber": "333"
        }
        
    }

- Get single salesperson

  Endpoint (GET): ```localhost:4000/salesperson/1```


