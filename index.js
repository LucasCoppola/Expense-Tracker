// input name, date, amount.
// add expense button, push to tde table below

const name = document.querySelector("#input-name");
const date = document.querySelector("#input-date");
const amount = document.querySelector("#input-amount");
const addBtn = document.querySelector("#add-btn");
const tbody = document.querySelector("#tbody")

// add button 
addBtn.addEventListener('click', function() {
    
    let nameValue = name.value;
    let dateValue = date.value;
    let amountValue = amount.value;

    let tr = document.createElement("tr");
    tr.innerHTML += `<td>${nameValue}</td>
                     <td>${dateValue}</td>
                     <td>${amountValue}</td>`;  
                     

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<span>&times;</span>`;
    deleteBtn.classList.add("delete-btn");
    tr.appendChild(deleteBtn);

    tbody.appendChild(tr);

    deleteBtn.addEventListener("click", function(){

        deleteBtn.parentElement.remove();
    })
                
    name.value = "";           
    date.value = "";   
    amount.value = "";   
        
})
    
