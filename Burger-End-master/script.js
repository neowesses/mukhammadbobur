const product = {
  plainBurger: {
    name: 'GAMBURGER',
    price: 10000,
    kcall: 400,
    amount: 0,
    get calcSum() {
      return this.price * this.amount;
    },
    get calcSum2() {
      return this.kcall * this.amount;
    }
  },
  freshBurger: {
    name: 'GAMBURGER FRESH',
    price: 20500,
    kcall: 500,
    amount: 0,
    get calcSum() {
      return this.price * this.amount;
    },
    get calcSum2() {
      return this.kcall * this.amount;
    }
  },
  freshCombo: {
    name: 'FRESH COMBO',
    price: 31900,
    kcall: 600,
    amount: 0,
    get calcSum() {
      return this.price * this.amount;
    },
    get calcSum2() {
      return this.kcall * this.amount;
    }
  },
}

let btn = document.querySelectorAll('.main__product-btn');

for (let i = 0; i < btn.length; i++) {

  btn[i].addEventListener('click', function () {
    //   console.log(this.closest('.main__product').getAttribute('id'));

    prepare(this)
  })
}

let timer = document.querySelector('.header__timer-extra');

  function lvlTimer() {
    timer.innerHTML++;

    if (timer.innerHTML == 100) {
      timer.innerHTML = 0;
    }

    setTimeout(() => {
      lvlTimer()
    }, 100);
  }

lvlTimer();


function prepare(el) {
  let parent = el.closest('.main__product');
  let parentId = parent.getAttribute('id');
  let num = parent.querySelector('.main__product-num');
  let amount = product[parentId].amount;
  let sym = el.getAttribute('data-symbol');
  let price = parent.querySelector('.main__product-price span');
  let kcall = product[parentId].kcall;
  let mainKcall = parent.querySelector('.main__product-kcall');
  

  if (sym == '+' && amount < 10) {
    amount++;
    kcall++;
  } else if (sym == '-' && amount > 0) {
    amount--;
    kcall--;
  }

  num.innerHTML = amount;
  product[parentId].amount = amount;
  price.innerHTML = product[parentId].calcSum;

  mainKcall.innerHTML = product[parentId].calcSum2;
}