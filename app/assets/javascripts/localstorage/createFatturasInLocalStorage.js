/* 
 * Creates default fatturas in the browser's localStorage so the demo doesn't look like shit
*/

var defaultFatturas = {
    "App.Fattura":{
        "records":{
            "1":{
                "id":1,
                "name":"Julien Knebel",
                "email":"julienknebel@gmail.com",
                "bio":"Freelance UI/UX Interface Designer + Front-End Developer",
                "avatarUrl":"/ember-crud/assets/images/avatars/jk.jpg",
                "creationDate":"Mon, 26 Aug 2013 20:23:43 GMT"
            }
        }
    }
};

if (localStorage) {
    if ( !localStorage.getItem('DS.LSAdapter') )
        localStorage.setItem( 'DS.LSAdapter', JSON.stringify(defaultFatturas) );
} else {
    throw new Error("Your browser doesn't seem to support localStorage, which is annoying for the purpose of this demo :P");
}
