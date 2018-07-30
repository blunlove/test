let fs = require('fs');
for(let i = 1; i <= 52; i++) {
    let oldName = `G:/网站素材/new-image/img${i}.jpg`;
    let newName = `G:/网站素材/new-image/image${i}.jpg`;
    fs.rename(oldName, newName, function(err) {
        if (err) {
            throw err;
        }
        console.log('done!');
    })
}
