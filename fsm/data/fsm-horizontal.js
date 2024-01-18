const wizarddata = {
    "workflow": {
      "name": "set-to-wizard",
      "display": "SetToWizard",
      "id": "05cfd309-c090-43b4-958f-96d3652cd797",
      "begin": "filters",
      "end": ["success", "failure", "cancel"]
    },
    "states": [
      {
        "name": "filters",
        "display": "Filters"
      },
      {
        "name": "setto",
        "display": "Set To"
      },
      {
        "name": "confirm",
        "display": "Confirm"
      },
      {
        "name": "post",
        "display": "Post"
      },
      {
        "name": "success",
        "display": "Success"
      },
      {
        "name": "failure",
        "display": "Failure"
      },
      {
        "name": "cancel",
        "display": "Cancel"
      }
    ],
    "transitions": [
      {
        "name": "filters-setto",
        "display": "Set Dates",
        "from": "filters",
        "to": "setto"
      },
      {
        "name": "filter-confirm",
        "display": "Continue",
        "from": "setto",
        "to": "confirm"
      },
      {
        "name": "confirm-post",
        "display": "Submit",
        "from": "confirm",
        "to": "post"
      },
      {
        "name": "post-success",
        "display": "Success",
        "from": "post",
        "to": "success"
      },
      {
        "name": "post-failure",
        "display": "Failure",
        "from": "post",
        "to": "failure"
      },
      {
        "name": "filters-cancel",
        "display": "cancel",
        "from": "filters",
        "to": "cancel"
      },
      {
        "name": "setto-cancel",
        "display": "Cancel",
        "from": "setto",
        "to": "cancel"
      },
      {
        "name": "confirm-cancel",
        "display": "Cancel",
        "from": "confirm",
        "to": "cancel"
      },
      {
        "name": "setto-cancel",
        "display": "Back",
        "from": "setto",
        "to": "filters"
      },
      {
        "name": "confirm-setto",
        "display": "Back",
        "from": "confirm",
        "to": "setto"
      }
    ]
  };
  