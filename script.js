
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
