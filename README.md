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

Run postgres database in podman container
```
podman run --name postgres -e POSTGRES_USER=devuser -e POSTGRES_PASSWORD=password -p 5432:5432 -v $PWD/database:/var/lib/postgresql/data -d postgres:17.3
```

After running database run the initial migration
initial migration
```
 npx prisma migrate dev --name init
```


