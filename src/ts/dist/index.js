var Activtiy = /** @class */ (function () {
    function Activtiy() {
        this.header = document.querySelector('header');
        this.controlls = document.querySelector('header .controlls');
        this.search = document.querySelector('header .search');
        this.toggle = document.querySelector('header .toggle');
        this.nav = document.querySelector('nav');
        this.slide_show = document.querySelector('#product_1 .options .slide-show');
        this.options_list = document.querySelector('.options ul');
        this.options = document.querySelectorAll('.options');
        this.options_header = document.querySelectorAll('.options h1');
    }
    Activtiy.prototype.ActiveHeaderEle = function () {
        var _this = this;
        this.toggle.addEventListener('click', function (_) {
            _this.search.classList.toggle('active-sm');
            _this.controlls.classList.toggle('active-md');
            _this.controlls.classList.toggle('active-sm');
            _this.nav.classList.toggle('active');
        });
    };
    Activtiy.prototype.ActiveHeaderScroll = function () {
        var _this = this;
        window.addEventListener('scroll', function (_) {
            if (window.scrollY !== 0) {
                _this.header.classList.add('active-header');
            }
            else {
                _this.header.classList.remove('active-header');
            }
        });
    };
    Activtiy.prototype.ActiveOpions = function () {
        var _this = this;
        this.options_header.forEach(function (e) {
            var ele = e;
            ele.addEventListener('click', function (_) {
                if (window.innerWidth < 766) {
                    _this.options.forEach(function (s) {
                        var ele = s;
                        var span_content = ele.children[0].children[0];
                        ele.children[1].classList.toggle('slideOption');
                        span_content.innerHTML == "+" ? span_content.innerHTML = "-" : span_content.innerHTML = "+";
                    });
                }
            });
        });
    };
    return Activtiy;
}());
//============= Activity || Class================>
var activtiy = new Activtiy();
activtiy.ActiveHeaderEle();
activtiy.ActiveHeaderScroll();
activtiy.ActiveOpions();
//============= Activity || Class================>
var Animations = /** @class */ (function () {
    function Animations() {
    }
    Animations.prototype.Animater = function (img, sec) {
        sec.style.display = "none";
        var srcs = [
            './images/load/1.svg',
            './images/load/2.svg',
            './images/load/3.svg',
            './images/load/4.svg'
        ];
        var start = 1;
        window.addEventListener('click', function (_) {
            setInterval(function () {
                if (start < srcs.length) {
                    img.setAttribute('src', srcs[start]);
                    start++;
                }
                else {
                    sec.style.display = "none";
                }
            }, 1000);
        });
    };
    return Animations;
}());
//============= Animation || Class================>
var animation = new Animations();
animation.Animater(document.querySelector('#slider_img'), document.querySelector('#animate'));
//============= Animation || Class================>
var ScrollControlls = /** @class */ (function () {
    function ScrollControlls() {
        this.left = document.querySelectorAll('.left');
        this.right = document.querySelectorAll('.right');
    }
    ScrollControlls.prototype.Scroller = function (dir, dis) {
        dir.forEach(function (e) {
            e.addEventListener('click', function (_) {
                var _a;
                var ele = (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.children[1];
                if (dis == "increase") {
                    ele.scrollLeft -= ele.children[0].scrollWidth + 30;
                }
                else {
                    ele.scrollLeft += ele.children[0].scrollWidth + 30;
                }
            });
        });
    };
    ScrollControlls.prototype.IncreaseScroll = function () {
        this.Scroller(this.left, "increase");
    };
    ScrollControlls.prototype.DisIncreaseScroll = function () {
        this.Scroller(this.right, "discrease");
    };
    return ScrollControlls;
}());
//============= ScrollControlls || Class================>
var scroll_controlls = new ScrollControlls();
scroll_controlls.IncreaseScroll();
scroll_controlls.DisIncreaseScroll();
//============= ScrollControlls || Class================>
var Filter = /** @class */ (function () {
    function Filter() {
    }
    Filter.prototype.HiddeFilter = function (elements, products, text) {
        var ele = document.querySelectorAll(elements + " .options ul li a");
        var pro = document.querySelectorAll("" + products);
        var text_hidden_ele = document.querySelector(text + " .text_hidden_ele");
        ele.forEach(function (e) {
            e.addEventListener('click', function () {
                var lengther = 0;
                pro.forEach(function (s) {
                    if (s.getAttribute("id") == e.getAttribute("id") || e.getAttribute("id") == 'all') {
                        s.style.display = "block";
                        s.removeAttribute('hidden');
                    }
                    else {
                        s.style.display = "none";
                        s.setAttribute('hidden', 'hide');
                    }
                });
                document.querySelectorAll("" + products).forEach(function (e) {
                    if (e.getAttribute('hidden')) {
                        lengther += 1;
                    }
                    else {
                        lengther -= 1;
                    }
                });
                if (products == ".card") {
                    if (lengther - 4 == ele.length) {
                        text_hidden_ele.style.display = 'block';
                    }
                    else {
                        text_hidden_ele.style.display = 'none';
                    }
                }
                else {
                    if (lengther == ele.length + 1) {
                        text_hidden_ele.style.display = 'block';
                    }
                    else {
                        text_hidden_ele.style.display = 'none';
                    }
                }
            });
        });
    };
    return Filter;
}());
//============= ScrollControlls || Class================>
var filter = new Filter();
filter.HiddeFilter('#product_2', ".card", ".cards");
filter.HiddeFilter('#product_1', ".product-cont", ".products-cont");
//============= ScrollControlls || Class================>
var Sign = /** @class */ (function () {
    function Sign() {
        this.btns = document.querySelectorAll('#sign .content .btn button');
        this.forms = document.querySelectorAll('#sign .content form');
        this.close = document.querySelector('#sign .content .close');
        this.sign = document.querySelector('#sign');
        this.user = document.querySelector('.user');
    }
    Sign.prototype.ShowHidden = function () {
        var _this = this;
        this.btns.forEach(function (e) {
            e.addEventListener('click', function (e) {
                if (e.target.innerHTML == "Sign in") {
                    _this.forms.forEach(function (s) {
                        s.classList.remove('active_from');
                    });
                    _this.forms[1].classList.add('active_from');
                }
                else {
                    _this.forms.forEach(function (s) {
                        s.classList.remove('active_from');
                    });
                    _this.forms[0].classList.add('active_from');
                }
                if (e.target.classList.contains('active-btn-form')) {
                    _this.btns.forEach(function (e) {
                        e.classList.add('active-btn-form');
                    });
                    e.target.classList.remove('active-btn-form');
                }
                else {
                    _this.btns.forEach(function (e) {
                        e.classList.remove('active-btn-form');
                    });
                    e.target.classList.add('active-btn-form');
                }
            });
        });
        this.user.addEventListener('click', function () {
            _this.sign.classList.add('active_sign');
        });
        this.close.addEventListener('click', function () {
            _this.sign.classList.remove('active_sign');
        });
    };
    return Sign;
}());
//============= Sign || Class================>
var sign = new Sign();
sign.ShowHidden();
//============= Sign || Class================>
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.cont = document.querySelector("#shopping_cart .cont");
        this.shopping_cart = document.querySelector('#shopping_cart');
        this.close = document.querySelector("#shopping_cart .cont .close");
        this.shop_car = document.querySelector(".controlls .shop-car");
        this.total = document.querySelector('.total');
        this.add_1 = document.querySelectorAll(".payment #add");
        this.add_2 = document.querySelectorAll(".cont_2 #add");
        this.num_of_products = document.querySelector('.num_of_products');
        this.num = 0;
        this.total_price = 0;
    }
    ShoppingCart.prototype.Adding_1 = function () {
        var _this = this;
        this.shop_car.addEventListener('click', function () {
            _this.shopping_cart.classList.add('active_shopping_card');
        });
        this.close.addEventListener('click', function () {
            _this.shopping_cart.classList.remove('active_shopping_card');
            console.log(_this.close);
        });
        this.add_1.forEach(function (e) {
            e.addEventListener("click", function () {
                var data = [
                    e.parentElement.parentElement.children[0].children[0].getAttribute('src'),
                    e.parentElement.parentElement.children[1].children[0].innerText,
                    e.parentElement.parentElement.children[1].children[1].innerText,
                    e.parentElement.parentElement.children[2].children[0].children[0].innerText
                ];
                _this.num++;
                _this.num_of_products.innerHTML = _this.num.toString();
                _this.cont.insertAdjacentHTML('beforeend', "\n                    <div class=\"detailes\">\n                        <img src=\"" + data[0] + "\" alt=\"\"/>\n                        <div class=\"content\">\n                            <div class=\"price\">" + data[3] + "</div>\n                            <div class=\"line\"></div>\n                            <div class=\"title\">" + data[2] + "</div>\n                            <div class=\"line\"></div>\n                            <div class=\"type\">" + data[1] + "</div>\n                            <span id=\"deleter_product\">X</span>\n                        </div>\n                    </div>\n                ");
                _this.total_price += Number(data[3].split('$')[1]);
                _this.total.innerHTML = _this.total_price.toString() + "$";
            });
        });
    };
    ShoppingCart.prototype.Adding_2 = function () {
        var _this = this;
        this.add_2.forEach(function (e) {
            e.addEventListener("click", function () {
                var data = [
                    e.parentElement.parentElement.parentElement.children[0].children[0].getAttribute('src'),
                    e.parentElement.parentElement.parentElement.children[1].children[0].innerText,
                    e.parentElement.parentElement.parentElement.children[1].children[1].innerText,
                    e.parentElement.parentElement.parentElement.children[2].children[0].children[0].innerText
                ];
                _this.num++;
                _this.num_of_products.innerHTML = _this.num.toString();
                _this.cont.insertAdjacentHTML('beforeend', "\n                    <div class=\"detailes\">\n                        <img src=\"" + data[0] + "\" alt=\"\"/>\n                        <div class=\"content\">\n                            <div class=\"price\">" + data[3] + "</div>\n                            <div class=\"line\"></div>\n                            <div class=\"title\">" + data[2] + "</div>\n                            <div class=\"line\"></div>\n                            <div class=\"type\">" + data[1] + "</div>\n                            <span id=\"deleter_product\">X</span>\n                        </div>\n                    </div>\n                ");
                _this.total_price += Number(data[3].split('$')[1]);
                _this.total.innerHTML = _this.total_price.toString() + "$";
            });
        });
    };
    return ShoppingCart;
}());
//============= Sign || Class================>
var shoppingcart = new ShoppingCart();
shoppingcart.Adding_1();
shoppingcart.Adding_2();
//============= Sign || Class================>
