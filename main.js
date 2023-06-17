window.onscroll = function() {
    stickyBar();
};

let header = document.getElementById('header');
let sticky = header.offsetTop;

const stickyBar = () => {
    if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
    } else {
    header.classList.remove('sticky');
    }
};

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const count = card.querySelector('.count');
    const countValue = parseInt(count.textContent);

  // Function to increment the count
function incrementCount() {
    let currentCount = 0;
    const interval = setInterval(() => {
    currentCount++;
    count.textContent = currentCount + 'k';
    if (currentCount === countValue) {
        clearInterval(interval);
    }
    }, 50);
}

  // Check if the card is in view when the user scrolls
document.addEventListener('scroll', function() {
    const bounding = card.getBoundingClientRect();
    if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
    incrementCount();
    document.removeEventListener('scroll', arguments.callee);
    }
    });
});

// Toggle menu
const menu = document.getElementById('menu')

menu.addEventListener('click', () => {
    const nav = document.getElementById('nav-bar')
    nav.classList.toggle('active')
})

// date
const date = new Date();
const fullYear = date.getFullYear()
const copyright = document.getElementsByClassName('copyright')

copyright.innerHTMl = `Copyright &copy; ${fullYear} dev_twumstine. All rights 
            reserved.`