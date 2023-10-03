// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

// MESSAGES
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSize = document.querySelectorAll('.font-size span');
var root = document.querySelector(':root');


// ======================>> SIDEBAR
// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if (item.id != 'notifications') {
            document.querySelector('.notification-popup').style.display = 'none';
        } else {
            document.querySelector('.notification-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})


// ======================>> MESSAGES
// search Message
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLocaleLowerCase();
        if (name.indexOf(val) != -1) {
            user.style.display = 'flex';
        } else {
            user.style.display = 'none';
        }
    })
}

// search chat
messageSearch.addEventListener('keyup', searchMessage);

// highlight messages card when messages menu item is clicked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000);
})


// ======================>> THEME CUSTOMIZE
// open modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}
// open modal
theme.addEventListener('click', openThemeModal);

// close modal
const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}
// close modal
themeModal.addEventListener('click', closeThemeModal);

// ======================>> FONTS
const removeSizeSelector = () => {
    fontSize.forEach(size => {
        size.classList.remove('active');
    })
}

fontSize.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        } else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left', '-12rem');
            root.style.setProperty('--sticky-top-right', '-35rem');
        }

        // change the font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;
    })
})