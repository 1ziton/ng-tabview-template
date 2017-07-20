import {Component, ViewChild, AfterViewInit, animate, trigger, state, transition, style, OnInit} from "@angular/core";
import {AppConfig} from "../app.config";
import {priceData, financeData} from "../../assets/mock-data/navigator";
import {HeaderTopComponent} from "app/modules/common/header/header-top.component";
import {AuthService} from "app/shared/services/auth-service/auth.service";
import {TabViewService} from "app/shared/services/tabview.service";

declare const introJs: any;

@Component({
    selector: 'ips-root',
    templateUrl: 'boss.component.html',
    animations: [trigger('submenushow', [
        state("show", style({
            left: '40px'
        })),
        state("hide", style({
            left: '-139px'
        })),
        transition('hide=>show', animate('180ms ease-in')),
        transition('show=>hide', animate('180ms ease-in'))
    ])
    ]
})
export class BossHomeComponent implements OnInit {


    //点击menu-bar宽度变化
    widthSpread = false;
    priceData: any[]; //二级菜单
    financeData: any[]; //二级菜单
    select: boolean = true;
    public containerLeft: number = 175;


    @ViewChild(HeaderTopComponent)
    public header: HeaderTopComponent;

    @ViewChild('tabview')
    public tabview: any;

    headerTop: boolean;

    private tabs: any[] = [];
    private tabsComponent: any[] = [];
    private tabActiveIndex: number = 0;

    constructor(public appConfig: AppConfig,
                public tabViewService: TabViewService,
                public authService: AuthService) {
    }

    ngOnInit(): void {
        this.tabsComponent = this.tabViewService.getTabs();
        this.tabs.push(this.tabsComponent[0])
        //监听首页跳转高亮菜单左侧
        // window['epInstance'].unbind('route_change_at_home');
        // window['epInstance'].on('route_change_at_home', (path: any[]) => {
        //     // this.navPerson(path);
        // });
        this.priceData = priceData;
        this.financeData = financeData;
    }

    /**
     * 让菜单栏高亮跟浏览器url一致显示
     */
    // ngAfterViewInit(): void {
    //     let module = location.pathname.split('/');
    //     //如果在首页，则返回
    //     let lastPathName = module[module.length - 1];
    //     let menuPath = module[2];
    //     let subMenuPath = module[3] || '';
    //
    //     if (lastPathName === 'home' || location.pathname === '/') {
    //         this.menuBar.isMenuClick[0] = true;
    //         // return;
    //     } else {
    //         for (let i = 0, len = this.menuBar.menuContent.length; i < len; i++) {
    //             this.menuBar.isMenuClick[i] = false;
    //             let arr = this.menuBar.menuContent[i].routerLink.split('/');
    //             //console.log(arr)
    //             if (arr[2] === menuPath) {//定位到模块高亮
    //                 this.menuBar.isMenuClick[i] = true;
    //                 this.changeMenu(this.menuBar.menuContent[i].menuIndex, 1);
    //                 let subLen = this.appConfig.menuContent[this.menuBar.menuContent[i].menuIndex][1].length;
    //                 for (let j = 0; j < subLen; j++) {
    //                     if (this.appConfig.menuContent[this.menuBar.menuContent[i].menuIndex][1][j] === subMenuPath) {//定位到子菜单高亮
    //                         this.subMenu.redirectSub(j);
    //                         break;
    //                     }
    //                 }
    //                 break;
    //             }
    //         }
    //     }
    //     /**
    //      * 如果用户登录并且是首次进入系统，展示系统介绍
    //      */
    //     if (localStorage.getItem('currentUser') && localStorage.getItem('introjs_flag') !== 'introjs') {
    //         this.startIntro();
    //     }
    // }

    headerHome(hea) {
        this.headerTop = hea;
    }

    setContentStyle() {
        let classObj = {
            'width': ' calc( 100% - ' + this.containerLeft + 'px )',
            'left': this.containerLeft + 'px',
        };
        return classObj;
    }

    widthChange(isWidthChange: boolean) {
        this.widthSpread = isWidthChange;
        if (this.widthSpread === false) {
            this.containerLeft = this.containerLeft - 130;
        } else {
            this.containerLeft = this.containerLeft + 130;
        }
    }

    /**
     * 菜单点击处理事件
     * @param $event
     */
    menuClickHandler($event) {
        let isOpen = false;
        this.tabs.forEach((tab, index) => {
            if (tab.data.name === $event.name) {
                this.tabActiveIndex = index;
                isOpen = true;
            }
        });
        if (!isOpen) {
            this.tabsComponent.forEach((tab) => {
                if (tab.data.name === $event.name) {
                    let selectedTab = this.tabview.findSelectedTab();
                    if (selectedTab) {
                        selectedTab.selected = false;
                    }
                    this.tabs.push(tab);
                    setTimeout(() => {
                        this.tabActiveIndex = this.tabs.length - 1;
                    }, 100)
                }
            });

        }
    }

    /**
     * tab关闭触发事件
     * @param $event
     */
    handlerTabClose($event) {
        let index = $event.index;
        this.tabs.splice(index, 1);
    }

    //点击一级菜单切换二级菜单
    changeSubMenu($event) {
        if ($event === 'price') {
            this.select = true;
        } else {
            this.select = false;
        }
    }

    //导航到个人中心||首页
    navPerson(path) {
        //     if (this.subMenu.subMenuState === 'show') {//导航到个人中心时，隐藏子菜单
        //         let hideSub = document.getElementById('hide-sub');
        //         this.subMenu.hideSubMenu(null, 'mark');
        //     }
        //     for (let i = 0, len = this.menuBar.isMenuClick.length; i < len; i++) {
        //         this.menuBar.isMenuClick[i] = false;
        //     }
        //     //如果为首页
        //     if (path[0] === '/home') {
        //         this.menuBar.isMenuClick[0] = true;
        //         this.changeMenu('home-5', 1);
        //     } else if (path[0]) {
        //         this.menuBar.isMenuClick[1] = true;
        //         this.changeMenu(path[0], path[1]);
        //     }
    }

    /**
     * introduction
     */
    // startIntro() {
    //     let intro = introJs();
    //     intro.setOption("nextLabel", " 下一步 ");
    //     intro.setOptions({
    //         prevLabel: " 上一步 ",
    //         nextLabel: " 下一步 ",
    //         skipLabel: " 跳过 ",
    //         doneLabel: " 完成 ",
    //         showStepNumbers: false,
    //         exitOnOverlayClick: false,
    //         exitOnEsc: true,
    //         steps: [
    //             {
    //                 intro: "欢迎光临，点击“下一步”查看系统使用介绍!"
    //             },
    //             {
    //                 element: document.querySelector('#header-top'),
    //                 intro: "头部工具栏",
    //                 position: 'bottom-middle-aligned'
    //             },
    //             {
    //                 element: document.querySelector('#menu-bar'),
    //                 intro: "一级菜单",
    //                 position: 'right'
    //             },
    //             {
    //                 element: document.querySelector('#pull-down-menu'),
    //                 intro: '点击切换折叠一级菜单',
    //                 position: 'bottom'
    //             }, {
    //                 element: document.querySelector('#sub-menu-bar'),
    //                 intro: '二级菜单',
    //                 position: 'right'
    //             }, {
    //                 element: document.querySelector('#header-search-input'),
    //                 intro: '综合搜索框',
    //                 position: 'right'
    //             }, {
    //                 element: document.querySelector('#come-back-home'),
    //                 intro: '返回首页按钮',
    //                 position: 'right'
    //             }, {
    //                 element: document.querySelector('#header-right'),
    //                 intro: '个人设置',
    //                 position: 'left'
    //             }, {
    //                 element: document.querySelector('#im_ico'),
    //                 intro: 'IM 聊天快速入口',
    //                 position: 'left'
    //             }, {
    //                 element: document.querySelector('#im_new_window'),
    //                 intro: '打开IM 聊天独立新窗口',
    //                 position: 'left'
    //             }, {
    //                 element: document.querySelector('#im_box_list'),
    //                 intro: 'IM 聊天菜单导航',
    //                 position: 'left'
    //             },
    //             {
    //                 element: '#step5',
    //                 intro: '介绍结束，欢迎使用！'
    //             }
    //         ]
    //     }).onbeforechange(targetElement => {
    //         if (targetElement.id === "pull-down-menu") {
    //             this.header.menuWidthChange();
    //         }
    //
    //
    //     }).onafterchange(targetElement => {
    //
    //         if (targetElement.id === "pull-down-menu") {
    //             this.menuBar.menuclick(1, "/modules/adjustable-manage", "adjustable-0");
    //         } else if (targetElement.id === "come-back-home") {
    //             this.menuBar.menuclick(0, "/modules/home", "home-7");
    //             // this.header.gotoPersonal()
    //         }
    //
    //     }).oncomplete(() => {
    //     });
    //     intro.start();
    //     localStorage.setItem('introjs_flag', 'introjs');
    // }
}
