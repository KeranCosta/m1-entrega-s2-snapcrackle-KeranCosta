 function snapCrackle (maxValue){
    let arrayMaxValue=[];
    
    for(let i=1; i<=maxValue; i++){
        arrayMaxValue.push(i);
    }

        for(let index =0; index<arrayMaxValue.length; index++){
        if(arrayMaxValue[index]%2 != 0 && arrayMaxValue[index]%5 != 0 || arrayMaxValue[index]==1){
            arrayMaxValue[index]="Snap";
        }else if (arrayMaxValue[index]%5 == 0 && arrayMaxValue[index]%2 == 0){
            arrayMaxValue[index]="Crackle";
        }else if (arrayMaxValue[index]%5 == 0 && arrayMaxValue[index]%2 != 0){
            arrayMaxValue[index]="SnapCrackle";
        }else if (arrayMaxValue[index]%2 == 0 && arrayMaxValue[index]%5 != 0){
            arrayMaxValue[index]=arrayMaxValue[index];
        }
            
        
    }
    console.log(arrayMaxValue.join(", "));
}




