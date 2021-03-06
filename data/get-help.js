self.port.on("commandDb", function onCommandDb(commandDbUnordered) {
    var listContainer = document.createElement("div");
    document.getElementsByTagName("body")[0].appendChild(listContainer);
    var tableElement = document.createElement("table");
    var tableBody = document.createElement('tbody');
    listContainer.appendChild(tableElement);
    
    const commands = {};
    Object.keys(commandDbUnordered).sort().forEach(function(key) {
        commands[key] = commandDbUnordered[key];
    });
    for (var commandName in commands) {
        var tableRow = document.createElement("tr");
        var tableCol1 = document.createElement("td");
        var tableCol2 = document.createElement("td");
        tableCol1.appendChild(document.createTextNode(commandName));
        commandData = commands[commandName];
        if (commandData !== undefined && commandData.description !== undefined) {
            tableCol2.appendChild(document.createTextNode(commandData.description));
        } else {
            tableCol2.appendChild(document.createTextNode('No description for: '+ commandName));
        }
        tableRow.appendChild(tableCol1);
        tableRow.appendChild(tableCol2);
        tableBody.appendChild(tableRow);
    }
    tableElement.setAttribute("border", "1");
    tableElement.appendChild(tableBody);
});
