Project :
- Create Data Entry Form
- Allows up to 20 records entry
- Save the Records
- Sort the Records
- Uses sort() function

 ===== Dynamic function that sorts objects =====
 function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        /* next line works with strings and numbers, 
         * and you may want to customize it to your needs
         */
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}
===== End =====

===== Array =====
var People = [
    {Name: "Name", Surname: "Surname"},
    {Name:"AAA", Surname:"ZZZ"},
    {Name: "Name", Surname: "AAA"}
];
===== End =====

===== Calling the function =====
People.sort(dynamicSort("Name"));
People.sort(dynamicSort("Surname"));
People.sort(dynamicSort("-Surname"));
===== End =====