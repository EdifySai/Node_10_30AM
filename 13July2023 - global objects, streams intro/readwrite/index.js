var fs = require('fs');

fs.readFile("package.json", function (err, data) {

    if (err) {
        console.log(err);
    }
    else {
        console.log(data.toString());

        fs.writeFile('new-package.json', data.toString(), function (err) {
            if (err) {
                console.log("error", err);
            }
            else {
                console.log("file created and updated");
            }
        })
    }

})