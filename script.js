const numBtn = document.querySelectorAll('#num');
const signBtn = document.querySelectorAll('#operationsBtn');
const equalbtn = document.querySelector('#equal');
const c= document.querySelector('#C')
const sc = document.querySelector('#screen')
const point =  document.querySelector('.point')
const erase = document.querySelector('#eraseBtn')

let firstNum = '' ;
let secondNum = '';
let operator='';
let isSecondNum= false;
let pointContador=0
let editing = ''


point.addEventListener('click', () => {
    pointContador++
    
});

erase.addEventListener('click',()=>{

    if (editing === 'operator') {
        operator = operator.slice(0, -1);
        container(operator);
    } else if (editing === 'firstNum') {
        firstNum = firstNum.slice(0, -1);
        container(firstNum);
    } else if (editing === 'secondNum') {
        secondNum = secondNum.slice(0, -1);
        container(secondNum);
    }

})

c.addEventListener('click',()=>{
    pointContador=0;
    container('0')
    firstNum = '' ;
    secondNum = ''; 
    operator='';
     isSecondNum= false
     console.log("borrado") 

})

numBtn.forEach(numBtn=> { 
    numBtn.addEventListener('click',()=>{
        if(isSecondNum){
            
            editing = 'secondNum';
            secondNum+=numBtn.value
            container(secondNum)
            
        }else{
            editing = 'firstNum';
            firstNum+=numBtn.value;
            container(firstNum)


        }

        pointc()

        
      });   




      
    });

    equalbtn.addEventListener('click',()=>{
        if(firstNum!=='' && operator!=='' && secondNum!=='' ){


            if(parseFloat(secondNum)===0 &&  operator==='/'){
              container("ERROR")

                
        
            }else{
                const  result= operate(firstNum ,operator,secondNum);
                const roundedResult = result.toFixed(3);
                container(roundedResult);

                firstNum = '' ;
                secondNum = '';
                operator='';
                 isSecondNum= false
        
        

            }
        }


    });

    signBtn.forEach(signBtn=> { 
        signBtn.addEventListener('click',()=>{
    

            editing = 'operator';
            if(firstNum!=='')
            pointContador=0;
            operator+=signBtn.value;
            isSecondNum=true;
            container(operator)
          });   
        });
    



function sum (firstNum,secondNum){
    
    return parseFloat(firstNum) +parseFloat(secondNum)  ;

}

function rest (firstNum,secondNum){
    
    return parseFloat(firstNum) - parseFloat(secondNum)  ;

}

function div (firstNum,secondNum){
  
    

            return parseFloat(firstNum) / parseFloat(secondNum)  ;
        
}

function multi (firstNum,secondNum){
    
    return parseFloat(firstNum) * parseFloat(secondNum)  ;

}

 function operate(firstNum,operator,secondNum){

    switch(operator){
        case "+" :
            return sum(firstNum,secondNum);

        case "-" :
             return rest(firstNum,secondNum);
        case "/" :
         
                return div(firstNum,secondNum);

               
                
            
        
        case "*" :
             return multi(firstNum,secondNum); 

    }

 }


 function container(value){
 
    sc.textContent=value
    
    
    }

    function pointc(){
        point.disabled= (pointContador>=1)
    }
    