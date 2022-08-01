"use strict";
class Activtiy {
    constructor() {
        this.header = document.querySelector('header');
        this.controlls = document.querySelector('header .controlls');
        this.search = document.querySelector('header .search');
        this.toggle = document.querySelector('header .toggle');
        this.nav = document.querySelector('nav');
        this.slide_show = document.querySelector('#product_1 .options .slide-show');
        this.options_list = document.querySelector('.options ul');
        this.options = document.querySelectorAll('.options');
    }
    ActiveHeaderEle() {
        this.toggle.addEventListener('click', _ => {
            this.search.classList.toggle('active-sm');
            this.controlls.classList.toggle('active-md');
            this.controlls.classList.toggle('active-sm');
            this.nav.classList.toggle('active');
        });
    }
    ActiveHeaderScroll() {
        window.addEventListener('scroll', _ => {
            if (window.scrollY !== 0) {
                this.header.classList.add('active-header');
            }
            else {
                this.header.classList.remove('active-header');
            }
        });
    }
    ActiveOpions() {
        this.options.forEach(e => {
            let ele = e;
            ele.addEventListener('click', _ => {
                if (window.innerWidth < 766) {
                    let span_content = ele.children[0].children[0];
                    ele.children[1].classList.toggle('slideOption');
                    span_content.innerHTML == "+" ? span_content.innerHTML = "-" : span_content.innerHTML = "+";
                }
            });
        });
    }
}
//============= Activity || Class================>
const activtiy = new Activtiy();
activtiy.ActiveHeaderEle();
activtiy.ActiveHeaderScroll();
activtiy.ActiveOpions();
//============= Activity || Class================>
class Animations {
    Animater(img, sec) {
        let srcs = [
            './images/load/1.svg',
            './images/load/2.svg',
            './images/load/3.svg',
            './images/load/4.svg'
        ];
        let start = 1;
        window.addEventListener('load', _ => {
            setInterval(_ => {
                if (start < srcs.length) {
                    img.setAttribute('src', srcs[start]);
                    start++;
                }
                else {
                    sec.style.display = "none";
                }
            }, 1000);
        });
    }
}
//============= Animation || Class================>
const animation = new Animations();
animation.Animater(document.querySelector('#slider_img'), document.querySelector('#animate'));
//============= Animation || Class================>
