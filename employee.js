var directoryPromise = d3.json("employee.json");

var successFCN = function(theEmployees) {
    console.log(theEmployees);
    d3.selectAll("h1")
    .text("Employees");
    var rows = d3.select("tbody")
    .selectAll("tr")
    .data(theEmployees)
    .enter()
    .append("tr")

    rows.append("td")
        .append("img")
        .attr("src", getImage);

    rows.append("td")
        .text(getName)
    
    rows.append("td")
        .text(getTitle)
    
    rows.append("td")
        .text(getUnit)
    
    rows.append("td")
        .text(getEmail)
    
    rows.append("td")
        .text(getBio)
    
    rows.append("td")
        .text(getPhone)
    
}

var failFCN = function(errMessage) {
    console.log("failure", errMessage);
    d3.selectAll("h1")
    .text("File not found");
    }
directoryPromise.then(successFCN, failFCN)

var getImage = function(employee){
    return employee.photo;
}

var getName = function(employee){
    return employee.firstName + " " + employee.lastName
}

var getTitle = function(employee){
    return employee.title;
}

var getEmail = function(employee){
    return employee.email;
}

var getBio = function(employee){
    return employee.bio;
}

var getUnit = function(employee){
    return employee.unit;
}

var getPhone = function(employee){
    return employee.phone;
}