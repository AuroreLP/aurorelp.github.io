document.querySelectorAll('.mission-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const item = trigger.closest('.mission-item');
    const isOpen = item.classList.contains('open');

    // ferme tous les autres
    document.querySelectorAll('.mission-item.open').forEach(openItem => {
      openItem.classList.remove('open');
      openItem.querySelector('.mission-trigger').setAttribute('aria-expanded', 'false');
    });

    // ouvre celui-ci si il était fermé
    if (!isOpen) {
      item.classList.add('open');
      trigger.setAttribute('aria-expanded', 'true');
    }
  });
});
