// 主题切换功能
document.addEventListener('DOMContentLoaded', function() {
    // 创建主题切换按钮
    const themeToggle = document.createElement('div');
    themeToggle.className = 'theme-toggle ins-glass';
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    document.body.appendChild(themeToggle);

    // 检查本地存储中的主题设置
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    // 切换主题
    themeToggle.addEventListener('click', function() {
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });

    // 添加页面过渡动画
    document.body.classList.add('ins-fade-in');

    // 为所有卡片添加动画效果
    const cards = document.querySelectorAll('.glassmorphism');
    cards.forEach(card => {
        card.classList.add('ins-glass');
    });

    // 为所有按钮添加Instagram风格
    const buttons = document.querySelectorAll('.glassmorphism-button');
    buttons.forEach(button => {
        button.classList.add('ins-button');
    });

    // 为导航栏添加Instagram风格
    const navs = document.querySelectorAll('.glassmorphism-nav');
    navs.forEach(nav => {
        nav.classList.add('ins-nav');
    });

    // 更新颜色样式
    const incomeTexts = document.querySelectorAll('.text-green-500');
    incomeTexts.forEach(text => {
        text.classList.add('income-text');
    });

    const expenseTexts = document.querySelectorAll('.text-red-500');
    expenseTexts.forEach(text => {
        text.classList.add('expense-text');
    });

    const balanceTexts = document.querySelectorAll('.text-blue-500');
    balanceTexts.forEach(text => {
        text.classList.add('balance-text');
    });
});