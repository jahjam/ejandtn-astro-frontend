const enableScroll = (el: HTMLElement) => el.classList.add('nooverflow');
const stopScroll = (el: HTMLElement) => el.classList.remove('nooverflow');

let timeoutId: NodeJS.Timeout;

function show(
  modal: HTMLElement,
  modalContainer: HTMLElement,
  arr: HTMLElement[],
) {
  // resets all modals to nodisplay if a modal is
  // loading whilst another hasn't closed yet
  if (!arr.every(el => el.classList.contains('nodisplay'))) {
    clearTimeout(timeoutId);
    arr.forEach(el => {
      el.classList.add('nodisplay');
    });
  }

  enableScroll(document.querySelector('html'));
  modal.classList.add('opacity');
  modal.classList.remove('nodisplay');
  modalContainer.classList.add('opacity');
}

function hide(modalContainer: HTMLElement, arr: HTMLElement[]) {
  modalContainer.classList.remove('opacity');

  arr.forEach(el => {
    if (el.classList.contains('opacity')) {
      el.classList.remove('opacity');

      timeoutId = setTimeout(() => {
        el.classList.add('nodisplay');
      }, 1000);
    }
  });
}

export function openModal(
  modals: HTMLElement[],
  modalContainer: HTMLElement,
  element: HTMLElement,
) {
  modals.forEach(modal => {
    if (modal.dataset.id === element.dataset.id) {
      show(modal, modalContainer, modals);
    }
  });
}

export function xClosesModal(
  modalContainer: HTMLElement,
  modals: HTMLElement[],
) {
  stopScroll(document.querySelector('html'));
  hide(modalContainer, modals);
}

export function overlayClosesModal(
  e: MouseEvent,
  modals: HTMLElement[],
  modalContainer: HTMLElement,
) {
  if (e.target === modalContainer) {
    stopScroll(document.querySelector('html'));
    hide(e.target as HTMLElement, modals);
  }
}
