//NOTES (backend)-[10/4/2025, Thursday]

//⭕01. app.use(express.static(path.join(__dirname, "public")))

//👉 It tells Express to serve static files (like HTML, CSS, JS, images) from the public folder.
//express.static(...) = This is a built-in Express function that lets you serve static assets., Static assets = files that don't change: HTML, CSS, JS, images, fonts, etc.
//app.use() is a middleware in express.
//path.join(__dirname, 'file') is a method of javascript.
//Using __dirname ensures the path will work no matter where you run the script from.
//app.set("view engine", "ejs")

//⭕02. PARSE

//const jsonString = '{"name":"Ayaan","age":21}';
//const data = JSON.parse(jsonString); // this parses the string into an object
//console.log(data.name); // Output: Ayaan

//explain = parse something means to analyze and break it down so that a program can understand or use it.

//⭕03. 6 METHODS OF EXPRESS WHICH CAN USE IN MIDDLEWARES.

 //1. express.json([options]);           // Built-in middleware to parse JSON
 //2. express.raw([options])             //Useful when working with files, webhooks, or custom formats
 //3. express.Router([options])          // Mounts all routes under /api
 //4. express.static(root, [options])    // Serve static files
 //5. express.text([options])            //Plain text string
 //6. express.urlencoded([options])      //Form submissions (HTML forms)

//⭕04. 6 METHODS OF EXPRESS WHICH CAN USE IN MIDDLEWARES.
