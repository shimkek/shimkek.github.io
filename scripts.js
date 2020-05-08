let createdTasks = 0;


const twoNumberDate = (date) => {
    const string = new String(date);
    if (string.length === 1) {
        return '0'+date;
    }
    else {
        return date;
    }
}

const appendTextnode = (id, node) => {
    let textnode = document.createTextNode(node);   
    document.getElementById(id).appendChild(textnode);
}
const convertMonthToName = (month) => {
    if (month === 1) {
        return "January";
    }else if (month === 2) {
        return "February";
    }else if (month === 3) {
        return "March";
    }else if (month === 4) {
        return "April";
    }else if (month === 5) {
        return "May";
    }else if (month === 6) {
        return "June";
    }else if (month === 7) {
        return "July";
    }else if (month === 8) {
        return "August";
    }else if (month === 9) {
        return "September";
    }else if (month === 10) {
        return "October";
    }else if (month === 11) {
        return "November";
    }else if (month === 12) {
        return "December";
    } else {
        return "error1"
    }
}

const timeNow = () => {
    const today = new Date();
    const date = twoNumberDate(today.getDate())+'-'+convertMonthToName((today.getMonth()+1))+'-'+today.getFullYear();
    const time = twoNumberDate(today.getHours()) + ":" + twoNumberDate(today.getMinutes()) + ":" + twoNumberDate(today.getSeconds());
    const dateTime = time+' '+date;

    return dateTime;

}   

const deleteTask = (id) => { 
    document.getElementById(id).remove(); 
}

const addTask = () => {
    const inputBox = document.getElementById("inputBox"); 
    const taskText = document.createTextNode(inputBox.value);
    const row = document.createElement("tr");

    const newStatus = document.createElement('td');
    const newTask = document.createElement("td");
    const newTimeStamp = document.createElement("td");
    const newDeleteButton = document.createElement("td");

    const statusValue = document.createTextNode('Not Completed');
    newStatus.appendChild(statusValue);

    newTask.appendChild(taskText);

    const timeStampValue = document.createTextNode(timeNow());
    newTimeStamp.appendChild(timeStampValue);


   //const codeBlock ='<button class="button is-danger is-outlined is-small"><span class="icon"></span><i class="fas fa-times"></i></button>';
   // const deleteButtonValue = document.createTextNode('');
   // deleteButtonValue.innerHTML = codeBlock;
   // newDeleteButton.appendChild(deleteButtonValue);

    row.appendChild(newStatus);
    row.appendChild(newTask);
    row.appendChild(newTimeStamp);
    row.appendChild(newDeleteButton);

    document.getElementById("todotablebody").appendChild(row);
    inputBox.value = "";
}