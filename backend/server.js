// const express = require('express');
const bodyParser = require('body-parser');

const professionalRoutes = require('./routes/professional');

// const app = express();



const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(8080, () => {
  console.log('Server running on port 8080');
});
  
app.use(bodyParser.json())

app.use(express.static(__dirname + '/../frontend'));

app.use('/professional', professionalRoutes )


// app.listen(8080);