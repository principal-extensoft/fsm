const WIZARD = (function () {
    const settings = {
        orientation: 'vertical',
        elementIds: {
            next: 'next-button',
            previous: 'prev-button',
            cancel: 'cancel-button',
            header: 'wizard-header',
            content: 'wizard-content'
        },
        elements: {
            next: null,
            previous: null,
            cancel: null,
            header: null,
            content: null
        }
    };


    let stateMachine;

    function init(wizardSettings, data) {
        Object.assign(settings, wizardSettings);

        settings.elements.previous = document.getElementById(settings.elementIds.previous);
        if (settings.elements.previous) {
            settings.elements.previous.addEventListener('click', function () {
                executePrevious();
            });
        }

        settings.elements.next = document.getElementById(settings.elementIds.next);
        if (settings.elements.next) {
            settings.elements.next.addEventListener('click', function () {
                executeNext();
            });
        }
        settings.elements.cancel = document.getElementById(settings.elementIds.cancel);
        if (settings.elements.cancel) {
            settings.elements.cancel.addEventListener('click', function () {
                executeCancel();
            });
        }
        settings.elements.header = document.getElementById(settings.elementIds.header);
        settings.elements.content = document.getElementById(settings.elementIds.content);

        stateMachine = new StateMachine(data.states, data.transitions);
        stateMachine.initialize(data.workflow.begin);
        
        stateMachine.setOnExecuteTransition((transition) => {

        })
    }

    function executePrevious() {
        alert('previous');
    };

    function executeNext() {
        alert('next');
    };

    function executeCancel() {
        alert('cancel');
    };

    return {
        init
    };
})();