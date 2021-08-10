const saveChanges = () => {
    const taskData= {
        id: `${Date.now()}`,   //Unique Number for id
        imageUrl: document.getElementById("imageurl").value,
        taskTitle: document.getElementById("tasktitle").value,
        taskType: document.getElementById("tasktype").value,
        taskDescription: document.getElementById("taskdescription").value,
     };
     
     console.log(taskData);
    };

    