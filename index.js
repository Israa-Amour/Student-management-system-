var students = [];

document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault()
    let x = 20;
    let nameInputEl = document.getElementById('name');
    let idInputEl = document.getElementById('idNumber');
    let gdpaInputEl = document.getElementById('gdpa');

    // Validation for input
    inputValidation(nameInputEl.value, idInputEl.value, gdpaInputEl.value);

    // insert student
    insertStudent(nameInputEl.value, idInputEl.value, gdpaInputEl.value);

    // Show success message
    showMessage('success');

});

function inputValidation(name, id, gdpa) {
    // check for the value of each element
    let x = 30;

    if (name == '') {
        alert('Please insert the student name');
    }

    if (id == '') {
        alert('Please insert the student id number');
    }

    if (gdpa == '') {
        alert('Please insert the student gdpa');
    }
}

function insertStudent(name, id, gdpa) {
    let student = {
        name: name,
        id: id,
        gdpa: gdpa,
    };
    students.push(student);
    console.log('students array: ', students);
}

function showMessage(event) {
    if (event == 'success') {
        alert('Studnet added!')
    } else {
        alert('Faild to add student')
    }
}
//showing student list 
document.getElementById('show').addEventListener('click', (e) => {
    e.preventDefault(0)
    var html = "<table border ='2'>";
    html += "<th>Student-ID</th>";
    html += "<th>Student-Name</th>";
    html += "<th>Student-GBA</th>";
    for (var i = 0; i < students.length; i++) {
        html += "<tr>";
        html += "<td>" + students[i].name + "</td>";
        html += "<td>" + students[i].id + "</td>";
        html += "<td>" + students[i].gdpa + "</td>";
        html += "</tr>";

    }
    html += "</table>";
    document.getElementById("Show-Students-in-lists").innerHTML = html;
});
//////////////////////////////////////////////////////////////
// update student gba/name by knowing there id :

    document.getElementById('update').addEventListener('click', (e) => {
        e.preventDefault(0)
        let inputid = document.getElementById('idNumber');
        let inputname = document.getElementById('name');
        let inputgba = document.getElementById('gdpa');

        for ( var i = 0 ; i <students.length ; i++)
        {
        if ( students[i].id==inputid.value)
        {
            students[i].name = inputname.value ; 
            students[i].gdpa =inputgba.value;
        }
        }

    });
    document.getElementById('delete').addEventListener('click', (e) => {
        e.preventDefault(0)
        let inputid = document.getElementById('idNumber');
        for ( var i = 0 ; i <students.length ; i++)
        {
        if ( students[i].id == inputid.value)
        {
            students[i].name = '' ; 
            students[i].gdpa ='';
            students[i].id=''; 
        }
        }

    });