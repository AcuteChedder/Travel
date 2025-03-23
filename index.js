let express = require('express');
let app = express();
let cors = require('cors');
let port = 3000;

app.listen(port, function() {
    console.log(`Сервер запущен: http://localhost:${port}`)
});

app.use(cors({origin: 'http://localhost:5173'}));
app.use(express.json());
app.use(express.static('public'))

let mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/Travel', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Подключение к MongoDB успешно'))
    .catch((err) => console.error('Ошибка подключения к MongoDB:', err));

let schema = new mongoose.Schema({
    name: String,
    duration: String,
    description: String,
    image: String,
    rating: Number,
})

let Tour = mongoose.model('Tour', schema);

app.get('/tours', async function(req, res) {
    let data = await Tour.find()
    res.send(data)
});