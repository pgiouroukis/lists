var request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

export default (req, res) => {

    request(
        { uri: "https://www.xo.gr/search/?what=%CE%B3%CE%B9%CE%B1%CF%84%CF%81%CE%BF%CE%AF&where=%CE%B2%CE%B5%CF%81%CE%BF%CE%B9%CE%B1" },
        function(error, response, body) {
            console.log(body);
        }
    );    

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({test:123}))
}