import { reactive } from 'vue';

export const store = reactive({
    pokemons: [],
    isLoading: true,
    types: [
        "Bug",
        "Dark",
        "Dragon",
        "Electric",
        "Fairy",
        "Fighting",
        "Fire",
        "Flying",
        "Ghost",
        "Grass",
        "Ground",
        "Ice",
        "Normal",
        "Poison",
        "Psychic",
        "Rock",
        "Steel",
        "Water"
    ],
    searchType: '',
    card_colors: [
        {
            type: 'Bug',
            color: 'green'
        },
        {
            type: 'Dark',
            color: 'black'
        },
        {
            type: 'Dragon',
            color: 'black'
        },
        {
            type: 'Electric',
            color: 'yellow'
        },
        {
            type: 'Fairy',
            color: 'pink'
        },
        {
            type: 'Fighting',
            color: 'brown'
        },
        {
            type: 'Fire',
            color: 'red'
        },
        {
            type: 'Flying',
            color: 'blue'
        },
        {
            type: 'Ghost',
            color: 'purple'
        },
        {
            type: 'Grass',
            color: 'green'
        },
        {
            type: 'Ground',
            color: 'yellow'
        },
        {
            type: 'Ice',
            color: 'white'
        },
        {
            type: 'Normal',
            color: 'brown'
        },
        {
            type: 'Poison',
            color: 'purple'
        },
        {
            type: 'Psychic',
            color: 'brown'
        },
        {
            type: 'Rock',
            color: 'brown'
        },
        {
            type: 'Steel',
            color: 'white'
        },
        {
            type: 'Water',
            color: 'blue'
        },
    ],
})