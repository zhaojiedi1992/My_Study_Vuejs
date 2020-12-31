let app = new Vue({
    el: "#app",
    data: {
        infos: [
            {"name": "算法导论", "date": "2006-9", "count": 1, "price": 85},
            {"name": "编程艺术", "date": "2006-2", "count": 1, "price": 59},
            {"name": "编程珠玑", "date": "2008-10", "count": 1, "price": 39},
            {"name": "代码大全", "date": "2006-3", "count": 1, "price": 128},
        ],

    },
    methods: {
        add(item) {
            console.log("add")
           item.count++
        },
        sub(item) {
           item.count--
        },
        removeLine(index) {
            this.infos.splice(index, 1)
        }
    },
    filters: {
        formatPrice(price) {
            return "¥ " + price.toFixed(2)
        }
    },
    computed: {
        totalPrice() {
            let totalPriceSum = 0
            for (let info of this.infos) {
                totalPriceSum += info.count * info.price
            }
            return totalPriceSum
        }
    }
})
