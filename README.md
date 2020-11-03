# Not An Uptime API Wrapper
This is the API Wrapper for https://uptime.notadev.xyz

## How to use
Install using NPM
`$ npm i not-an-uptime-api`

Submitting URL
```javascript
const { Client } = require("not-an-uptime-api")

const Api = new Client()

//Using Await
async function SubmitLink() {
    await console.log(Api.submit("Uptime Name", "URL that will be uptimed", "Auth Token"))
}
SubmitLink()

//Using catch/then
Api.submit("Uptime Name", "URL that will be uptimed", "Auth Token").then(Result => console.log(Result))

/*The result should be like this: 
    {
        name: "Uptime Name",
        url: "URL that will be uptimed",
        message: "Response from the server. `success!` if success, `found duplicate` if there's a duplicate, `Authorization Bearer required!` if the token is invalid"
    }
*/
```