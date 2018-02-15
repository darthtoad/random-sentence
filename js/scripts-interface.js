const apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  setInterval(() => {
    let noun = new Promise(function(resolve, reject) {
       let request = new XMLHttpRequest();
       let url = `http://api.wordnik.com/v4/words.json/randomWord?includePartOfSpeech=noun&api_key=${apiKey}`;
       request.onload = function() {
         if (this.status === 200) {
           resolve(request.response);
         } else {
           reject(Error(request.statusText));
         }
       }
       request.open("GET", url, true);
       request.send();
     });

   noun.then(function(response) {
     let body = JSON.parse(response);
     $('#result').append(`${body.word} `);
   }, function(error) {
     $('.showErrors').text(`There was an error processing your request: ${error.message}`);
   });
 }, 5000);

  setInterval(() => {
    let verb = new Promise(function(resolve, reject) {
       let request = new XMLHttpRequest();
       let url = `http://api.wordnik.com/v4/words.json/randomWord?includePartOfSpeech=verb&api_key=${apiKey}`;
       request.onload = function() {
         if (this.status === 200) {
           resolve(request.response);
         } else {
           reject(Error(request.statusText));
         }
       }
       request.open("GET", url, true);
       request.send();
     });

     verb.then(function(response) {
       let body = JSON.parse(response);
       $('#result').append(`${body.word} `);
     }, function(error) {
       $('.showErrors').text(`There was an error processing your request: ${error.message}`);
     });
  }, 5005)


  setInterval(() => {
    let noun2 = new Promise(function(resolve, reject) {
       let request = new XMLHttpRequest();
       let url = `http://api.wordnik.com/v4/words.json/randomWord?includePartOfSpeech=noun&api_key=${apiKey}`;
       request.onload = function() {
         if (this.status === 200) {
           resolve(request.response);
         } else {
           reject(Error(request.statusText));
         }
       }
       request.open("GET", url, true);
       request.send();
     });

     noun2.then(function(response) {
       let body = JSON.parse(response);
       $('#result').append(`${body.word} ` + '<br>');
     }, function(error) {
       $('.showErrors').text(`There was an error processing your request: ${error.message}`);
     });
  }, 5010)
})
