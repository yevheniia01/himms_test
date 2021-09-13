const express = require('express');
//const cors = require('cors');

const app = express();

app.get('/api/messages', (req, res) => {
  const messages = [
    {id: 1, firstName: 'John', lastName: 'Doe', txt: 'Hi, we have been trying to reach you regarding your car extended warranty...'},
    // {id: 2, firstName: 'Brad', lastName: 'Smith'},
    // {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(messages);
});
app.get("/api/blocked", (req,res)=>{
    console.log('hello')
    const cust = [
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Brad', lastName: 'Traversy'},
        {id: 3, firstName: 'Mary', lastName: 'Swanson'},
      ];
      res.json(cust)
})

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);