
const tKin = document.getElementById('addtK');
const tK = document.getElementById('tK');
const tm = document.getElementById('tm');

function addTask() 
{
    const d = new Date();
    let time = d.getTime();
    
   const taskText = tKin.value.trim();
   const taskText2 = tm.value.trim();
   

   
   



   if (taskText !== '' && taskText2 !=='')
    {
      
        const listItem = document.createElement('li');
      

        listItem.innerHTML = `
            ${taskText},${taskText2}
            <button class='delete-btn' onclick='removeTask(this)'>Delete</button>
        `;

     
      
      
        tK.appendChild(listItem);
       
   


       
        tKin.value = '';
        tm.value='';
    }
    

}



function removeTask(button) {
    const listItem = button.parentElement;
    

    tK.removeChild(listItem);
    

}
