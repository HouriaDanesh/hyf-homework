const name = [];
const todoList = [];
const favouriteDish = [];
const num=[];

// Greetings(Nive to meet you Houria)
function getReply(command)
{
    const splitName = command.split(" ");   //Hello, my, name, is, Houria
    const name = splitName[splitName.length-1]; 
    
    if (command.includes('hello my name is'))
    {
        return `Nice to meet you ${name}`; 
    }
    else if (command !=0)
    {
        return `Hey ${name} You repeated your name twice `;
    }
    else if (command.includes('what is my name?'))
    {
        return `Your name is : ${name} `; 
    }
   
    //Todo list
    else if (command.includes('to my todo'))
    {
            const sliceTodo = command.slice(4, command.length - 11);
            todoList.push(sliceTodo);
            return `Added ${sliceTodo} to my todo`;
        }
     
    else if (command === 'What is on my todo?')
    {
        return todoList;
    }
    else if(command.includes('remove'))
    {
       
        todoList.splice(sliceTodo.join(' '));
       
        return `Removed ${todoList.join(' ')} from your todo`;
    }

        
//whts today
else if(command.includes('today'))
    {  
        const formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear();
        return  `Today is :${formatted_date}` ;
        
    }

//Math
    else if (command.includes('sum')) 
    {
        const splitMath = command.split(" ");// sum of 3 and 3
        const num1 = splitMath[splitMath.length-3]; 
        const num2 = splitMath[splitMath.length-1];
        const sum = (num1 + num2);

    return sum;  
    }

//saved dish
else if (command.includes('dish'))
    {
        const splitDish = command.split(" ");   //my, favourite, dish, is, Spagetti
        const favouriteDish = splitDish[splitDish.length-1]; 
    }
//fav dish
else if(command.includes('favourite'))
    {
    favouriteDish.splice(4, 1, "carbonara");
    return `Saved favorite dish as ${favouriteDish}`;
    } 
    
//timer
else if (command.includes('timer'))
    {
        const splitTimer = command.split(" ");  
        const minutes = splitTimer[splitTimer.length-2]; ; // Timer set for 4 minutes. 
        const timerSet = setTimeout(timer, minutes*60000);
        function timer() {
            console.log('Timer has set');
        }
        return `Timer set for ${minutes} minutes.`;
    }
    

}

    console.log(getReply('Hello my name is Houria')); // "Nice to meet you Houria"
    console.log(getReply('Hello my name is Houria, Hello my name is Houria')); //Hey Houria You repeated your name twice
    console.log(getReply('What is my name?')); // "Your name is Houria"
    console.log(getReply('Add fishing to my todo')); // Added fishing to your todo
    console.log(getReply('Add singing in the shower to my todo')); // Added singing in the shower to your todo
    console.log(getReply('What is on my todo?'));// fishing, singing in the shower
    console.log(getReply('Remove fishing from my todo')); // Removed fishing from your todo
    console.log(getReply('Remove singing in the shower from my todo')); // Removed singing in the shower from your todo
    console.log(getReply('What day is it today?'));// Today is 26. of September 2019
    console.log(getReply('sum of 3 and 3')); // 6
    console.log(getReply('My favorite dish is spaghetti')); // carbonara spagetti
    console.log(getReply('What is my favorite dish?'));// your favourite dish is carbonara spagetti.
    console.log(getReply('Set a timer for 4 minutes')); // Timer set for 4 minutes.
