## startup client

```
$ cd client 
$ nvm install 
$ nvm use
$ npm install
```
### npm client scripts

```
"scripts": {
  "dev": "vite",  // Starts the Vite development server with hot module replacement (HMR) for fast development.
  "build": "tsc -b && vite build",  // Compiles TypeScript files and builds the app for production using Vite.
  "lint": "eslint .",  // Lints the codebase to ensure code quality and adherence to ESLint rules.
  "preview": "vite preview"  // Serves the production build locally to preview the app before deployment.
}
```


## startup server
```
$ cd server 
$ nvm install 
$ nvm use
$ npm install
$ npm run start
```

### npm server scripts
```
{
  "scripts": {
    "start": "ts-node src/app.ts",         // Run the TypeScript code directly
    "build": "tsc",                        // Compile TypeScript to JavaScript
    "dev": "nodemon --exec ts-node src/app.ts"  // Auto-restart server on file changes
  }
}
```
post_db run
```
podman run -d \
  --name postgres_container \
  -e POSTGRES_USER=myuser \
  -e POSTGRES_PASSWORD=bd1234 \    
  -e POSTGRES_DB=mydatabase \
  -v pg_data:/var/lib/postgresql/data \
  -p 5432:5432 \
  docker.io/library/postgres:17.3  
```