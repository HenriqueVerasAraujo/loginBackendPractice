require('dotenv').config();
const app = require('./app');

const port = process.env.PORT;

app.get('/', (req, res) => {
    return res.status(200).json({message: 'test'});
});

app.listen(port, () => console.log('ouvindo porta', port));