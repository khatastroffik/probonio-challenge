# probonio-challenge"

This repository is hosting both a **server** and a **client** application.
For this purpose, the root folder is configured using "**NPM workspaces**".

## challenge part-1

the code is maintained in the "**part-1**" branch of the repo.

Setup procedure:

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
```
