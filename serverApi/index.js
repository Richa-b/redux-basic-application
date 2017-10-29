const serverApi = {
    increaseCount:  (currentCount,callback) => {
        setTimeout(() =>  callback(), 2000)
    }
}