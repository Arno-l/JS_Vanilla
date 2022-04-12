
/* 2.1. Startup Nation, le retour */

const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 },
  ];
  
  /* Sors une array qui ne contient que le prénom et le nom des entrepreneurs */
 function only_name() {
  entrepreneurs.filter( user => console.log(`${user.first} ${user.last}`));
 };
  /* Pour chaque entrepreneur, remplace la date de naissance par l'âge de l'entrepreneur qu'il aurait aujourd'hui */
 function replace_year() {
  entrepreneurs.map( user => {
      user['age'] = user['year'];
      user['age'] = 2022 - user['year'];
      delete user['year'];
  })
  console.log(entrepreneurs);
};
  

  /* Les clés first et last manquent de lisibilité, remplace-les par firstName et lastName */
 function change_first_last() {
  entrepreneurs.map( user => {
      user['firstName'] = user['first'];
      user['lastName']  = user['last'];
      delete user['first'];
      delete user['last'];
  }) 
  console.log(entrepreneurs);
};
  

  /* Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 uniquement */
function seventies() {
entrepreneurs.map( user => {
    if(user.year > 1969 && user.year < 1980);
    console.log(user);
})};

 

  