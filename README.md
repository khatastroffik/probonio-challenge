# probonio-challenge

This repository is hosting both a **server** and a **client** application.
For this purpose, the root folder is configured using "**NPM workspaces**".

## challenge part-1 - IMPLEMENTATION COMPLETED

the code is maintained in the "**part-1**" branch of the repo.

Initial Setup procedure:

```shell
git checkout -b part-1

echo add a suitable .gitignore file in the root folder...

echo initiate a nest.js application
npx @nestjs/cli@latest new server

echo add "server" to the list of workspaces in the root package.json...

echo now it's time to remove .git and node_modules folder from server folder
rm -r server/.git
rm -r server/node_modules

echo reinstall all packages (into the node_modules folder at the root level)
npm install --workspace=server

echo check if everything is fine
cd server
npm start

echo time to commit...

npx @nestjs/cli@latest generate res api

echo end of initial setup
```

Important: `npm start` need to be called in order to finalize the creation of the data rows in the DB!

- The temporary code (fetch from external API + bulkcreate) may now be deleted.
- The server can be tested using: `http://localhost:3000/` and `http://localhost:3000/api/v1/apis`

## challenge part-2

the code is maintained in the "**part-2**" branch of the repo.

Initial Setup procedure:

```shell
git checkout -b part-2

echo from the root folder...
cd ..

echo generate a react client app
npm create parcel react-client client

echo add "client" to the list of workspaces in the root package.json...
echo now it's time to remove .git and node_modules folder from client folder
rm -r client/.git
rm -r client/node_modules

echo reinstall all packages (into the node_modules folder at the root level)
npm install --workspace=client

echo add tanstack-query
npm install @tanstack/react-query --workspace=client

echo check if everything is fine
cd client
npm start

```
