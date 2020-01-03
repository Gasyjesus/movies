/**
 * @name Main
 * @author Simon (simon.alleaume@hotmail.co.uk -Be Prouf of yourself maaan - Jan 2020 !!! 
 * @version 1.0.0
 *  Entry point of the application
 */



 class Main {
     public constructor (){

         const title: HTMLElement = document.querySelector('h1');
         title.innerHTML = 'Hello HTML !';
     }
 }

 // Main app instance
document.addEventListener(
    'DOMContentLoaded',
    () => { // What to do when event is triggered
        console.log('Hey Buddy, i\'m ready ... play now !' );
        new Main()
    }
)



 ; 