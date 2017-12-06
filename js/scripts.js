/* CHECK VALUE FROM SELECT */
/* CREATE BY SAVIN CRISTIAN */
function getValue(){
    var my_elem = document.body.children[1].children[0].children[0].value;
    console.log(my_elem);
    if(my_elem === "Moldova"){
        document.body.children[1].innerHTML += `
            <select name="city">
                <option value="Chisinau"> 
                    Chisinau
                </option>
                <option value="Nisporeni"> 
                    Nisporeni
                </option>
                <option value="Cahul"> 
                    Cahul
                </option>
                <option value="Orhei"> 
                    Orhei
                </option>
            </select>
       `
    }
    else if(my_elem === "Russia"){
        document.body.children[1].innerHTML += `
            <select name="city">
                <option value="Moscova"> 
                    Moscova
                </option>
                <option value="Ciliaginsk"> 
                    Ciliabinsk
                </option>
                <option value="Sankt Petersburg"> 
                    	Sankt Petersburg
                </option>
                <option value="Novosibirsk"> 
                    Novosibirsk
                </option>
            </select>
       `
    }
    else if(my_elem === "Romania"){
        document.body.children[1].innerHTML += `
            <select name="city">
                <option value="Bucuresti"> 
                    Bucuresti
                </option>
                <option value="Iasi"> 
                    Iasi
                </option>
                <option value="Brasov"> 
                    Brasov
                </option>
                <option value="Timisoara"> 
                    Timisoara
                </option>
            </select>
       `
    }
    else if(my_elem === "Marea Britanie"){
        document.body.children[1].innerHTML += `
            <select name="city">
                <option value="London"> 
                    Birmingham
                </option>
                <option value="Glasgow"> 
                    Glasgow
                </option>
                <option value="Liverpool"> 
                    Liverpool
                </option>
                <option value="Leeds"> 
                    Leeds
                </option>
            </select>
       `
    }
    else if(my_elem === "Franta"){
        document.body.children[1].innerHTML += `
            <select name="city">
                <option value="Paris"> 
                    Paris
                </option>
                <option value="Bayonne"> 
                    Bayonne
                </option>
                <option value="Le Blanc-Mesnil"> 
                    Liverpool
                </option>
                <option value="Bondy"> 
                    Bondy
                </option>
            </select>
       `
    }
}