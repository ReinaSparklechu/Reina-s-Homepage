
var admin = require("firebase-admin");
var serviceAccount = require('./reina-s-base-firebase-adminsdk-y5kk5-94f665d180.json');
var request = require('request');
var cheerio = require('cheerio');
const { firestore } = require("firebase-admin");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

const db = admin.firestore();

const fnArray = ["Amy" , "Lindsey" , "Mary"];
const lnArray = ["White" , "Stein" , "Fox"];

function updatetodb(){
    for ( let i =0; i<3; i++)
    {
        var newData = {
            FirstName: fnArray[i],
            LastName:lnArray[i]
        }
        db.collection('users').doc('names' )
    }
}
var today = Date();
function scrapeReddit(){
    request('https://old.reddit.com/r/popular/?geo_filter=GLOBAL', (error, response, html)=> {
        if(!error && response.statusCode==200) {
            const $ = cheerio.load(html);
            $('p.title').each((i,title) =>
            {
                var headings = $(title).text().trim();
                var link = $(title.firstChild).attr("href");
                console.log(headings);
                let redditHeading = {
                    header: headings,
                    links : link,
                    Time: today
                }
                db.collection('Reddit').add(redditHeading);
            })

        }
    });
}

scrapeReddit();

            

//a.title may-blank loggedin
//#thing_t3_u2ewn0 > div.entry.unvoted > div.top-matter > p.title > a
