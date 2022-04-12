let isOk = true;


const customFetch = (time, task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isOk){
                resolve(task);
               console.log("isOk");
            }else{
                reject('Error')
            }
    }, time)})}

export default customFetch;
