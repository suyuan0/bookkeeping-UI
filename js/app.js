// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 添加页面切换动画
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            // 如果是内部链接，添加过渡动画
            if (this.getAttribute('href').startsWith('./')) {
                const currentPage = document.querySelector('.container');
                currentPage.classList.add('fade-out');
            }
        });
    });

    // 初始化页面加载动画
    const container = document.querySelector('.container');
    if (container) {
        container.classList.add('fade-in');
    }

    // 初始化记账按钮
    const addTransactionBtn = document.querySelector('.glassmorphism-button');
    if (addTransactionBtn) {
        addTransactionBtn.addEventListener('click', function() {
            window.location.href = './add-transaction.html';
        });
    }

    // 初始化悬浮添加按钮
    const floatingAddBtn = document.querySelector('.fixed.bottom-20.right-6 button');
    if (floatingAddBtn) {
        floatingAddBtn.addEventListener('click', function() {
            window.location.href = './add-transaction.html';
        });
    }

    // 初始化筛选按钮
    const filterBtns = document.querySelectorAll('.btn-outline, .btn-primary');
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // 移除所有按钮的primary样式
                filterBtns.forEach(b => {
                    b.classList.remove('btn-primary');
                    b.classList.add('btn-outline');
                });
                // 为当前点击的按钮添加primary样式
                this.classList.remove('btn-outline');
                this.classList.add('btn-primary');
            });
        });
    }

    // 初始化设置页面的点击效果
    const settingItems = document.querySelectorAll('.hover\\:bg-gray-50');
    if (settingItems.length > 0) {
        settingItems.forEach(item => {
            item.addEventListener('click', function() {
                // 这里可以添加点击设置项的逻辑
                console.log('设置项被点击:', this.querySelector('span').textContent);
            });
        });
    }
});

// 添加自定义动画类
document.documentElement.style.setProperty('--animate-duration', '.5s');

// 添加页面过渡动画
class PageTransition {
    constructor() {
        this.initAnimations();
    }

    initAnimations() {
        document.body.classList.add('fade-in');
    }

    fadeOut(callback) {
        document.body.classList.add('fade-out');
        setTimeout(callback, 500); // 动画持续时间
    }
}

// 全局变量
const pageTransition = new PageTransition();

// 模拟数据存储
class DataStore {
    constructor() {
        this.transactions = JSON.parse(localStorage.getItem('transactions')) || [];
        this.categories = {
            income: ['工资', '奖金', '投资', '兼职', '其他收入'],
            expense: ['餐饮', '购物', '交通', '娱乐', '居家', '医疗', '教育', '其他']
        };
    }

    addTransaction(transaction) {
        this.transactions.push(transaction);
        this.saveTransactions();
    }

    getTransactions() {
        return this.transactions;
    }

    saveTransactions() {
        localStorage.setItem('transactions', JSON.stringify(this.transactions));
    }

    getCategories(type) {
        return this.categories[type];
    }
}

// 初始化数据存储
const dataStore = new DataStore();