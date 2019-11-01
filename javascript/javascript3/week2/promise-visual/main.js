// This code will move the li to the position 100, 100. Calling moveElement will return a promise that resolves after the li element has been moved. 
function translateOneByOne()
{
moveElement(document.querySelector('ul.marks li:nth-child(1)'), {x: 20, y: 300})
    .then(() => {
        console.log('Red circle has been moved');
    });

    moveElement(document.querySelector('ul.marks li:nth-child(2)'), {x: 400, y: 300})
    .then(() => {
        console.log('blue circle has been moved');
    });

    moveElement(document.querySelector('ul.marks li:nth-child(3)'), {x: 400, y: 20})
    .then(() => {
        console.log('Green circle has been moved');
    });
}

translateOneByOne();

    // function translateAllAtOnce()
    // {
    //     Promise.all([
    //     moveElement(document.querySelector('ul.marks li:nth-child(1)'), {x: 20, y: 300}),
    //     moveElement(document.querySelector('ul.marks li:nth-child(2)'), {x: 400, y: 300}),
    //     moveElement(document.querySelector('ul.marks li:nth-child(3)'), {x: 400, y: 20})])
       
    //     .then(() => {
    //         console.log('All circles have been moved')
    //     });
    

    // } 

    // translateAllAtOnce();
     