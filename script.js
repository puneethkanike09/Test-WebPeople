// this code I added to toggle between the sidebar and the main content
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menu-toggle');
const closeSidebarButton = document.getElementById('close-sidebar');

// Function to open the sidebar
menuToggle.addEventListener('click', () => {
    sidebar.classList.remove('-translate-x-full');
});

// Function to close the sidebar
closeSidebarButton.addEventListener('click', closeSidebar);

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
}



// This is to identify the active class so that I can add the styles for that
document.addEventListener('DOMContentLoaded', () => {
    const desktopLinks = document.querySelectorAll('nav a');
    const sidebarLinks = document.querySelectorAll('#sidebar a');
    const sections = document.querySelectorAll('section');

    function setActiveClass(linkGroup) {
        linkGroup.forEach(link => {
            link.addEventListener('click', () => {
                // Remove active class from all links in both menus
                [...desktopLinks, ...sidebarLinks].forEach(l => l.classList.remove('active'));

                // Add active class to clicked link
                link.classList.add('active');
            });
        });
    }

    // Apply active class for both desktop and sidebar links
    setActiveClass(desktopLinks);
    setActiveClass(sidebarLinks);

    // Update active class based on scroll position for both menus
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                const targetLinkDesktop = document.querySelector(`nav a[href="#${section.id}"]`);
                const targetLinkSidebar = document.querySelector(`#sidebar a[href="#${section.id}"]`);

                // Remove active class from all links
                [...desktopLinks, ...sidebarLinks].forEach(l => l.classList.remove('active'));

                // Add active class to the corresponding links
                if (targetLinkDesktop) targetLinkDesktop.classList.add('active');
                if (targetLinkSidebar) targetLinkSidebar.classList.add('active');
            }
        });
    });
});


// Initialize AOS
AOS.init({
    duration: 1000,
    once: false,
});
