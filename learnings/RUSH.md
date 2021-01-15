<h2>NodeJS</h2>

make sure node version is 12.19.1 (rush need specific version)

<h2>Rush</h2>

Install rush globally:

```
npm install -g @microsft/rush
```

Without any folder in root directory run:

```
rush init
```

<p>This generates couple of files and a common folder; if interested more on these files go to: <a href="https://rushjs.io/pages/maintainer/setup_new_repo/">rush website</a></p>

Next, create folder and configure package.json and tsconfig.json. Add this project to the rush.json file in root.

Use following to create package.json (if needed)
```
npm init
```

Install all the package dependencies with
```
rush update
```

Build the package with
```
rush build
```

Run the package with (from the package folder)
```
rushx start
```