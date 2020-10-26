const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2020-10',
        price: 85.00,
        count: 1
      }, {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2020-11',
        price: 59.00,
        count: 1
      }, {
        id: 3,
        name: '《编程珠玑》',
        date: '2020-9',
        price: 39.00,
        count: 1
      }, {
        id: 4,
        name: '《JVM》',
        date: '2020-10',
        price: 88.00,
        count: 1
      }
    ]
  },
  methods: {
    getFinalPrice(price) {
      return '￥' + price.toFixed(2);
    },
    decrement(item) {
      if (item.count > 1) {
        item.count--;
      }
    },
    increment(item) {
      item.count++;
    },
    removeHandler(index) {
      this.books.splice(index, 1);
    }
  },
  computed: {
    totalPrice: function () {
      let totalPrice = 0;
      for (let i = 0; i < this.books.length; i++) {
        totalPrice += this.books[i].price * this.books[i].count;
      }
      let totalPrice2 = 0;
      for (let i in this.books) {
        totalPrice2 += this.books[i].price * this.books[i].count;
      }

      let totalPrice3 = 0;
      for (let item of this.books) {
        totalPrice3 += item.price * item.count;
      }

      let totalPrice4 = 0;

      totalPrice4 = this.books.reduce(function (prev, book) {
        return book.count*book.price+prev;
      },0);

      return totalPrice4;
    }
  }
  ,
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2);
    }
  }
})

//1.过滤函数
const nums = [10, 555, 12, 6, 78, 888, 999, 45];
let result = nums.filter(function (n) {
  return n < 100;
})
console.log(result);

//2.map函数
let result2 = result.map(function (n) {
  return n * 2;
});
console.log(result2);

//3.对数组内容进行汇总
let result3 = result2.reduce(function (preValue, curValue) {
  return preValue + curValue;
}, 0);
console.log(result3);

//4.函数编程
let total = nums.filter(function (n) {
  return n < 100;
}).map(function (n) {
  return n * 2
}).reduce(function (preValue, curValue) {
  return preValue + curValue;
});
console.log(total);

//5.Lambert
let reduce = nums.filter(n => n<100).map(n=> n*2).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
console.log(reduce);


