let state = {

  currentState: {

  },

  prev: {},

  setState: function (newState) {
    this.prevState = this.currentState;
    this.currentState = Object.assign(prevState, newState);
  },

  getState: function (type) {
    return type !== 'prev' ? this.currentState : this.prev;
  }
}

state.setState({nome: "Maria"})
state.setState({idade: "Maria"})

state = state.getState()

state.nome;