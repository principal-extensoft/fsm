const fsm = {
  "workflow": {
    "name": "Software Task Long",
    "display": "Task (long)",
    "id": "05cfd309-c090-43b4-958f-96d3652cd797",
    "begin": "requirements",
    "end": ["abandoned", "completed"]
  },
  "states": [
    {
      "name": "requirements",
      "display": "Requirements",
      "begin": true,
      "end": null
    },
    {
      "name": "estimation",
      "display": "Estimation"
    },
    {
      "name": "ready",
      "display": "Ready"
    },
    {
      "name": "analysis",
      "display": "Analysis"
    },
    {
      "name": "in-progress",
      "display": "In Progress"
    },
    {
      "name": "work-done",
      "display": "Work Done"
    },
    {
      "name": "ready-for-val",
      "display": "Ready for Validation"
    },
    {
      "name": "validation",
      "display": "Validation"
    },
    {
      "name": "on-hold",
      "display": "On Hold"
    },
    {
      "name": "blocked",
      "display": "Blocked"
    },
    {
      "name": "completed",
      "display": "Completed",
      "end": true
    },
    {
      "name": "abandoned",
      "display": "Abandoned",
      "end": true
    }
  ],
  "transitions": [
    {
      "name": "estimation",
      "display": "Estimate",
      "from": "requirements",
      "to": "estimation"
    },
    {
      "name": "abandoned",
      "display": "Abandon",
      "from": "requirements",
      "to": "abandoned"
    },
    {
      "name": "ready",
      "display": "Ready",
      "from": "estimation",
      "to": "ready"
    },
    {
      "name": "analysis",
      "display": "Analyze",
      "from": "ready",
      "to": "analysis"
    },
    {
      "name": "in-progress",
      "display": "Begin work",
      "from": "analysis",
      "to": "in-progress"
    },
    {
      "name": "work-done",
      "display": "Work done",
      "from": "in-progress",
      "to": "work-done"
    },
    {
      "name": "on-hold",
      "display": "On hold",
      "from": "in-progress",
      "to": "on-hold"
    },
    {
      "name": "abandoned",
      "display": "Abandon",
      "from": "in-progress",
      "to": "abandoned"
    },
    {
      "name": "blocked",
      "display": "Block",
      "from": "in-progress",
      "to": "blocked"
    },
    {
      "name": "in-progress",
      "display": "Resume work",
      "from": "blocked",
      "to": "in-progress"
    },
    {
      "name": "ready-for-val",
      "display": "Ready for Validation",
      "from": "work-done",
      "to": "ready-for-val"
    },
    {
      "name": "validation",
      "display": "Move to Validation",
      "from": "ready-for-val",
      "to": "validation"
    },
    {
      "name": "completed",
      "display": "Pass Validation",
      "from": "validation",
      "to": "completed"
    },
    {
      "name": "in-progress",
      "display": "Fail Validation",
      "from": "validation",
      "to": "in-progress"
    },
    {
      "name": "requirements",
      "display": "Back to Requirements",
      "from": "validation",
      "to": "requirements"
    },
    {
      "name": "in-progress",
      "display": "Back to work",
      "from": "on-hold",
      "to": "in-progress"
    },
    {
      "name": "abandoned",
      "display": "Abandon",
      "from": "on-hold",
      "to": "abandoned"
    },
    {
      "name": "unblock",
      "display": "Unblock",
      "from": "blocked",
      "to": "in-progress"
    },
    {
      "name": "abandoned",
      "display": "Abandon",
      "from": "blocked",
      "to": "abandoned"
    }
  ]
};
