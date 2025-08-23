document.addEventListener('DOMContentLoaded', () => {
    const boxD = document.querySelector('#box-d'); // Select Box D
    const boxE = document.querySelector('#box-e'); // Select Box E

    // Event Listener for Scrolling
    document.addEventListener('scroll', () => {
        const scrollY = window.scrollY; // Get scroll position

        // Scroll-controlled movement for Box D
        if (scrollY > 50 && scrollY < 300) {
            boxD.classList.add('scrolled');
        } else {
            boxD.classList.remove('scrolled');
        }

        // Scroll-controlled movement for Box E
        if (scrollY > 150 && scrollY < 400) {
            boxE.classList.add('scrolled');
        } else {
            boxE.classList.remove('scrolled');
        }
    });
});
