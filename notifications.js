// js/notifications.js
document.addEventListener('DOMContentLoaded', () => {
  const notificationContainer = document.getElementById('notification-container');

  function showNotification(message, duration = 3000) {
    if (!notificationContainer) {
      console.warn('Notification container not found. Falling back to alert:', message);
      alert(message);
      return;
    }

    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.setProperty('--notification-duration', `${duration / 1000}s`);

    notificationContainer.appendChild(notification);

    // Remove notification after animation completes
    notification.addEventListener('animationend', () => {
      notification.remove();
    });
  }

  // Expose to global scope for theme.js or other scripts
  window.showNotification = showNotification;
});
