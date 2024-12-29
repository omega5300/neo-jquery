interface Pokemon {
  base_experience: number
  id: number
  name: string
  stats: Stat[]
  types: Type[]
  sprites: Sprites
}

interface Sprites {
  back_default: string
  back_female: any
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

interface Stat {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}

interface Type {
  slot: number
  type: {
    name: string
    url: string
  }
}

interface MaxStats {
  [key: string]: number
}

interface Types {
  [key: string]: string
}

class PokemonInfo extends HTMLElement {
  pokeID!: number;
  name!: string;

  constructor() {
     super()
     this.pokeID
     this.name
   }

   pokeStats: Readonly<MaxStats> = {
     hp: 255,
     attack: 194,
     defense: 230,
     "special-attack": 180,
     "special-defense": 230,
     speed: 200,
     xp: 635
    }

    static get observedAttributes(): string[] {
      return ["poke-id", "name"]
	}

    attributeChangedCallback(name: string, oldValue: any, newValue: any) {
      switch (name) {
        case 'poke-id': this.pokeID = newValue;
        case 'name': this.name = newValue;
      }
    }

    async connectedCallback() {
      const shadowRoot = this.attachShadow({ mode: 'closed' });

      // stylesheets
      const warningStyles = document.createElement('style')
      warningStyles.textContent = `
        .warning {
          color: #111;
          background-color: #e8e815;
          width: fit-content;
          padding: 6px;
          border-radius: 220px;
        }
      `

      const pokemonStyles = document.createElement('style')
      pokemonStyles.textContent = `
        .poke-content {
          color: #111;
          outline: 3px solid #e00;
          border-radius: 10%;
          padding: 10px;
          width: fit-content;
          text-align: center;
        }
    
        ul {
          list-style: none;
          padding: 0;
        }

        .types, .stat {
          display: flex;
          gap: 10px;
        }

        .types {
          margin-bottom: 8px;
        }

        .type {
          border-radius: 250px;
          padding: 8px;
        }

        .normal, .grass, .ice, .fighting,
        .ground, .flying, .ghost, .dark, 
        .steel, { color: #000; }

        .fire, .water, .electric, .poison, 
        .psychic, .bug, .rock, .dragon, 
        .fairy, { color: #fff; }

        .normal { background-color: #A8A77A; }

        .fire { background-color: #EE8130; }

        .water { background-color: #6390F0; }

        .electric { background-color: #F7D02C; }

        .grass { background-color: #7AC74C; }

        .ice { background-color: #96D9D6; }

        .fighting { background-color: #C22E28; }

        .poison { background-color: #A33EA1; }

        .ground { background-color: #E2BF65; }

        .flying { background-color: #A98FF3; }

        .psychic { background-color: #F95587; }

        .bug { background-color: #A6B91A; }

        .rock { background-color: #B6A136; }

        .ghost { background-color: #735797; }

        .dragon { background-color: #6F35FC; }

        .dark { background-color: #705746; }

        .steel { background-color: #B7B7CE; }

        .fairy { background-color: #D685AD; }
      `;

      const errorStyles = document.createElement('style')
      errorStyles.textContent = `
        .error {
          color: #eee;
          background-color: #b01010;
          width: fit-content;
          padding: 6px;
          border-radius: 220px;
        }
      `

      if (!this.pokeID && !this.name) {
        const requiredMessage = document.createElement('p')
        requiredMessage.classList.add('warning')
        requiredMessage.textContent = 'the poke id or name is required'
        shadowRoot.append(warningStyles, requiredMessage)
        return
      }

      try {
        const param = this.pokeID || this.name
        const data: Pokemon = await (
          await fetch(`https://pokeapi.co/api/v2/pokemon/${param}`)
        ).json()

        const pokeContent = document.createElement('main')
        pokeContent.classList.add('poke-content')

        const pokeImg = document.createElement('img')
        pokeImg.src = data.sprites.front_default
        pokeImg.alt = data.name

        const pokeName = document.createElement('h1')
        pokeName.textContent = `${data.id} - ${data.name}`

        const pokeTypes = document.createElement('ul')
        pokeTypes.classList.add('types')

        for (const { type } of data.types) {
          const pokeType = document.createElement('li')
          pokeType.classList.add('type', type.name)
          pokeType.textContent = type.name

          pokeTypes.append(pokeType)
        }

        const pokeStats = document.createElement('ul')

        for (const stat of data.stats) {
          const pokeStat = document.createElement('li')
          pokeStat.classList.add('stat')

          const nameStat = document.createElement('label')
          nameStat.textContent = `${stat.stat.name}:`

          const baseStat = document.createElement('progress')
          baseStat.classList.add('progress')
          baseStat.value = stat.base_stat
          baseStat.max = this.pokeStats[stat.stat.name]

          const statValues = document.createElement('span')
          statValues.textContent = `${stat.base_stat}/${this.pokeStats[stat.stat.name]}`

          pokeStat.append(nameStat, baseStat, statValues)
          pokeStats.append(pokeStat)
        }

        pokeContent.append(pokeImg, pokeName, pokeTypes, pokeStats)
        shadowRoot.append(pokemonStyles, pokeContent)
      } catch (err) {
        const msg = document.createElement('p')
        msg.classList.add('error')
        msg.textContent = (err as Error).message

        shadowRoot.append(errorStyles, msg)
     }
  }
}

customElements.define('pokemon-info', PokemonInfo)
