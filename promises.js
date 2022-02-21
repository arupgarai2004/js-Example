const promise = new Promise(resolve => {
  setTimeout(() => {
    resolve("Promise has been excuted sucessfully!");
  }, 5000);
}, reject => {

});

promise.then((value) => {
  console.log(value); 
});
