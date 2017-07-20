import {Component, Output, OnInit, Input, EventEmitter} from '@angular/core';
import {Router} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";
@Component({
    selector: 'app-navigation-menu',
    templateUrl: './navigation-menu.component.html',
    styleUrls: ['./navigation-menu.component.scss'],
    animations: [trigger('menuBarWidthSpread', [
        state("show", style({
            width: '175px'
        })),
        state("hide", style({
            width: '45px'
        })),
        transition('hide=>show', animate('180ms ease-in')),
        transition('show=>hide', animate('180ms ease-in'))
    ])]
})
export class NavigationMenuComponent implements OnInit {
    flag: boolean = true;
    //一级菜单是否变宽
    @Input('widthSpread') widthSpread: boolean;
    //二级菜单的内容显示
    @Input('menuData') menuData: any[];

    @Output()
    menuClickHandler: EventEmitter<any> = new EventEmitter<any>();

    //一级菜单点击颜色变色（改变其class）
    isMenuClick: any[] = [];
    isTopMenuClick: any[] = [];
    isStarClick: any[] = [];

    constructor(public router: Router) {
    }

    ngOnInit() {
        for (let i = 0; i < this.menuData.length; i++) {
            this.isTopMenuClick[i] = false;
            this.isStarClick[i] = false;
        }
        for (let j = 0; j < this.menuData[0].children.length; j++) {
            this.isMenuClick[j] = false;
        }
        this.isTopMenuClick[0] = true;
    }

    showPanel(e, index, link) {
        e.stopPropagation();
        let tar = e.target;
        let tarUl = $(tar).siblings('ul');
        let allUL = $('.navigation > li > ul');
        if (this.flag) {
            this.flag = false;
            this.router.navigate([link]);
            for (let i = 0; i < allUL.length; i++) {
                allUL[i].style.height = 0 + 'px';
                if (tarUl.height() === 0) {
                    tarUl.css({'height': tarUl.children().length * 40})
                } else {
                    tarUl.css({'height': 0})
                }
            }

            for (let i = 0; i < this.isTopMenuClick.length; i++) {
                this.isTopMenuClick[i] = false;
                this.isMenuClick[i] = false;
                this.isMenuClick[0] = true;
                if (i === index) {
                    this.isTopMenuClick[i] = true;
                }
            }

            for (let i = 0; i < this.isStarClick.length; i++) {
                this.isStarClick[i] = false;
                if (i === index) {
                    this.isStarClick[i] = true
                }
                ;
            }

            if ($(tar).siblings('i').hasClass('star')) {
                $(tar).siblings('i').removeClass('star')
            } else {
                $(tar).siblings('i').addClass('star')
            }

            setTimeout(() => {
                this.flag = true;
            }, 400)
        }

    }

    menuClick(index, menu) {
        for (let i = 0; i < this.isMenuClick.length; i++) {
            this.isMenuClick[i] = false;
            if (i === index) {
                this.isMenuClick[i] = true;
            }
        }
        this.menuClickHandler.emit(menu);
    }
}
