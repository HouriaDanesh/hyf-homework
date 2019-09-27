const number = 7894561233322557;
const numToStr = number.toString();
const chunkof = 4;
const chunks= []
function creditCard (numToStr) {
    for (let i = 0; i < math.ceil(numToStr.length / chunkof) ; i++) {
        //numToStr.slice(0 ,4)
        //numToStr.slice(4 ,8)
        //numToStr.slice(8 ,12)
//s=0, 5, 10
//e=4,9,14
const s = (i*chunkof) //s=i*4
const e = (s + chunkof) // e=s+4

       const s  = numToStr.slice(s ,e);
       console.log(chunks.join(''));

    }   
        }
        


 console.log(sum);


