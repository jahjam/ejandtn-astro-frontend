import { format } from 'date-fns';

const enableScroll = (el: HTMLElement) => el.classList.add('nooverflow');
const stopScroll = (el: HTMLElement) => el.classList.remove('nooverflow');

let timeoutId: NodeJS.Timeout;

function show(
  modal: HTMLElement,
  modalContainer: HTMLElement,
  arr: HTMLElement[]
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
  element: HTMLElement
) {
  modals.forEach(modal => {
    if (modal.dataset.id === element.dataset.id) {
      show(modal, modalContainer, modals);
    }
  });
}

export function xClosesModal(
  modalContainer: HTMLElement,
  modals: HTMLElement[]
) {
  stopScroll(document.querySelector('html'));
  hide(modalContainer, modals);
}

export function overlayClosesModal(
  e: MouseEvent,
  modals: HTMLElement[],
  modalContainer: HTMLElement
) {
  if (e.target === modalContainer) {
    stopScroll(document.querySelector('html'));
    hide(e.target as HTMLElement, modals);
  }
}

export const sortTicketsByDateFn = (ticketArr: DayTicket[]) => {
  const tickets = ticketArr;
  const sortedObj = {};
  tickets.forEach(e => {
    const formattedTicketDate = format(
      new Date(e.attributes.date_created),
      'dd/MM/yyyy'
    );
    const k = formattedTicketDate.slice(3);
    const fk = `01/${k}`;
    sortedObj[fk] = sortedObj[fk] || [];
    sortedObj[fk].push(e);
  });

  Object.values(sortedObj).forEach((group: DayTicket[]) => {
    group.sort((a, b) => {
      const formattedDateA = format(
        new Date(a.attributes.date_created),
        'dd/MM/yyyy'
      ).split('/');
      const formattedDateB = format(
        new Date(b.attributes.date_created),
        'dd/MM/yyyy'
      ).split('/');
      return (
        +new Date(
          +formattedDateB[2],
          +formattedDateB[1] - 1,
          +formattedDateB[0]
        ) -
        +new Date(
          +formattedDateA[2],
          +formattedDateA[1] - 1,
          +formattedDateA[0]
        )
      );
    });
  });

  return Object.entries(sortedObj).sort((a, b) => {
    const aDateArray = a[0].split('/');
    const bDateArray = b[0].split('/');
    return (
      +new Date(new Date(+bDateArray[2], +bDateArray[1] - 1, +bDateArray[0])) -
      +new Date(new Date(+aDateArray[2], +aDateArray[1] - 1, +aDateArray[0]))
    );
  }) as Array<Array<string | DayTicket[]>>;
};
