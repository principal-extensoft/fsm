// state-machine.js

class State {
    constructor(name, display) {
      this.name = name;
      this.display = display;
    }
  }
  
  class Transition {
    constructor(name, display, from, to, condition) {
      this.name = name;
      this.display = display;
      this.from = from;
      this.to = to;
      this.condition = condition;
    }
  }
 
  // Define a StateMachine class
  class StateMachine {
    constructor(states, transitions) {
      this.log = [];
      this.states = states;
      this.transitions = transitions;
      this.currentState = null;
      this.stateChange = null;
    }
  
    // Initialize the state machine
    initialize(initialStateName) {
      const initialState = this.states.find((state) => state.name === initialStateName);
      if (initialState) {
        this.currentState = initialState;
        this.log.push(`initial state set to: ${this.currentState.display}`)
        return true;
      }
      return false;
    }


    // Get the display value for the current state
    getCurrentState(){
        return this.currentState.display;
    }

      // Get an array of Transition objects for the current state
    getCurrentTransitions() {
        if (!this.currentState) {
        return [];
        }

        return this.transitions.filter(
        (transition) => transition.from === this.currentState.name
        );
    }
    getLastLog(){
        return this.log.length === 0 ? null : this.log[this.log.length-1];
    }

      // Set a hook to be called when a new state is reached
    setOnStateChange(onStateChange) {
        this.stateChange = onStateChange;
    }

    setOnExecuteTransition(onExecuteTransition){

    }

        // Check if a transition is valid and execute it
    executeTransition(transitionName) {
        const fromstate = this.currentState;
        const transition = this.transitions.find(
        (t) => t.name === transitionName && t.from === this.currentState.name
        );

        if (transition && (!transition.condition || transition.condition())) {
        this.currentState = this.states.find((state) => state.name === transition.to);
        
        // Call the hook function, if defined
        if (this.stateChange) {
            this.log.push(`executed [${transition.display}] (${fromstate.display} -> ${this.currentState.display})`);    
            // pass destination state to the OnChangeState hook
            this.stateChange(this.currentState);
            // log activity
         
        }
        
        return true;
        }

        return false;
    }
  
    refresh(){
        this.stateChange(this.currentState);
    }

  }

  