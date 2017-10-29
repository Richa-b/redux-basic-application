var serverApi = {
    increaseCount: function (currentCount,callback) {
        setTimeout(
            function () {
                callback()
            }, 2000)
    }

}