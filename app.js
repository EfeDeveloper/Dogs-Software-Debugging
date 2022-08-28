const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));
app.listen(3000);


var quotes = [
    {
        'text': 'Incluso cuando te tomas unas vacaciones de la tecnología, la tecnología no se toma un descanso de ti.',
        'author': 'Douglas Coupland',
    },
    {
        'text': 'Sé bueno con los nerds. Es muy probable que termines trabajando para uno de ellos.',
        'author': 'Bill Gates',
    },
    {
        'text': 'Para crecer, necesitas traicionar las expectativas de los demás.',
        'author': 'Hayao Miyazaki',
    },
    {
        'text': 'Los principales productos de la economía del siglo XXI no serán los textiles, vehículos y armas, sino más bien cuerpos, cerebros y mentes. ',
        'author': 'Yuval noah',
    },
    {
        'text' : 'Un buen desarrollador de software trabaja con disciplina y constancia desde el primer día.',
        'author' : 'Omar Bradley',
    }

];

app.get('/random-quote', function(req, res) {
    var randomQuote = getRandomQuote();
	res.send(randomQuote);
});

function getRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}