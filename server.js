const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express()

const makeAjaxCall = require('./src/asset/js/script.js')
// View Engine Setup
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(__dirname + '/src/asset'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

// Configuring the environment
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') {
  app.use(express.errorHandler())
}
else if (process.env.NODE_ENV === 'development') {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
}

app.set('port', (process.env.PORT || 3000));

app.get('/', function (req, res) {
    makeAjaxCall.makeAjaxCall('https://5dc588200bbd050014fb8ae1.mockapi.io/assessment', "GET")
        .then(val => {
            res.render('home', {
                people: val
            })
        })
    
})

app.listen(3000, function(error){
    if(error) throw error
  console.log("Server created Successfully: http://localhost:" + app.get('port'));
})