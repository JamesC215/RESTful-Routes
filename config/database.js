const mongoose = require('mongoose');

// Assuming your environment variable is named MONGODB_URI
const mongoURI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

mongoose.connect(process.env.DATABASE_URL);
	
const db = mongoose.connection;
	
db.on('connected', function() {
  console.log(`Connected to MongoDB RESTful Routes at ${db.host}:${db.port}`);
});
