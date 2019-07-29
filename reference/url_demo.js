const url = require("url");

const myUrl = new URL("https://mywebsite.com/hello.html?id=100&status=active");

//Serialized Url
console.log(myUrl.href);
console.log(myUrl.toString());
//Host (root domain)
console.log(myUrl.host);
console.log(myUrl.pathname); // pathname
console.log(myUrl.search); // serialized query
console.log(myUrl.searchParams); // Params object
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);
