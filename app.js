const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server Listening on PORT:", port);
  });


  app.get(“/status”, (request, response) => {
    const status = {
       email_address: "davidtopair@gmail.com";
       current_datetime: "TBD";
       github: "https://github.com/Dah-vid/HNG-Backend"

    };
    
    response.send(status);
 });