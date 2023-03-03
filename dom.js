function saveToLocalStorage(event){
    event.preventDefault();
   //Saving the data input of 3 fields, inside variables
    const amount=document.getElementById('amount').value;
    const description=document.getElementById('description').value;
    const category=document.getElementById('category-select').value;

    const obj={
        amount,
        description,
        category
    }
    localStorage.setItem(obj.description,JSON.stringify(obj));
    displayItems();
}

//Creating Display function
function displayItems(){
    //Storing DOM id of ul inside ul variable
  let ul= document.getElementById("listOfitems");
  ul.innerHTML = '';
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    let obj;
    try {
      obj = JSON.parse(localStorage.getItem(key));
    } catch (e) {
      localStorage.removeItem(key);
      continue;
    }
    //Creating li tag in the name of li variable
    let li = document.createElement("li");
    
  //Creating 3 input types which is going to be added in 'li' tag later
  //creating amount Input inside amount variable
    let amount = document.createElement('input');
    amount.type = 'text';
    amount.value = obj.amount;
  
    //Creating description Input inside description variable
    let description = document.createElement('input');
    description.type = 'text';
    description.value = obj.description;
  // Creating category inside category  variable
    let category = document.createElement('input');
    category.type = 'category';
    category.value = obj.category;
  
    //Creating delete button
    let dltBtn = document.createElement('input');
    dltBtn.type = 'button';
    dltBtn.value = 'Delete Expense';
    dltBtn.onclick = () => {
      localStorage.removeItem(obj.description);
      ul.removeChild(li);
    };
  
     //Creating edit button
    let editBtn = document.createElement('input');
    editBtn.type = 'button';
    editBtn.value = 'Edit Expense';
    editBtn.onclick = () => {
      //Populating the values
      document.getElementById('amount').value = obj.amount;
      document.getElementById('description').value = obj.description;
      document.getElementById('category-select').value = obj.category;
     //Removing the values
      localStorage.removeItem(obj.email);
      ul.removeChild(li);
    };
    
   
    li.appendChild(amount);
    li.appendChild(description);
    li.appendChild(category);
    li.appendChild(editBtn);
    li.appendChild(dltBtn);
    //li added inside ul
    ul.appendChild(li);
  }
  }
  addEventListener('load', () => {
    displayItems();
  });
  