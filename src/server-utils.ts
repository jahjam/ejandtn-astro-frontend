import type { InferEntrySchema, Render, RenderedContent } from 'astro:content';
import { format } from 'date-fns';

type DayTickets = {
  id: string;
  render(): Render['.md'];
  slug: string;
  body: string;
  collection: 'day-tickets';
  data: InferEntrySchema<'day-tickets'>;
  rendered?: RenderedContent;
  filePath?: string;
}[];

export const sortTicketsByDateFn = (ticketArr: DayTickets) => {
  const tickets = ticketArr;
  const sortedObj = {};
  tickets.forEach(e => {
    const formattedTicketDate = format(
      new Date(e.data.writtenDate),
      'dd/MM/yyyy',
    );
    const k = formattedTicketDate.slice(3);
    const fk = `01/${k}`;
    sortedObj[fk] = sortedObj[fk] || [];
    sortedObj[fk].push(e);
  });

  Object.values(sortedObj).forEach((group: DayTickets) => {
    group.sort((a, b) => {
      const formattedDateA = format(
        new Date(a.data.pubDate),
        'dd/MM/yyyy',
      ).split('/');
      const formattedDateB = format(
        new Date(b.data.pubDate),
        'dd/MM/yyyy',
      ).split('/');
      return (
        +new Date(
          +formattedDateB[2],
          +formattedDateB[1] - 1,
          +formattedDateB[0],
        ) -
        +new Date(
          +formattedDateA[2],
          +formattedDateA[1] - 1,
          +formattedDateA[0],
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
  }) as Array<[string, DayTickets]>;
};
