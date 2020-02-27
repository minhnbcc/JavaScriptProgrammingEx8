function clickHandler(){
    const inputVariable = document.getElementById('firstNameInput');
    const target = document.getElementById('target-p');
    target.innerHTML = inputVariable.value;
}

const button = document.getElementById('clickMe');
button.addEventListener('click',clickHandler);

const myCheckbox = document.getElementById('myCheckbox');
myCheckbox.addEventListener('change',showCheckboxState);

const myCheckbox2 = document.getElementById('myCheckbox2');
myCheckbox2.addEventListener('change',showCheckboxState);

function showCheckboxState(event){
    console.log(event);
    const target = document.getElementById('checkboxState');
    target.innerHTML = event.target.checked;
}
const vehicleMakes = document.getElementById('vehicleMakes');
// const vehicleModels = document.getElementById('vehicleModels');
// const makesTarget =document.getElementById('selectedMake');
const modelsTarget = document.getElementById('selectedModel');

const vehicleMakeChange = function(event){
    const index = event.target.selectedIndex;
    const option = eventTarget.selectedOptions[0];
    
    // const targetElm = document.getElementById('selectedMake');

    if(index<=0){
        targetElm.innerHTML = 'Please select a make.';
    }else{
        targetElm.innerHTML = `You selected Make: ${option.text} Id:${option.value} Index:${index}.`;
    }
};

vehicleMakes.addEventListener('change',vehicleMakeChange)



const vehicleModelChange = function(event){
    const index2 = vehicleModels.selectedIndex;
    console.log(index2);
    const option2 = vehicleModels.selectedOptions[0];
    console.log(option2);
    const targetElm2 = document.getElementById('selectedModel');

    if(index2<=0){
        targetElm2.innerHTML = 'Please select a model.';
    } else{
        targetElm2.innerHTML = `You selected Model:${option2.text} Id:${option2.value} Index:${index2}.`;
    }
}
vehicleModels.addEventListener('change',vehicleModelChange);

