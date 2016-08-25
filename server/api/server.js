const reflect = (promise) => {
    return promise.then(function (v) {
            return {v: v, status: "resolved"}
        },
        function (e) {
            return {e: e, status: "rejected"}
        });
};

const fetchAsync = (promises) => {
    return new Promise((resolve, reject) => {
        Promise.all(promises.map(reflect))
            .then(responses => {
                responses = responses.map((item) => {
                    return item.status == 'resolved' ? {error: '', data: item.v.data} : {error: item.e.message}
                });

                resolve(responses)
            })
            .catch(e => reject(e))
    })
};

const fetch = (promise) => {
    return new Promise((resolve, reject) => {
        reflect(promise)
            .then(response => {
                response = response.status == 'resolved' ? {
                    error: '',
                    data: response.v.data
                } : {error: response.e.message};

                resolve(response)
            })
            .catch(e => reject(e))
    })
};

module.exports = {
    reflect,
    fetchAsync,
    fetch
};
