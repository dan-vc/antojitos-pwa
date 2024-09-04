/*
let swLocation = 'sw.js';

if (navigator.serviceWorker) {
  if (window.location.href.includes('localhost')) swLocation = '/sw.js'

  navigator.serviceWorker.register(swLocation)
}
*/

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
    .then(function(registration) {
        console.log('Service Worker registrado con éxito:', registration);

        // Solicitar permiso para notificaciones
        if (Notification.permission === 'default') {
            Notification.requestPermission().then(function(permission) {
                if (permission === 'granted') {
                    console.log('Permiso para notificaciones concedido.');
                    // Aquí podrías suscribir al usuario a push si es necesario
                } else {
                    console.log('Permiso para notificaciones denegado.');
                }
            }).catch(function(error) {
                console.log('Error al solicitar permiso para notificaciones:', error);
            });
        }
    }).catch(function(error) {
        console.log('Error al registrar el Service Worker:', error);
    });
}
