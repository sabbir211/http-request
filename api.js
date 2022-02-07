var https = require("https");
https.get('https://jsonplaceholder.typicode.com/posts', (res) => {
res.setEncoding("utf8");
let body = "";
res.on("data", data => {
body += data;
});
res.on("end", () => {
body = JSON.parse(body);
console.log(body.length);

});
});
