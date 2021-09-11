const taskContainer=document.querySelector(".task__container");

let globalArray = [];

const generateNewCard = (taskData) =>
    `
    <div class="col-md-6 col-lg-4">
      <div class="card">
        <div class="card-header d-flex justify-content-end gap-2">
            <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
            <button type="button" class="btn btn-outline-danger" id=${taskData.id} onclick="deleteCard.apply(this,arguments)">
            <i class="fas fa-trash-alt" id=${taskData.id} onclick="deleteCard.apply(this,arguments)"></i></button>
        </div>
        <img src=${taskData.imageUrl} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${taskData.taskTitle}</h5>
          <p class="card-text">${taskData.taskType}</p>
          <a href="#" class="btn btn-dark float-start">${taskData.taskDescription}</a>
        </div>
        <div class="card-footer">
            <button type="button" class="btn btn-outline-primary float-end"> Open Task </button>
        </div>
      </div>
    </div>
    `;

  // Page refresh and data lost issue resolved

    const loadInitialCardData = () => {
      // Localstorage to get tasky card data
      const getCardData= localStorage.getItem("tasky");

      // converting string to normal object
      const {cards} = JSON.parse(getCardData);

      // Loop over those array of task object to create HTML card
      cards.map((cardObject) => {
        // inject it to DOM
        taskContainer.insertAdjacentHTML("beforeend", generateNewCard (cardObject));
        // Update our globalArray
        globalArray.push(cardObject);

      })
    };

    // Delete card Feature
    const deleteCard =(event) =>{
      event= window.event;
       // for this we need an id
       const targetID = event.target.id;
       const tagname = event.target.tagName;
       // match the id of the element with the id inside the globalArray, if match is found, remove it
       globalArray = globalArray.filter((cardObject) => cardObject.id !== targetID)
       localStorage.setItem("tasky", JSON.stringify({cards:globalArray}));
       //Now we have updated our data now contact parent to delete that specific data
       
       if(tagname === "BUTTON"){
        return taskContainer.removeChild(event.target.parentNode.parentNode.parentNode);
       }
       else {
        return taskContainer.removeChild(event.target.parentNode.parentNode.parentNode.parentNode);
       }
        
    };

const saveChanges = () => {
    const taskData= {
        id: `${Date.now()}`,   //Unique Number for id
        imageUrl: document.getElementById("imageurl").value,
        taskTitle: document.getElementById("tasktitle").value,
        taskType: document.getElementById("tasktype").value,
        taskDescription: document.getElementById("taskdescription").value,
     }; 

     taskContainer.insertAdjacentHTML("beforeend", generateNewCard(taskData));

     globalArray.push(taskData);
     
     localStorage.setItem("tasky", JSON.stringify({cards:globalArray}));
     };


    
    

    