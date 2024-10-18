const fs = require("fs");

// fs.writeFile("newMessage.txt", "hello once again", (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   });

  
fs.readFile('./newMessage.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 