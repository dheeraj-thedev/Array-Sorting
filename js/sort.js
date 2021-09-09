'use strict'
var sortData = document.getElementById('sortData');

sortData.addEventListener('click',function(event) 
{  
    event.preventDefault();

    console.log(users)
    if(users.length==0)
    {
        document.getElementById('displayTableData').innerHTML='<form class=\'formLayout text-center m-5 p-5\'><h2>No User Data To Sort</h2></form>';
    }
    else
    {
        console.table(users);
        users.sort((firstValue,secondValue) => 
        {
            // converts the string into lowercase
            let compareFirstValue = firstValue.fName.toLowerCase(),
                compareSecondValue = secondValue.fName.toLowerCase();
            // Comparison sequence
            if (compareFirstValue == compareSecondValue)
            {
                alert(`${compareFirstValue} & ${compareSecondValue} are the same`);
                test();
                return 0;
            }
            else if (compareFirstValue>compareSecondValue)
            {
                alert(`${compareFirstValue} is > ${compareSecondValue}`);
                console.table(users)
                test3();
                return 1;
            }
            else
            {
                alert(`${compareFirstValue} is < ${compareSecondValue}`);
                test2();
                return -1;
            }
            
        });
        console.table(users);
    }
})
