import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {

  


  getRandomDog: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },

  getQuote: function() {
    var randomId = Math.floor(Math.random() * 1000) + 300;
    return axios.get(`https://healthruwords.p.rapidapi.com/v1/quotes/?id=${randomId}&t=Wisdom&maxR=1&size=medium`, {
      headers: {
         "X-RapidAPI-Host": "healthruwords.p.rapidapi.com",
           "X-RapidAPI-Key": "Ba5XmdEu9NmshpHQJ8ehPUHPYPWQp11kJ61jsnoifyLs71Yhzq"
       }
    })
  }
}

  

