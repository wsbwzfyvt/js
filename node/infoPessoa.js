const pessoa = {
    nome: 'Lucas',
    idade: 23,
    solteiro: true,
    hobbies: ['Programar', 'Jogar', 'Estudar'],
    endereco: {
        rua: 'Rua 1',
        cidade: 'Cidade 1',
        estado: 'Estado 1',
    },
    mostrarInfoPessoa() {
        const { nome, idade, solteiro, hobbies, endereco } = this;
        console.log(`Nome: ${nome}`);
        console.log(`Idade: ${idade}`);
        console.log(`Solteiro: ${solteiro ? 'Sim' : 'Não'}`);
        this.mostrarHobbies(hobbies);
        this.mostrarEndereco(endereco);
    },
    mostrarHobbies(hobbies) {
        console.log('Hobbies:');
        hobbies.forEach(hobby => {
            console.log(`- ${hobby}`);
        });
    },
    mostrarEndereco(endereco) {
        const { rua, cidade, estado } = endereco;
        console.log('Endereço:');
        console.log(`- Rua: ${rua}`);
        console.log(`- Cidade: ${cidade}`);
        console.log(`- Estado: ${estado}`);
    }
};

pessoa.mostrarInfoPessoa();
