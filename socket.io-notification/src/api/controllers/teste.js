const teste = ctx => {
    if (true) {
        throw new Object({ message: 'erro gerado de proposito', status: 403 });
    }
    return (
        ctx.body = {

            Teste: 'Teste',
            Teste: 'Teste'
        }
    )
}

module.exports = {
    teste
}