const form = document.querySelector('form');
const ul = document.createElement('ul')



function handleSubmiit(event){
    event.preventDefault();
    const newli = document.createElement('li');
    const amountText = event.target.amount.value;
    const descriptionText = event.target.description.value
    const catogoryText = event.target.catogory.value

    // creating textnodes
    const amountTextNode = document.createTextNode(amountText);
    const descriptionTextNode = document.createTextNode(descriptionText);
    const catogoryTextNode = document.createTextNode(catogoryText);


    

    //create an object and add that to localstorage
    let myExpense = {
        amount : amountText,
        description : descriptionText,
        catogory : catogoryText
    }
    const timestamp = new Date().getTime();
    localStorage.setItem(timestamp.toString(), JSON.stringify(myExpense));

    //create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete expense';
    deleteButton.onclick = deleteFuncion; 
    function deleteFuncion(){
        localStorage.removeItem(timestamp);
        ul.removeChild(newli);
    }

    //create a edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'edit expense';
    editButton.onclick = editFuncion; 
    function editFuncion(){
        localStorage.removeItem(timestamp);
        ul.removeChild(newli);
        event.target.amount.value =amountText;
        event.target.description.value =descriptionText;
        event.target.catogory.value = catogoryText;
    
        
    }
  
    

    

    //appending stuff to newli
    newli.appendChild(amountTextNode);
    newli.appendChild(document.createTextNode("                       "));
    newli.appendChild(descriptionTextNode);
    newli.appendChild(document.createTextNode("                        "));
    newli.appendChild(catogoryTextNode);
    newli.appendChild(deleteButton);
    newli.appendChild(editButton);


    ul.appendChild(newli);
    form.parentNode.insertBefore(ul, form.nextSibling);


}