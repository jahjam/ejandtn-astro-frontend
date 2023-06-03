const enableScroll = el => el.classList.add('nooverflow');
const stopScroll = el => el.classList.remove('nooverflow');

export function openModal(e, modals, modalContainer, element) {
  e.preventDefault();

  modals.forEach(modal => {
    if (modal.dataset.id === element.dataset.id) {
      enableScroll(document.querySelector('html'));
      modal.classList.toggle('opacity');
      modal.classList.remove('nodisplay');
      modalContainer.classList.toggle('opacity');
    }
  });
}

function displayNone(element, arr) {
  element.classList.toggle('opacity');

  arr.forEach(el => {
    el.classList.toggle('opacity');

    setTimeout(() => {
      el.classList.add('nodisplay');
    }, 1000);
  });
}

export function xClosesModal(modalContainer, modals) {
  stopScroll(document.querySelector('html'));
  displayNone(modalContainer, modals);
}

export function overlayClosesModal(e, modals) {
  stopScroll(document.querySelector('html'));
  displayNone(e.target, modals);
}
