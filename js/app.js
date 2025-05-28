

const LIST = [
    {
        id: 1,
        nome: 'Mestre Yoda',
        avatar: 'imagens/yoda.png'
    },
    {
        id: 2,
        nome: 'Luke Skywalker',
        avatar: 'imagens/luke.png'
    },
    {
        id: 3,
        nome: 'Princesa Leia',
        avatar: 'imagens/leia.png'
    },
    {
        id: 4,
        nome: 'Han Solo',
        avatar: 'imagens/hansolo.png'
    },
    {
        id: 5,
        nome: 'Darth Vader',
        avatar: 'imagens/vader.png'
    },
    {
        id: 6,
        nome: 'R2D2',
        avatar: 'imagens/r2d2.png'
    },
    {
        id: 7,
        nome: 'Chewbacca',
        avatar: 'imagens/chewbacca.png'
    },
    {
        id: 8,
        nome: 'C3pO',
        avatar: 'imagens/c3po.png'
    }
]

const App = new Vue({
    el: '#app',
    data: {
        title: 'Star Wars Lego',
        userName: 'Andrey',
        characters: LIST,
        searchName: ''
    },
    methods: {
        like(userName) {
            alert(`O personagem ${userName} recebeu um like!`)
        },
        remove(id) {
            const list = this.characters

            const result = list.filter(item => {
                return item.id !== id
            })

            this.characters = result
        },
        search() {

            if (this.searchName ===''){
               return alert('O campo é obrigatorio.')
            }
            const list = this.characters = LIST

            const result = list.filter(item => {
               return item.nome === this.searchName
            })

            if (result.length <= 0) {
                alert('Nenhum registro encontrado.')
            } else {
                this.characters = result
            }
        }
    }

})
