    // Access the fsm object from the external JavaScript file
    const stateMachine = new StateMachine(fsm.states, fsm.transitions);

    // Optionally, perform any further setup or initialization here

    // Example usage:
    stateMachine.initialize(fsm.workflow.begin); // Initialize the state machine with the initial state

    
stateMachine.setOnStateChange(()=>{
    document.getElementById('currentStateDisplay').innerHTML = stateMachine.getCurrentState();
    const transitions = stateMachine.getCurrentTransitions();
    const dropdown = document.getElementById('currentTransitions');
    Html.populateTransitions(dropdown,transitions); 
    const lastlog = stateMachine.getLastLog();
    if(lastlog){
        updateStateChangeLog(lastlog);
    }   
});

stateMachine.setOnExecuteTransition((transition)=>{
    const to = stateMachine.getCurrentState();
    const transitions = stateMachine.getCurrentTransitions();
    const dropdown = document.getElementById('currentTransitions');
    Html.populateTransitions(dropdown,transitions);
    const lastlog = stateMachine.getLastLog();
    if(lastlog){
        updateStateChangeLog(lastlog);
    }
});

function updateStateChangeLog(logMessage) {
    const logTextArea = document.getElementById("stateChangeLog");
    let contents = logTextArea.value + logMessage + "\n";
    logTextArea.value += logMessage + "\n";
    // Optionally, you can scroll to the bottom of the textarea to always show the latest log entry.
    logTextArea.scrollTop = logTextArea.scrollHeight;
  }


function populateStatesAndTransitions() {

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

// Initialize the page
populateStatesAndTransitions();
