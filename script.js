/* ==========================================================================
   DYNAMIC CONFIGURATION (Executive Corporate Palette & Preserved Logic)
   ========================================================================== */
const CONFIG = {
    personal: {
        name: "Md. Amdadul Islam",
        titleRoles: ["Junior Network Engineer", "Junior Web Developer"],
        phone: "01537586283",
        email: "mdamdadulislam140@gmail.com",
        location: "Tejgaon, Dhaka-1215",
        bio: "I am a final-year Computer Science and Engineering student at Southeast University, passionate about Computer Networking and IT Infrastructure. I am currently building my skills in CCNA, OSI/TCP-IP, IP Subnetting, Network Security, and Network Administration. I also have experience with HTML5, CSS3, and web development. I am seeking opportunities to apply my knowledge through real-world projects and grow as a Network Engineer.",
        
        aboutTitle: "Architecting Networks & Building Smart Web Solutions",
        aboutDesc: `<p class="mb-4">
            I am <strong>MD. AMDADUL ISLAM</strong>, a final-year Computer Science &amp; Engineering student at <strong>Southeast University</strong>, Bangladesh. 
            My interests include <strong>software development, full-stack web development, AI/ML research, cybersecurity, and computer networking</strong>. 
            I enjoy turning ideas into practical software solutions and continuously improving my technical skills through hands-on projects and real-world problem solving.
        </p>
        <p class="mb-4">
            I am currently developing my expertise in <strong>web technologies, API development, software testing, Git/GitHub, and machine learning techniques</strong>, including <strong>Explainable AI (XAI)</strong> and <strong>imbalanced-data handling</strong>. 
            I am passionate about learning emerging technologies and applying them to build efficient, reliable, and impactful solutions.
        </p>`,
        
        profileImage: "Image & CV/photo.jpg",
        cvUrl: "Image & CV/CV.pdf",
        stats: {
            experience: "Aspiring Network Engineer",
            completedProjects: "2+",
            happyClients: "5+"
        }
    },
    
    socials: [
        { icon: "fa-brands fa-github", link: "https://github.com/Amdadul140" },
        { icon: "fa-brands fa-linkedin-in", link: "https://www.linkedin.com/in/md-amdadul-islam-6580933b2" },
        { icon: "fa-brands fa-facebook-f", link: "https://www.facebook.com/share/1CaBxrsPjv/" },
    ],

    educationAndCertifications: [
        {
            statusBadge: "Expected June 2027",
            institution: "Southeast University",
            title: "B.Sc. in Computer Science & Engineering",
            description: "Currently pursuing B.Sc. in Computer Science & Engineering (11th Semester). Focusing on networking, system administration, software development, and core computer science fundamentals.",
            tags: ["Networking", "Web Development", "OSI/TCP-IP", "CCNA"]
        },
        {
            statusBadge: "In Progress",
            institution: "Cisco / Self-Paced Prep",
            title: "Cisco Certified Network Associate (CCNA)",
            description: "Gaining hands-on expertise in network routing, switching protocols, IP subnetting, and secure device access and administration.",
            tags: ["Routing & Switching", "IP Subnetting", "Network Security", "TCP/IP Protocol"]
        },
        {
            statusBadge: "June 2023",
            institution: "Sit foundation bd",
            title: "Diploma in Computer Science & ICT",
            description: "Completed comprehensive practical training in web development, computer operations, hardware fundamentals, and system maintenance.",
            tags: ["Practical Web Dev", "System Training", "ICT Fundamentals"]
        },
        {
            statusBadge: "October 2023",
            institution: "UY LAB",
            title: "Professional Digital Marketing",
            description: "Acquired hands-on experience in Search Engine Optimization (SEO), digital content strategy, and online brand management and positioning.",
            tags: ["SEO", "Content Strategy", "Digital Marketing", "Brand Positioning"]
        }
    ],

    skills: [
        {
            category: "Networking & Infrastructure",
            icon: "fa-solid fa-network-wired",
            color: "from-blue-500 to-indigo-600",
            description: "Designing, configuring, and troubleshooting stable network architectures with core protocols and infrastructure standard practices.",
            tags: ["CCNA", "OSI Model", "TCP/IP", "Routing & Switching", "Subnetting", "Network Troubleshooting"],
            level: "80%"
        },
        {
            category: "Frontend Development & UI",
            icon: "fa-solid fa-code",
            color: "from-cyan-500 to-blue-600",
            description: "Creating clean, user-friendly, and visually engaging web interfaces with a strong focus on usability and responsive design.",
            tags: ["Tailwind CSS", "Bootstrap 5", "HTML5", "CSS3"],
            level: "90%"
        },
        {
            category: "Core Scripting & Logic",
            icon: "fa-brands fa-js",
            color: "from-slate-600 to-blue-700",
            description: "Proficient in modern JavaScript, asynchronous handling, DOM operations, and structuring clean core frontend logic.",
            tags: ["JavaScript", "ES6+", "Async/Fetch API", "DOM Manipulation"],
            level: "85%"
        }
    ],

    portfolio: [
        {
            title: "E-Commerce Web Application",
            category: "Laravel / Full Stack",
            image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/Amdadul140"
        },
        {
            title: "Custom News Portal Theme",
            category: "PHP / CMS",
            image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/Amdadul140"
        },
        {
            title: "Corporate Landing Page",
            category: "Tailwind CSS",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/Amdadul140"
        }
    ],

    telegramBotToken: "YOUR_TELEGRAM_BOT_TOKEN", 
    telegramChatId: "YOUR_TELEGRAM_CHAT_ID",   
    googleScriptUrl: "YOUR_GOOGLE_APPS_SCRIPT_URL"
};

/* ==========================================================================
   DOM RENDERER & LOGIC
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, once: true });
    }

    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const navBrand = document.getElementById('nav-brand');
    if (navBrand) navBrand.textContent = "Amdadul.dev";

    const heroName = document.getElementById('hero-name');
    if (heroName) heroName.textContent = CONFIG.personal.name;

    const heroBio = document.getElementById('hero-bio');
    if (heroBio) heroBio.textContent = CONFIG.personal.bio;

    const heroImg = document.getElementById('hero-img');
    if (heroImg && CONFIG.personal.profileImage) heroImg.src = CONFIG.personal.profileImage;

    const cvBtn = document.getElementById('download-cv-btn');
    if (cvBtn) {
        cvBtn.href = CONFIG.personal.cvUrl;
        cvBtn.setAttribute('download', `${CONFIG.personal.name.replace(/\s+/g, '_')}_CV.pdf`);
    }

    const statExp = document.getElementById('stat-exp');
    if (statExp) statExp.textContent = CONFIG.personal.stats.experience;

    const aboutTitle = document.getElementById('about-title');
    if (aboutTitle) aboutTitle.textContent = CONFIG.personal.aboutTitle;

    const aboutDesc = document.getElementById('about-description');
    if (aboutDesc) aboutDesc.innerHTML = CONFIG.personal.aboutDesc;

    const contactPhone = document.getElementById('contact-phone');
    if (contactPhone) contactPhone.textContent = CONFIG.personal.phone;

    const contactEmail = document.getElementById('contact-email');
    if (contactEmail) contactEmail.textContent = CONFIG.personal.email;

    const contactLocation = document.getElementById('contact-location');
    if (contactLocation) contactLocation.textContent = CONFIG.personal.location;

    // Smooth Scroll for Anchor Links (View Projects, Navigation Links, etc.)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Education & Certifications Timeline
    const eduContainer = document.getElementById('education-container');
    if (eduContainer && CONFIG.educationAndCertifications) {
        eduContainer.innerHTML = '';
        CONFIG.educationAndCertifications.forEach(item => {
            const tagsHtml = item.tags ? item.tags.map(tag => 
                `<span class="px-3.5 py-1.5 text-xs font-medium text-slate-300 bg-slate-800/80 rounded-full border border-slate-700/60 hover:border-blue-500/40 transition-all">${tag}</span>`
            ).join('') : '';

            eduContainer.innerHTML += `
                <div class="relative group" data-aos="fade-up">
                    <div class="absolute -left-[31px] md:-left-[47px] top-6 w-4 h-4 rounded-full bg-[#090d16] border-2 border-blue-500 group-hover:scale-125 group-hover:bg-blue-500 transition-all duration-300 shadow-[0_0_12px_rgba(37,99,235,0.6)]"></div>
                    <div class="p-6 md:p-8 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 hover:border-blue-500/40 transition-all duration-300 shadow-2xl">
                        <div class="flex items-center gap-3 flex-wrap mb-3">
                            <span class="px-3 py-1 text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full">
                                ${item.statusBadge}
                            </span>
                            <span class="text-sm font-medium text-slate-400">
                                ${item.institution}
                            </span>
                        </div>
                        <h3 class="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                            ${item.title}
                        </h3>
                        <p class="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                            ${item.description}
                        </p>
                        <div class="flex flex-wrap gap-2">
                            ${tagsHtml}
                        </div>
                    </div>
                </div>
            `;
        });
    }

    // Portfolio
    const portfolioContainer = document.getElementById('portfolio-container');
    if (portfolioContainer && CONFIG.portfolio) {
        portfolioContainer.innerHTML = '';
        CONFIG.portfolio.forEach(item => {
            portfolioContainer.innerHTML += `
                <div class="glassmorphism-card rounded-2xl overflow-hidden group border border-slate-800/80 hover:border-blue-500/40 transition-all duration-300 shadow-xl" data-aos="fade-up">
                    <div class="portfolio-img-container">
                        <img src="${item.image}" alt="${item.title}" class="portfolio-img">
                    </div>
                    <div class="p-6">
                        <span class="text-xs text-blue-400 font-semibold uppercase tracking-wider">${item.category}</span>
                        <h3 class="text-xl font-bold font-heading text-white mt-1 mb-4">${item.title}</h3>
                        <div class="flex space-x-4">
                            <a href="${item.liveUrl}" target="_blank" class="flex-1 gradient-btn py-2 text-center rounded-xl text-sm font-semibold text-white shadow-md">
                                Live Demo <i class="fa-solid fa-arrow-up-right-from-square ml-1"></i>
                            </a>
                            <a href="${item.githubUrl}" target="_blank" class="w-10 h-10 glassmorphism rounded-xl flex items-center justify-center text-white hover:text-blue-400 transition-colors border border-slate-700/60">
                                <i class="fa-brands fa-github text-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    // Typing Effect Logic
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.getElementById('typing-text');

    function typeEffect() {
        if (!typingElement) return;

        const roles = CONFIG.personal.titleRoles || ["Junior Network Engineer"];
        const currentRole = roles[roleIndex].trim();

        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2200);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeEffect, 400);
        } else {
            setTimeout(typeEffect, isDeleting ? 40 : 90);
        }
    }
    typeEffect();

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
        });
    }

    // Contact Form Handler
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = document.getElementById('submit-btn');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = `<span>Sending...</span> <i class="fa-solid fa-spinner animate-spin"></i>`;
            }

            const firstName = document.getElementById('form-first-name')?.value || '';
            const lastName = document.getElementById('form-last-name')?.value || '';
            const phone = document.getElementById('form-phone')?.value || '';
            const email = document.getElementById('form-email')?.value || '';
            const service = document.getElementById('form-service')?.value || '';
            const message = document.getElementById('form-message')?.value || '';

            const telegramMsg = `<b>New Contact Form Submission!</b>\n\n<b>Name:</b> ${firstName} ${lastName}\n<b>Phone:</b> ${phone}\n<b>Email:</b> ${email}\n<b>Service:</b> ${service}\n<b>Message:</b> ${message}`;

            try {
                if (CONFIG.telegramBotToken !== "YOUR_TELEGRAM_BOT_TOKEN") {
                    await fetch(`https://api.telegram.org/bot${CONFIG.telegramBotToken}/sendMessage`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            chat_id: CONFIG.telegramChatId,
                            text: telegramMsg,
                            parse_mode: 'HTML'
                        })
                    });
                }

                if (CONFIG.googleScriptUrl !== "YOUR_GOOGLE_APPS_SCRIPT_URL") {
                    await fetch(CONFIG.googleScriptUrl, {
                        method: 'POST',
                        mode: 'no-cors',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ name: `${firstName} ${lastName}`, phone, email, service, message })
                    });
                }

                if (formStatus) {
                    formStatus.textContent = "Thank you! Your message has been sent successfully.";
                    formStatus.className = "text-center text-sm font-medium mt-2 text-emerald-400";
                }
                contactForm.reset();
            } catch (error) {
                if (formStatus) {
                    formStatus.textContent = "An error occurred while sending your message. Please try again.";
                    formStatus.className = "text-center text-sm font-medium mt-2 text-red-400";
                }
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = `<span>Send Message</span> <i class="fa-solid fa-paper-plane"></i>`;
                }
            }
        });
    }
});

/* Theme Toggle Handler */
const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleIcon = document.getElementById('theme-toggle-icon');
const themeToggleMobileBtn = document.getElementById('theme-toggle-mobile');
const themeToggleIconMobile = document.getElementById('theme-toggle-icon-mobile');

const currentTheme = localStorage.getItem('portfolio-theme') || 'dark';

if (currentTheme === 'light') {
    document.body.classList.add('light-theme');
    updateThemeIcons('light');
} else {
    updateThemeIcons('dark');
}

function updateThemeIcons(theme) {
    const isLight = theme === 'light';
    const iconClass = isLight ? 'fa-solid fa-moon text-blue-600' : 'fa-solid fa-sun text-blue-400';
    if (themeToggleIcon) themeToggleIcon.className = iconClass;
    if (themeToggleIconMobile) themeToggleIconMobile.className = iconClass;
}

function triggerIconAnimation() {
    [themeToggleIcon, themeToggleIconMobile].forEach(icon => {
        if (icon) {
            icon.classList.remove('animate-theme-icon');
            void icon.offsetWidth;
            icon.classList.add('animate-theme-icon');
        }
    });
}

function toggleTheme() {
    triggerIconAnimation();
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    const newTheme = isLight ? 'light' : 'dark';
    localStorage.setItem('portfolio-theme', newTheme);
    setTimeout(() => { updateThemeIcons(newTheme); }, 150);
}

if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
if (themeToggleMobileBtn) themeToggleMobileBtn.addEventListener('click', toggleTheme);