///////// Notification specific function  | Notifications use this overlay system above ^ 
function closeNotification(IDENT) {
    const notification = document.getElementById(`spl-static-notification${IDENT}`);
    if (notification) {
        notification.style.display = 'none';
    }
}