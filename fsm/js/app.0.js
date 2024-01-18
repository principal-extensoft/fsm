

// Your FSM data (replace this with your actual FSM data)
const fsmData = {
  states: [
    new State("ready", "Ready"),
    new State("in-progress", "In Progress"),
    new State("completed", "Completed"),
    new State("abandoned", "Abandoned"),
    new State("backburner", "Backburner"),
  ],
  transitions: [
    new Transition("in-progress", "Begin work", "ready", "in-progress", () => true),
    new Transition("completed", "Work done", "in-progress", "completed", () => true),
    new Transition("abandoned", "Abandon", "in-progress", "abandoned", () => true),
    new Transition("backburner", "Backburner", "in-progress", "backburner", () => true),
    new Transition("in-progress", "Resume work", "backburner", "in-progress", () => true),
  ],
};

// Create a StateMachine instance and initialize it
const stateMachine = new StateMachine(fsmData.states, fsmData.transitions);
stateMachine.initialize("ready"); // Set the initial state (change as needed)

stateMachine.setOnStateChange(()=>{
    document.getElementById('currentStateDisplay').innerHTML = stateMachine.getCurrentState();
    const transitions = stateMachine.getCurrentTransitions();
    const dropdown = document.getElementById('currentTransitions');
    Html.populateTransitions(dropdown,transitions);    
});

stateMachine.setOnExecuteTransition(()=>{
    const transitions = stateMachine.getCurrentTransitions();
    const dropdown = document.getElementById('currentTransitions');
    Html.populateTransitions(dropdown,transitions);
});

// Function to populate the states and transitions in the first tab
function populateStatesAndTransitions() {
  //const statesTable = document.getElementById('states-table');
  // document.querySelector("#stateMachine table:first-of-type");
  //const transitionsTable = document.querySelector("#stateMachine table:last-of-type");
  const transitionsTable = document.getElementById('transitions-table');

  const statestable = Html.generateTable(stateMachine.states);
  Html.replaceElementById('states-table',statestable);

  const transitionstable = Html.generateTable(stateMachine.transitions);
  Html.replaceElementById('transitions-table',transitionstable);

  const transitionsSelect = document.getElementById("currentTransitions");
        transitionsSelect.addEventListener("change", function () {
        const selectedTransitionName = transitionsSelect.value;
        stateMachine.executeTransition(selectedTransitionName);
    });

}
stateMachine.refresh();



/*

document.getElementById('currentStateDisplay').innerHTML = stateMachine.getCurrentState();
const transitions = stateMachine.getCurrentTransitions();
const dropdown = document.getElementById('currentTransitions');
Html.populateTransitions(dropdown,transitions);
*/

// Initialize the page
populateStatesAndTransitions();
