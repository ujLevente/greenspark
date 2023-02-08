# Green Spark

## How to run

- Installing dependencies 
```console
 cd frontend && yarn && cd ../backend && yarn
```
- Running unit tests 
```console
 cd ../backend && yarn test
```
- Running e2e tests 
```console
 cd ../backend && yarn test:e2e
```
- Running the app (dev mode)
```console
 cd ../backend && yarn dev
 cd ../frontend && yarn dev
```

## Frontend

### Folder structure

1. **src/api:**
- contains the functions for interacting with the api and the types for dtos
- it was cleaner to create a seperate file for the functions that are passed to the TanStack Query api
2. **src/features:** 
- contains the product feature (components, hooks)
- I decided use optimistic update, because there is no form for submitting the changes, so the changes should reflect realtime
3. **src/theme:** 
- js modules for custom material ui theme
- the component.ts holds the design overwrite for components which should globally have one consistent design (for example a checkbox).


### Technologies used

-  **TanStack Query:** I decided to use this server-state library instead of reqular react state, because it has good support for optimistic updating
-  **Material UI:** component library


## Backend


### Folder structure

1. **src/data:**
- I tried to simulate a seperate data layer, so I put the data provider in this seperate folder
- ProductProviderMemory implements the ProductProvider interface this way depencdency inversion can be present
2. **src/product:**
- contains the product module (unit test, service, controller, dto)
- I created a seperate ProductService even though it has no extra functionality it just calls the methods of the ProductProvider and returns the values
3. **test:**
- contains the e2e test and the productStub used by unit tests.
- for e2e tests I did not mocked the ProductProvider, because the application is not connected to a database

### Technologies used

-  **Jest**
-  **NestJS** 



