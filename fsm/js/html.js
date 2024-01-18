const Html = (() => {

      // Public method to replace an existing element or its contents by ID
    function replaceElementById(elementId, replaceWith) {
        const element = document.getElementById(elementId);

        if (element) {
        // Replace the existing element with the new element
        element.parentNode.replaceChild(replaceWith, element);
        }
    };


    // Private utility function to create table headers from an object
    function generateTable(array) {
      const obj = array[0];
      const table = document.createElement('table');
      const thead = document.createElement("thead");
      const headerRow = document.createElement("tr");
      const tbody = document.createElement('tbody');
  
      // Get object keys as headers
      const headers = Object.keys(obj);
  
      // Create and append table headers
      headers.forEach((headerText) => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
      });

      array.forEach((item) => {
        const row = document.createElement("tr");
  
        // Create and append table cells based on object keys
        Object.keys(item).forEach((key) => {
          const cell = document.createElement("td");
          cell.textContent = item[key];
          row.appendChild(cell);
        });
  
        tbody.appendChild(row);
      });     
  
      // Append the header row to the thead
      thead.appendChild(headerRow);
      table.appendChild(thead);
      table.appendChild(tbody);
      return table;
    };

    function populateTransitions(element, transitions) {
        //const selectElement = document.getElementById(selectId);
    
        if (element) {
          // Clear the existing options
          element.innerHTML = "";
            const defaultoption = document.createElement('option');
            defaultoption.value = '-';
            defaultoption.textContent = '-';
            element.appendChild(defaultoption);
          // Iterate through the transitions and add options
          transitions.forEach((transition) => {
            const option = document.createElement("option");
            option.value = transition.name; // Use the transition's name as the value
            option.textContent = transition.display; // Use the transition's display as the text content
            element.appendChild(option);
          });
        }
      };
    
      function selectedValue(selectElement){
        const selectedValues = [];
        for(let i = 0; i < selectedElement.options.length;i++){
          const option = selectedElement.option[i];
          if (option.select){
            selectedValues.push(opion.value);
          }
        }
        return selectedValues;
      };

      function select(facet, onSelect){
        const select = document.createElement('select');

        select.id = facet.id;
        select.disabled = !facet.isEnabled;

        if (facet.isMultiselect){
          select.multiple = true;
          select.classList.add('multiselect');
        }
        facet.items.forEach((item)=>{
            const option = document.createElement('option');
            option.value = item.value;
            option.textContent = item.display;
            option.disabled = !item.isEnabled;
            option.selected = item.isSelected;
            select.appendChild(option);
        });

        if(onSelect){
          select.addEventListener('change',(event)=>{
            onSelect(event, select);
          })
        }
        return select;
      }

      function fieldSet(display, element){
        const fieldset = document.createElement('fieldset');
        fieldset.innerHTML = `<legend>${display}</legend>`;
        if(element){
          fieldset.appendChild(element);
        }
        return fieldset;
      };

      function sortTable(table, columnIndex, isAscending, isDataSort = false){
        const tbody = table.querySelector('tbody');
        const rows = Array.from(tbody.querySelectorAll('tr'));
        rows.sort((a,b) =>{
          const cellA = a.cells[columnIndex].textContent;
          const cellB = b.cells[columnIndex].textContent;
          if(isAscending){
            return cellA.localeCompare(cellB);
          } else {
            return cellB.localeCompare(cellA);
          }
        });
        tbody.innerHTML = '';
        rows.forEach((row)=>{
          tbody.appendChild(row);
        });
        
      }
  
    // Return public methods
    return {
      generateTable,
      replaceElementById,
      populateTransitions
    };
  })();
  

  