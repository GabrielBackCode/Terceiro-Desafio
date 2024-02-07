class hero{
    constructor( nome, idade, tipo, ataque){
      this.nome = nome
      this.idade = idade
      this.tipo = tipo
      this.ataque = ataque
     
    }
    atacar(){
      console.log(`O ${this.tipo} atacou usando ${this.ataque}.`)
    }
  }
  let mago = new hero("Gabriel", "26", "mago", "magia")
  let guerreiro = new hero("Gabriel", "26", "guerreiro", "espada")
  let monge = new hero("Gabriel", "26", "monge", "artes marciais")
  let ninja = new hero("Gabriel", "26", "ninja", "shuriken")
   
  mago.atacar()
  guerreiro.atacar()
  monge.atacar()
  ninja.atacar()
      