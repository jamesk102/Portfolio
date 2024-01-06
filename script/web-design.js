// Drawer Script  

    const openDrawerButton = document.getElementById('custom-openDrawer');
    const closeDrawerButton = document.getElementById('custom-closeDrawer');
    const myDrawer = document.getElementById('custom-myDrawer');
    const overlay = document.getElementById('custom-overlay');
    const contentToDisableScroll = document.body; // Change this to the specific content you want to disable scrolling for

    openDrawerButton.addEventListener('click', () => {
            myDrawer.style.right = '0';
            overlay.style.opacity = 1;
            overlay.style.pointerEvents = 'auto';
            contentToDisableScroll.classList.add('disable-scroll'); // Add a class to disable scrolling
        });

    closeDrawerButton.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            myDrawer.style.right = '-80%'; // Adjust to -80% for screens narrower than 768px
        } else {
            myDrawer.style.right = '-30%'; // Adjust to -30% for screens wider than 768px
        }
        overlay.style.opacity = 0;
        overlay.style.pointerEvents = 'none';
        contentToDisableScroll.classList.remove('disable-scroll'); // Remove the class to enable scrolling
    });

    overlay.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            myDrawer.style.right = '-80%'; // Adjust to -80% for screens narrower than 768px
        } else {
            myDrawer.style.right = '-30%'; // Adjust to -30% for screens wider than 768px
        }
        overlay.style.opacity = 0;
        overlay.style.pointerEvents = 'none';
        contentToDisableScroll.classList.remove('disable-scroll'); // Remove the class to enable scrolling
    });

// Footer Year Script

    document.getElementById("currentYear").innerText = new Date().getFullYear();