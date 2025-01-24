// Chapter-1 (Inception)
// -----------------------

//with javascript
<html>
  <head>
    <title>Hello, World!</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1 class="title">Hello World! </h1>
    <p id="currentTime"></p>
  </body>
  <script>
    let nChild=document.createElement('h1')
      nChild.innerHTML='Hello)))'
      let dd=document.getElementById('currentTime')
      dd.appendChild(nChild)
    </script>
</html>;

//with react
<html>
  <head>
    <title>Hello, World!</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
   <div id="root">
   <h1 class="title">Hello World! </h1>
   <p id="currentTime"></p>
   </div>
  </body>
  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script>
   const heading=React.createElement("h1",{},"NamasteReact")
   const root=ReactDom.createRoot(document.getElementById('root'))
   root.render(root)
  </script>
</html>;

//diff btwn async and defer

// Parcel
// Parsel is bundler. used to budle the prod=ject it also does image optimization, caching while development, clean our code , Dev and production build, compatilbe with older version of browser, hot module reloading, https in Dev, manages port number is execute two app in same time, we should put .parser-cache include in .gitignore, transitive dependency, TreeShaking- Removing unwanted Code, componetCompositions

// JSX is not mandatory. ES6 is also not mandatory.

// JSX only have one parenet if i didnt want the multiple  div i can simply use React.fragment. 




5.  60 min