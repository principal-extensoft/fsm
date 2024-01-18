const ApiService = (function(){

    let publishMessage = null;
    let settings = {

    };

    function init(apiSettings, func){
        Object.assign(settings, apiSettings);
        if(func){
            setPublish(func);
        }
    };

    function setPublish(func){
        publicshMessage = func;
    };


    function handleError(response){
        if  (!response.ok){
            const erroMessage = `HTTP error: ${response.status} - ${response.statusText}`;
            if(publishMessage){
                publishMessage(errorMessage);
            } else {
                console.error(errorMessage);
            }
        }
        return response;
    }


    async function geturl(url, apiSettings = {}){
        try{
            let response = await fetch(url, {...settings, ...apiSettings, method: 'GET'});
            handleErrors(response);
            return await response.json();
        } catch(error){
            console.error(error);
        }
    };









})();