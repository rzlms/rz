// انتظار تحميل المستند بالكامل
document.addEventListener('DOMContentLoaded', function() {
    // تحديد العناصر
    const ctaButton = document.querySelector('.cta-button');
    const featureCards = document.querySelectorAll('.feature-card');
    const navLinks = document.querySelectorAll('nav a');
    
    // إضافة تأثيرات ظهور للعناصر
    animateOnScroll();
    
    // إضافة مستمع حدث للزر الرئيسي
    ctaButton.addEventListener('click', function() {
        alert('مرحبًا بك في المشروع الجديد! نحن سعداء بانضمامك.');
    });
    
    // إضافة تأثيرات للبطاقات عند المرور عليها
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // إضافة تأثير نشط للروابط في القائمة
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // منع السلوك الافتراضي للرابط
            
            // إزالة الفئة النشطة من جميع الروابط
            navLinks.forEach(item => item.classList.remove('active'));
            
            // إضافة الفئة النشطة للرابط المضغوط
            this.classList.add('active');
            
            // هنا يمكن إضافة منطق التنقل بين الصفحات
            const targetSection = this.textContent.toLowerCase();
            console.log(`التنقل إلى قسم: ${targetSection}`);
        });
    });
});

// دالة لإضافة تأثيرات ظهور للعناصر عند التمرير
function animateOnScroll() {
    const elements = document.querySelectorAll('.hero, .feature-card');
    
    // إضافة فئة للعناصر المرئية عند التمرير
    function checkScroll() {
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150; // المسافة التي يجب أن يكون فيها العنصر مرئيًا
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }
    
    // تطبيق الفحص عند التمرير
    window.addEventListener('scroll', checkScroll);
    
    // تطبيق الفحص عند تحميل الصفحة
    checkScroll();
}

// إضافة وظيفة الوضع الليلي/النهاري
function setupDarkMode() {
    // سيتم تنفيذ هذه الوظيفة في المستقبل
    console.log('وظيفة الوضع الليلي/النهاري ستضاف قريبًا');
}

// إضافة وظيفة تغيير اللغة
function setupLanguageToggle() {
    // سيتم تنفيذ هذه الوظيفة في المستقبل
    console.log('وظيفة تغيير اللغة ستضاف قريبًا');
}

// إضافة CSS لتأثيرات الظهور
const style = document.createElement('style');
style.textContent = `
    .hero, .feature-card {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .hero.visible, .feature-card.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    .feature-card:nth-child(1) { transition-delay: 0.1s; }
    .feature-card:nth-child(2) { transition-delay: 0.2s; }
    .feature-card:nth-child(3) { transition-delay: 0.3s; }
    .feature-card:nth-child(4) { transition-delay: 0.4s; }
    
    nav a.active {
        color: var(--primary-color);
        font-weight: 700;
    }
    
    nav a.active::after {
        width: 100%;
        right: auto;
        left: 0;
    }
`;
document.head.appendChild(style);