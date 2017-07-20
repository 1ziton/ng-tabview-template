/**
 * Created by xiaoluo on 2017/7/18.
 */
export let priceData = [ //价格管理
    {
        "link": "/modules/sales-price",
        "name": "销售定价",
        "icon": "",
        "children": [
            {
                "link": "/modules/sales-price/transport-fee",
                "active": true,
                "name": "运输费",
                "icon": ""
            },
            {
                "link": "/modules/sales-price/delivery-fee",
                "name": "配送费",
                "icon": ""
            },
            {
                "link": "/modules/sales-price/install-fee",
                "name": "安装费",
                "icon": ""
            }
            ,
            {
                "link": "/modules/sales-price/insurance-fee",
                "name": "保价费",
                "icon": ""
            }
        ]
    },
    {
        "link": "/modules/sales-strategy",
        "name": "销售策略",
        "icon": "",
        "children": [
            {
                "link": "/modules/sales-strategy/discount-package",
                "name": "优惠套餐",
                "icon": " "
            },
            {
                "link": "/modules/sales-strategy/customer-discount",
                "name": "客户折扣",
                "icon": " "
            }
        ]
    }
];
export let financeData = [ //财务中心
    {
        "link": "/modules/collect-manage",
        "name": "收款管理",
        "icon": "",
        "children": [
            {
                "link": "/modules/collect-manage/monthly-account",
                "active": true,
                "name": "月结对账",
                "icon": ""
            },
            {
                "link": "/modules/collect-manage/bill-collection",
                "name": "账单收款",
                "icon": ""
            }
        ]
    },
    {
        "link": "/modules/account-manage",
        "name": "账户管理",
        "icon": "",
    }
    ,
    {
        "link": "/modules/balance-recharge",
        "name": "余额充值",
        "icon": "",
    }
    ,
    {
        "link": "/modules/balance-report",
        "name": "应收余额表",
        "icon": "",
    }
];
