const fsm = {
    "workflow": {
      "name": "Task",
      "display": "Simple Task",
      "id": "72b4c19e-b096-447b-8a07-910240f36215",
      "begin": "ready",
      "end": ["completed", "abandoned"]
    },
    "states": [
      {
        "name": "ready",
        "display": "Ready",
        "begin": true
      },
      {
        "name": "in-progress",
        "display": "In Progress"
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
      },
      {
        "name": "backburner",
        "display": "Backburner"
      }
    ],
    "transitions": [
      {
        "name": "in-progress",
        "display": "Begin work",
        "from": "ready",
        "to": "in-progress"
      },
      {
        "name": "completed",
        "display": "Work done",
        "from": "in-progress",
        "to": "completed"
      },
      {
        "name": "abandoned",
        "display": "Abandon",
        "from": "in-progress",
        "to": "abandoned"
      },
      {
        "name": "backburner",
        "display": "Backburner",
        "from": "in-progress",
        "to": "backburner"
      },
      {
        "name": "in-progress",
        "display": "Resume work",
        "from": "backburner",
        "to": "in-progress"
      }
    ]
  }

  