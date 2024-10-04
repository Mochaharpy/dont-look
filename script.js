document.getElementById('loadSave').addEventListener('click', function() {
    const saveData = document.getElementById('saveData').value;
    try {
        const parsedData = JSON.parse(saveData);
        alert('Save data loaded successfully!');
        console.log(parsedData); // Check the current save data in the console
    } catch (e) {
        alert('Invalid save data!');
    }
});

document.getElementById('saveEdit').addEventListener('click', function() {
    const saveData = document.getElementById('saveData').value;
    let parsedData;

    try {
        parsedData = JSON.parse(saveData);
    } catch (e) {
        alert('Invalid save data!');
        return;
    }

    const cookiesToAdd = parseInt(document.getElementById('addCookies').value, 10) || 0;

    // Check if the parsed data has a 'cookies' property
    if (parsedData.cookies) {
        parsedData.cookies += cookiesToAdd; // Add the specified number of cookies
    } else {
        parsedData.cookies = cookiesToAdd; // If it doesn't exist, create it
    }

    // Convert the modified data back to a string
    const saveString = JSON.stringify(parsedData, null, 2); // Pretty print the JSON
    document.getElementById('saveData').value = saveString;

    alert(`Added ${cookiesToAdd} cookies!`);
});
