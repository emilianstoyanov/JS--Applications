function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}


// resolveAfter2Seconds().then(result => {
//     console.log(result);
// })

async function asyncFunc() {
    let result = await resolveAfter2Seconds();

    console.log(result)

    return "Pesho";
}

asyncFunc()
    .then(res => {
        console.log(res);
    })