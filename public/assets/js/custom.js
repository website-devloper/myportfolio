// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    // Navigation search-bar
    const topSearch = document.getElementById("search-bar-bt");
    if (topSearch) {
        topSearch.onclick = () => {
            const SearchBar = document.getElementById("search-bar");
            if (SearchBar) {
                SearchBar.style.height = "100vh";
                SearchBar.style.display = "flex";
                document.body.style.overflow = "hidden";
            }
        };
    }

    const btn = document.getElementById("remove-btn");
    if (btn) {
        btn.onclick = () => {
            const remov = document.getElementById("search-bar");
            if (remov) {
                remov.style.display = "none";
                document.body.style.overflow = "unset";
            }
        };
    }

    // Right-sidebar
    function open_right_side() {
        const sidepanel = document.getElementById("right_side");
        if (sidepanel) {
            sidepanel.style.right = "0";
        } else {
            console.error("Error: Side panel element not found!");
        }
    }

    function close_right_side() { // Corrected the typo here
        const sidepanel = document.getElementById("right_side");
        if (sidepanel) {
            sidepanel.style.right = "-355px";
        } else {
            console.error("Error: Side panel element not found!");
        }
    }

    // Navbar side-slide
    const slid = document.getElementById("slid-btn");
    if (slid) {
        slid.onclick = () => {
            const drop = document.getElementById("slid-drop");
            if (drop) {
                drop.classList.toggle("myst");
            }
        };
    }

    // Button back to top
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("backToTopBtn").style.display = "block";
        } else {
            document.getElementById("backToTopBtn").style.display = "none";
        }
    }

    function scrollToTop() {
        const scrollToTopBtn = document.documentElement || document.body;
        scrollToTopBtn.scrollIntoView({
            behavior: "smooth"
        });
    }

    // Accordion on FAQ page
    const accordionItems = document.querySelectorAll('.accordion-item1');

    accordionItems.forEach((item, index) => {
        const header = item.querySelector('.accordion-header1');
        const toggleIcon = item.querySelector('.accordion-toggle1');

        if (index === 0) {
            item.classList.add('active');
            toggleIcon.classList.add('active');
            item.querySelector('.accordion-content').style.maxHeight = '1000px';
        }

        header.addEventListener('click', () => {
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion-content').style.maxHeight = '0';
                    otherItem.querySelector('.accordion-toggle1').classList.remove('active');
                }
            });

            item.classList.toggle('active');

            if (item.classList.contains('active')) {
                toggleIcon.classList.add('active');
            } else {
                toggleIcon.classList.remove('active');
            }

            const content = item.querySelector('.accordion-content');
            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = '0';
            }
        });
    });

    // Form subscribe message
    const aboutFor = document.getElementById('footer-sub2');
    const aboutMessag = document.getElementById('Succes-box2');
    if (aboutFor && aboutMessag) {
        aboutFor.addEventListener('submit', (event) => {
            event.preventDefault();
            aboutMessag.innerHTML = 'You Subscribe successfully!';
            aboutMessag.style.display = 'block';
            aboutFor.reset();
            setTimeout(() => {
                aboutMessag.style.display = 'none';
            }, 3000);
        });
    }
});
