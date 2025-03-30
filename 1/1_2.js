let sales = [
    {amount: 10000, quantity: 10},
    {amount: 4, quantity: 25},
    {amount: 10, quantity: 5},
    {amount: 6, quantity: 30},
    {amount: 1, quantity: 30}
]

const ordered_of_sales = []

for(let i=0; i<sales.length; i++){
    let push_value = 0; //check whether value is inserted or not
    let current_item = sales[i]; 
    let current_total = current_item.amount * current_item.quantity;

    if(ordered_of_sales.length === 0){
        ordered_of_sales.push({amount: current_item.amount, quantity: current_item.quantity, total: current_total})
    }
    else{
        let j=0;
        for(j=0; j<ordered_of_sales.length; j++){
            if(ordered_of_sales[j].total > current_total){
                //Push the value to the relevant place after checking the total value
                ordered_of_sales.splice(j, 0, {amount: current_item.amount, quantity: current_item.quantity, total: current_total});
                push_value = 1; //value is inserted
                break;
            }
        }
        if(push_value === 0){
            ordered_of_sales.splice(j, 0, {amount: current_item.amount, quantity: current_item.quantity, total: current_total});
        }
    }
}

console.log(`order by total (ascending): ${JSON.stringify(ordered_of_sales)}`)