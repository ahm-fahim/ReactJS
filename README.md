# ReactJS

# Installation

## Create project

```
npm create vite@latest my-app -- --template react
```

## Install react router

```
npm install react-router-dom
npm install localforage match-sorter sort-by
```

### Add in the 'main.jsx' file

```
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

```

## Install tailwind css

```
npm install -D tailwindcss
npx tailwindcss init

```

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Add on 'index.css' file

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Install daisyUI
```
npm i -D daisyui@latest
```
### Add on 'tailwind.config.js'
```
module.exports = {
  //...
  plugins: [
    require('daisyui'), // add this line on tailwind.config.js
  ],
}

```

## Add custom font family on 'index.css'

```
/* poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

/* anton  */
@import url('https://fonts.googleapis.com/css2?family=Anton+SC&display=swap');

.font-poppins{
    font-family: "Poppins", sans-serif;
}
.font-anton{
    font-family: "Anton SC", sans-serif;
}
```

# Install React Icons

```
npm install react-icons --save
```

## In your 'eslint.config.js' file ;

```
env: {
   browser: true,
   node: true,    <<<<--- Add this
   es6: true
 },
```
# -----------------------------------------
##              Firebase setup 
# -----------------------------------------

```
npm install firebase
``


# Some projects on live

[Food Park](simple-bell.surge.sh)
[Knowledge Park](calculating-bell.surge.sh)

[Career Park](weak-texture.surge.sh)

[News Park](https://news-park-f91bb.web.app/)
