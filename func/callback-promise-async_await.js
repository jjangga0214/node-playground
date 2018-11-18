function someAsync(callback) {
    const err = null;
    const data = {
        data: 'demo',
    }
    setTimeout(() => callback(err, data), 0);
}

function someAsync2(data, callback) {
    const err = null;//'err is occurred';
    const data2 = null;
    setTimeout(() => callback(err, data), 0);
}

someAsync(function (err, data) {
    if (err) {
        console.log(err);
    } else {
        someAsync2(data, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        });
    }
});