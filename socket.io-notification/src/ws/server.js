const Koa = require('koa');
const http = require('http')
const socket = require('socket.io');

const app = new Koa();
const server = http.createServer(app.callback());
const io = socket(server);

io.on('connection', function (socket) {

    console.log('Usuário se conectou -> socket id', `${socket.id}`);

    socket.on('disconnect', function () {
        console.log('Usuário Desconectou');
    });


    socket.on('entrei', function (data) {
        console.log(data)

        // Emitindo o evento para o lado do cliente
        socket.emit('bemvindo', { data: 'SAI GATO' });
    });

    socket.on('criarNotificacao', function (data) {
        console.log(data)
        console.log('Criei uma notificação')
        socket.emit(`escutar${data.id_imobiliaria}`, [{ message: `TODOS DA ${data.id_imobiliaria} VÃO RECEBER` }]);
    });

    setInterval(function () {
        console.log('enviando para 1')
        socket.emit(`imob1`, `ENVIANDO SEMPRE PRA 1`);
    }, 7000)

    // io.emit('broadcast', 'sai gato');
    // io.to(socket.id).emit('teste', `${socket.id}`);
});




server.listen(3000, () => console.log(`servidor websocket online ${3000}`));