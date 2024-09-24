// Immediatly Invoked Function Expression(IIFE)
(function chai(){
  console.log(`DB CONNECTED`)
})();

// heresemicolon is required
 ((name) => {
   console.log(`DB CONNECTED TWO ${name}`)
 })('hitesh')
 
 