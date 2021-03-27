class Stack { 
    constructor(){  
        this.elements = []; 
    }
    push(element){ 
        this.elements.push(element) 
    }
    pop(){ 
        if(this.elements.length === 0) return "Underflow situation"; 
        else return this.elements.pop();
    }
    isEmpty(){ 
        if(this.elements.length > 0) return false;
        else return true;
    }
}

module.exports = Stack