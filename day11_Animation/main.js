const btnList = document.querySelector('.btn-list')
const btnSuccess = document.querySelector('.success')
const btnWarning = document.querySelector('.warning')
const btnError = document.querySelector('.error')
const notification = document.querySelector('.notification')

btnList.addEventListener('click', (event) => {
    let targets = event.target.className;
    if (targets.includes('success')) {
        createStatus('success')
    }
    if (targets.includes('warning')) {
        createStatus('warning')
    }
    if (targets.includes('error')) {
        createStatus('error')
    }
})
function createStatus(val) {
    let notificationItem = document.createElement('div');
    notificationItem.classList.add('notification-item');
    notification.appendChild(notificationItem);
    let message = '';
    let className = ''; 
    switch (val) {
        case 'success':
            message = 'This is the Success message';
            className = 'success-check';
            break;
        case 'warning':
            message = 'This is the Warning message';
            className = 'warning-check';
            break;
        case 'error':
            message = 'This is the Error message';
            className = 'error-check';

            break;
        default:
            break;
    }

    notificationItem.innerHTML = `
        <i class="fa-regular fa-circle-check"></i>
        <p>${message}</p>
    `;
    notificationItem.classList.add(className, 'slideOn');

    
    setTimeout(() => {
        notificationItem.classList.remove('slideOn');
        setTimeout(() => {
            notificationItem.classList.add('slideHides');
            
        }, 100);
    },4000)
    setTimeout(() => {
        notification.removeChild(notificationItem);
    },6000)
}

