
const addToTable = document.getElementById("form");

addToTable.addEventListener("submit", function (event) {
  event.preventDefault(); 

  
  const Fname = document.getElementById("first-name").value;
  const lname = document.getElementById("last-name").value;
  const Email=document.getElementById("Email").value
  const add = document.getElementById("address").value;
  const pin = document.getElementById("pincode").value;
  const gend = document.querySelector('input[name="gender"]:checked').value;
  
  
  const food=[];
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  for(var i=0;i<checkboxes.length;i++){
    food.push(checkboxes[i].value)
  }
  /*const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  checkboxes.forEach(function (checkbox) {
    food.push(checkbox.nextElementSibling.textContent);
  });*/
  const sta = document.getElementById("state").value;
  const coun = document.getElementById("country").value;


  /*table items row cell insertion*/
  const tableBody = document.querySelector(".table tbody");
  const newRow = tableBody.insertRow();

  
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);
  const cell5 = newRow.insertCell(4);
  const cell6 = newRow.insertCell(5);
  const cell7 = newRow.insertCell(6);
  const cell8 = newRow.insertCell(7);
  const cell9 = newRow.insertCell(8);
  

  /*item cell content*/
  cell1.textContent = Fname;
  cell2.textContent = lname;
  cell3.textContent = Email;
  cell4.textContent = add;
  cell5.textContent = pin;
  cell6.textContent =gend;
  cell7.textContent=food.join(", ") 
  cell8.textContent = sta;
  cell9.textContent = coun;
  

  document.getElementById("form").reset();
});

document.getElementById("form").addEventListener("submit", function (event) {
   event.preventDefault(); 

   const fiName = document.getElementById("first-name").value;
  const laName = document.getElementById("last-name").value;  
  const email=document.getElementById("Email") .value;
  
   const Address = document.getElementById("address").value;
  const pinCode = document.getElementById("pincode").value; 
  const gender = document.querySelector('input[name="gender"]:checked').value;
  
   const foods=[];
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  for(var i=0;i<checkboxes.length;i++){
    foods.push(checkboxes[i].value)
  }
   /*checkboxes.forEach(function (checkbox) {
     foods.push(checkbox.nextElementSibling.textContent);
   });*/
   
   const state = document.getElementById("state").value;
  const country = document.getElementById("country").value;

/* copying item to table*/
  document.getElementById("first-name").textContent = fiName;
   document.getElementById("last-name").textContent = laName
   document.getElementById("Email").textContent=email;
    
    document.getElementById("address").textContent = Address;
    document.getElementById("pincode").textContent = pinCode;
    document.querySelector('input[name="gender"]:checked').value;
    document.getElementById("food").textContent = foods.join(", ");
   document.getElementById("state").textContent = state;
   document.getElementById("country").textContent = country;
   

    
    document.getElementById("form").reset();
 });
