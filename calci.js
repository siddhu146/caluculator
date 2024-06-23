
let str_eval='';
let str_dis='';
document.querySelectorAll('.buttonstr').
forEach((button)=>{
    button.addEventListener('click',()=>{
        
        const operator=button.dataset.number;
        str_eval+=operator;
        if(operator=='/'){
            str_dis+='÷';
        }
        else if(operator=='*'){
            str_dis+='×';
        }
        else{
            str_dis+=operator;
        }
        document.querySelector('.res-container').innerHTML=str_dis;
    })
});
const answer_button=document.querySelector('.buttonans');
answer_button.addEventListener('click',()=>{
    let answer=find_error(str_eval);
    str_eval='';
    str_dis='';
    
    document.querySelector('.res-container').innerHTML=answer;
});

const clr_button=document.querySelector('.buttonclr');
clr_button.addEventListener('click',()=>{
    str_eval='';
    str_dis='';
    document.querySelector('.res-container').innerHTML=str_dis;
});

function find_error(str){
    try{
        const ans=eval(str);
        return ans;
    }catch(error){
        if(error instanceof SyntaxError)
            {
                
                return 'Syntax Error'
            }
        else{
            return 'Other error';
        }
    }
}
