class Activtiy{
    controlls: HTMLElement;
    search: HTMLElement;
    toggle: HTMLElement;
    header: HTMLElement;
    nav: HTMLElement;
    slide_show: HTMLElement;
    options_list: HTMLElement;
    options: NodeList;
    options_header: NodeList;
    
    constructor() {
        this.header = document.querySelector('header')!;
        this.controlls = document.querySelector('header .controlls')!;
        this.search = document.querySelector('header .search')!;
        this.toggle = document.querySelector('header .toggle')!;
        this.nav = document.querySelector('nav')!;
        this.slide_show = document.querySelector('#product_1 .options .slide-show')!;
        this.options_list = document.querySelector('.options ul')!;
        this.options = document.querySelectorAll('.options')!;
        this.options_header = document.querySelectorAll('.options h1')!;
    }
    ActiveHeaderEle() {
        this.toggle.addEventListener('click', _ => {
            this.search.classList.toggle('active-sm');
            this.controlls.classList.toggle('active-md');
            this.controlls.classList.toggle('active-sm');
            this.nav.classList.toggle('active');
        })
    }
    ActiveHeaderScroll() {
        window.addEventListener('scroll', _ => {
            if (window.scrollY !== 0) {
                this.header.classList.add('active-header');

            } else {
                this.header.classList.remove('active-header');
            }
        })
    }
    ActiveOpions() {
        this.options_header.forEach(e => {
            let ele = e as HTMLElement;
            ele.addEventListener('click', _ => {
                if (window.innerWidth < 766) {
                    this.options.forEach(s => {
                        let ele = s as HTMLElement;
                        let span_content = ele.children[0].children[0];                    
                        ele.children[1].classList.toggle('slideOption')
                        span_content.innerHTML == "+" ? span_content.innerHTML = "-" : span_content.innerHTML = "+";
    
                    })
                }
            })
        })        
    }
}
//============= Activity || Class================>
const activtiy = new Activtiy();
activtiy.ActiveHeaderEle();
activtiy.ActiveHeaderScroll();
activtiy.ActiveOpions();
//============= Activity || Class================>
class Animations{
    Animater(img: HTMLElement, sec: HTMLElement) {
        sec.style.display = "none";
        let srcs = [
            './images/load/1.svg',
            './images/load/2.svg',
            './images/load/3.svg',
            './images/load/4.svg'
        ];
        let start = 1;
        window.addEventListener('click', _ => {
            setInterval(() => {
                if (start < srcs.length) {
                    img.setAttribute('src', srcs[start]);
                    start++;
                } else {
                    sec.style.display = "none";
                }
            },1000)
        })
    }
}
//============= Animation || Class================>
const animation = new Animations();
animation.Animater(document.querySelector('#slider_img')!,document.querySelector('#animate')!);
//============= Animation || Class================>

class ScrollControlls{
    left:NodeList;
    right:NodeList;

    constructor() {
        this.left = document.querySelectorAll('.left')!;
        this.right = document.querySelectorAll('.right')!;
    }


    Scroller(dir:any,dis:any) {
        dir.forEach((e:HTMLElement) => {
            e.addEventListener('click', _ => {
                let ele = e.parentElement?.children[1]!;
                if (dis == "increase") {
                    ele.scrollLeft -= ele.children[0].scrollWidth + 30; 
                } else {
                    ele.scrollLeft += ele.children[0].scrollWidth + 30; 
                }
            })
        })
    }


    IncreaseScroll() {
        this.Scroller(this.left,"increase")
    }
    DisIncreaseScroll() {
        this.Scroller(this.right,"discrease")
    }
}

//============= ScrollControlls || Class================>
const scroll_controlls = new ScrollControlls();

scroll_controlls.IncreaseScroll();
scroll_controlls.DisIncreaseScroll();
//============= ScrollControlls || Class================>


class Filter{
    HiddeFilter(elements: any, products: any,text:any) {
        let ele = document.querySelectorAll(`${elements} .options ul li a`)! as NodeList;
        let pro = document.querySelectorAll(`${products}`)! as NodeList;   
        let text_hidden_ele = document.querySelector(`${text} .text_hidden_ele`)! as HTMLElement;
        ele.forEach((e: any)=>  {
            e.addEventListener('click', () => {
                let lengther = 0;
                pro.forEach((s: any) => {
                    if (s.getAttribute("id") == e.getAttribute("id") || e.getAttribute("id") == 'all') {
                        s.style.display = "block";
                        s.removeAttribute('hidden');
                    } else {
                        s.style.display = "none";
                        s.setAttribute('hidden','hide')
                    }
                })
                document.querySelectorAll(`${products}`).forEach(e => {
                    if (e.getAttribute('hidden')) {
                        lengther += 1;
                    } else {
                        lengther -= 1;
                  }
                })
                
                if (products == ".card") {
                    if (lengther-4 == ele.length) {
                        text_hidden_ele.style.display = 'block';
                    } else {
                       text_hidden_ele.style.display = 'none';
                    }
                }else{
                    if (lengther == ele.length+1) {
                        text_hidden_ele.style.display = 'block';
                    } else {
                       text_hidden_ele.style.display = 'none';
                    }
                }

            })
        })
        
        
    }
}

//============= ScrollControlls || Class================>
const filter = new Filter();
filter.HiddeFilter('#product_2',".card",".cards");
filter.HiddeFilter('#product_1',".product-cont",".products-cont");
//============= ScrollControlls || Class================>


class Sign{
    btns: NodeList;
    forms: any;
    close: HTMLElement;
    sign: HTMLElement;
    user: HTMLElement;

    constructor() {
        this.btns = document.querySelectorAll('#sign .content .btn button');
        this.forms = document.querySelectorAll('#sign .content form');
        this.close = document.querySelector('#sign .content .close')!;
        this.sign = document.querySelector('#sign')!;
        this.user = document.querySelector('.user') !;
    }




    ShowHidden() {
        this.btns.forEach((e) => {
            e.addEventListener('click', (e: any) => {
                if (e.target.innerHTML == "Sign in") {
                    this.forms.forEach((s: any) => {
                        s.classList.remove('active_from');
                    })
                    this.forms[1].classList.add('active_from')
                } else {
                    this.forms.forEach((s: any) => {
                        s.classList.remove('active_from');
                    })
                    this.forms[0].classList.add('active_from')
                }
                if (e.target.classList.contains('active-btn-form')) {
                    this.btns.forEach((e:any) => {
                        e.classList.add('active-btn-form');
                    })
                    e.target.classList.remove('active-btn-form')
                } else {
                    this.btns.forEach((e:any) => {
                        e.classList.remove('active-btn-form');
                    })
                    e.target.classList.add('active-btn-form')
                }
            })
        })

        this.user.addEventListener('click', () => {
            this.sign.classList.add('active_sign')
        })
        this.close.addEventListener('click', () => {
            this.sign.classList.remove('active_sign')
        })
    }
}


//============= Sign || Class================>
const sign = new Sign();
sign.ShowHidden();
//============= Sign || Class================>
