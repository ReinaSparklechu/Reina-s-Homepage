/*
var admin = require("firebase-admin");
var serviceAccount = require('./reina-s-base-firebase-adminsdk-y5kk5-94f665d180.json');


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
*/

var request = require('request');
var cheerio = require('cheerio');
request('https://www.channelnewsasia.com/?cid=google_sem_paid_12042022_cnamkt&gclid=CjwKCAjw6dmSBhBkEiwA_W-EoMYnAqTedZoE9z_jQXU_NpyeaOnmwpqATI6tOlaZbIxefOqLni2t8BoCcA0QAvD_BwE', (error, response, html)=> {
        if(!error && response.statusCode==200) {
            const $ = cheerio.load(html);
            //console.log($('.title may-blank'));
            $('.h6').each((i,title) =>
            {
                var headings = $(title).text().trim();
                console.log(headings);
            })

        }
    });

            

//a.title may-blank loggedin
//*[@id="block-mc-cna-theme-mainpagecontent"]/article/div/div[1]/div[1]/section/div/div/div[1]/div[2]/div/div/div/h6/a
