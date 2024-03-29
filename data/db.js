
const mongoose = require('mongoose');

const {NODE_ENV,DB_HOST,DB_USER, DB_PASSWORD, DB_NAME} = process.env;

// const connectionStr = NODE_ENV === 'development' ? `mongodb://${DB_HOST}/${DB_NAME}` :  `mongodb+srv://${DB_USER}:${DB_PASSWORD}$@{DB_HOST}/${DB_NAME}/?retryWrites=true&w=majority`
// const connectionStr = NODE_ENV === 'development' ? `mongodb://${DB_HOST}/${DB_NAME}` :  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}/?retryWrites=true&w=majority`

let connectionStr = NODE_ENV === 'development' ? `mongodb://${DB_HOST}/${DB_NAME}` : `mongodb+srv://${encodeURIComponent(DB_USER)}:${encodeURIComponent(DB_PASSWORD)}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;



if(NODE_ENV != 'development')
  {
    connectionStr = 'mongodb+srv://memorycardgame:suditya@cluster0.bievirz.mongodb.net/?retryWrites=true&w=majority'
  }



// const connectionStr = NODE_ENV === 'development' ? `mongodb://${DB_HOST}/${DB_NAME}` :  `mongodb+srv://${DB_USER}:${DB_PASSWORD}${DB_HOST}/?retryWrites=true&w=majority`

// mongodb+srv://username:password@hostname/database


mongoose.connect(connectionStr, {
    useNewUrlParser: true,
});


mongoose.connection.on('error', error => {
    console.error(`could not connect to database ${DB_NAME}, error = `, error.message)
    process.exit(1);
})

mongoose.connection.on('open', function() {
    console.error(`connected to database ${DB_NAME}`)
})