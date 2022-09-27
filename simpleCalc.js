function simplecalc(op1, op2, c){
    switch(c){
        case '+':
            return op1+op2;
            break;
        case '-':
            return op1-op2;
            break;
        case '*':
            return op1*op2;
            break;
        case '/':
            if(op2==0){
                return "Zero div error"
            }
            else{
                return op1/op2
            }
            break;
    }
}

console.log(simplecalc(10,0,'/'))
