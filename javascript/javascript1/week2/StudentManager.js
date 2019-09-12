const class07Students = [];
function addStudentToClass(studentName) {
    

     if (studentName.length == 0) 
     {
        return "The student name is missing!";
    }
    else if (class07Students.includes(studentName))
    {
       return "The student name is already in the class";
     }

    else if (studentName == 'Queen')
    {
        return class07Students.push(studentName);   
     }
    else if (class07Students.length > 6)
     {
        return "Sorry, The class 07 is full";
      }
      else {
        return class07Students.push(studentName);
      }
}

function getNumberOfStudents() {
    return class07Students.length;
}

