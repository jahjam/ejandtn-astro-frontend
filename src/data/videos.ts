import TCR_THUMBNAIL from '../assets/youtube-art/coroners-report-thumb-reduce.jpg';
import MITD_THUMBNAIL from '../assets/youtube-art/man-in-the-diner-thumb-reduce.jpg';
import IHIH_THUMBNAIL from '../assets/youtube-art/hate-it-here-thumb-reduce.jpg';
import OAS_THUMBNAIL from '../assets/youtube-art/on-a-stage-thumb-reduce.jpg';
import ITLNTS_THUMBNAIL from '../assets/youtube-art/EP-thumb-reduce.jpg';
import MIYE from '../assets/youtube-art/movie-in-your-eyes-thumbnail.png';
import TEEATTY from '../assets/youtube-art/everything-else-thumb.png';

export const videos = [
  {
    id: 6,
    title: "The Coroner's Report",
    url: TCR_THUMBNAIL,
    src: 'https://www.youtube.com/watch?v=AT7HFA2lgDQ',
  },
  {
    id: 5,
    title: 'Man In The Diner',
    url: MITD_THUMBNAIL,
    src: 'https://www.youtube.com/watch?v=435_oFpnRu0',
  },
  {
    id: 4,
    title: "It's Too Late Now To Say: Two Songs",
    url: ITLNTS_THUMBNAIL,
    src: 'https://www.youtube.com/watch?v=LxQKzPN7yYw',
  },
  {
    id: 3,
    title: "There's Everything Else And Then There's You",
    url: TEEATTY,
    src: 'https://www.youtube.com/watch?v=jS7QwRZgr6k',
  },
  {
    id: 3,
    title: 'Movie In Your Eyes',
    url: MIYE,
    src: 'https://www.youtube.com/watch?v=koKE5dukjfk',
  },
  {
    id: 2,
    title: 'I Hate It Here, But You Are Here, And I Love You',
    url: IHIH_THUMBNAIL,
    src: 'https://www.youtube.com/watch?v=S8zshLlD9Ck',
  },
  {
    id: 1,
    title: 'On A Stage',
    url: OAS_THUMBNAIL,
    src: 'https://www.youtube.com/watch?v=GIX5lhbnidU',
  },
];

export const videoData = new Map<string, string>([
  [
    'On A Stage',
    "I raised the money for this video by putting on a band 'launch' gig in District in Liverpool that ended up selling super well and being a massive success. We'd practiced as a band for a solid three months at that point and were the tightest we'd ever been and ever would be again.",
  ],
  [
    'I Hate It Here, But You Are Here, And I Love You',
    "We set out to make a one take video driving around Liverpool whilst I wrote the lyrics on the window. We did five takes in total but the first one (the one you can view now) was the only one where we didn't get caught in traffic and ended up at the docks. It's not perfect and I spell 'vain' wrong (I crumbled under the 'one take' pressure) but it's a cool little video that reminds me of the ramshackle making of this album.",
  ],
  [
    'Movie In Your Eyes',
    "Filmed in a warehouse in the Baltic area of Liverpool, I had a very loose concept and we did our best to capture an interesting music video in the short time we had there. I reached out to an artist called Sev Coursen (https://sevcoursen.com/) to use footage that he'd filmed in the background and he graciously granted me permission. There's a lot of things I would do differently now, if I could do it again. Alas, there's a lot about Because I'm A Giant that I would do again too, so for that reason, it works.",
  ],
  [
    "There's Everything Else And Then There's You",
    "Filmed in a flat I was living in in Liverpool. It's pretty self-explanatory really. All I will say is I wish I had a stylist.",
  ],
  [
    "It's Too Late Now To Say: Two Songs",
    "This is my favourite video I've filmed to date. The projected images are stock footage that I assembled into a loose narrative and then layered the lyrics on top of. I was say in front of the project playing the songs through so that my shadow distorted the projection. What you can't see is the projector and camera are balanced precariously on loads of cushions. It was filmed on an IPad and in the same flat as the video for There's Everything Else And Then There's You. Not long after filming this one, we moved out of there because the upstairs neighbour had super loud parties and threw a gigantic flesh coloured dildo onto this secluded, inaccessible balcony thing right in front of our living room window. So for the remaining few months, every time we looked out of our window, we saw that. Unfortunately, the next flat we moved into wasn't much better, but that's a tale for another time.",
  ],
  [
    'Man In The Diner',
    'At this point I like one take videos, especially when your budget is non-existent. I bought a transparent plate from TK Maxx and called my dad up to eat some beans off of it with a camera beneath it (the trilby was his choice).',
  ],
  [
    "The Coroner's Report",
    "I used to live in a flat in Liverpool that had this huge window that looked out over the city. It was a pretty great flat except for when my girlfriend was sat on the couch one day and a mouse appeared in the kitchen. This led to us taking the kick board off the kitchen and finding very unsettling amounts of rat/mouse shit all under the kitchen counter along with a few (thankfully unsuccessful) traps (so someone knew but didn't tell us, yay!). Anyway, you could pull the blind down and at night I used to love watching the cars lights just wiz by. Just before we got non-fault evicted I took a video of those cars, hoping to use it one day. And this is it.",
  ],
]);
