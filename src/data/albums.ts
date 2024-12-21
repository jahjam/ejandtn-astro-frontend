import THBTTL_ALBUM_ART from '../assets/album-art/the-hellish-bending-towards-the-light-album-art-for-web.webp';
import BIAG_ALBUM_ART from '../assets/album-art/EJ-BIAG-full-artwork-front-and-back-for-web.webp';
import LFES_ALBUM_ART from '../assets/album-art/EJANDTN-EP-COVER-1-reduce.jpg';
import ITLNTS_ALBUM_ART from '../assets/album-art/two-song-ep-artwork-for-web.webp';

export const albums: Album[] = [
  {
    id: 1,
    img: THBTTL_ALBUM_ART,
    title: 'The Hellish Bending Towards The Light - LP',
    releaseDate: '07/06/2023',
    tracklist: {
      1: "The Coroner's Report",
      2: 'Man In The Diner',
      3: 'This Love',
      4: 'Out Of The Woodwork',
      5: 'Sara',
      6: 'Grown Now',
      7: 'Feet First',
      8: 'Another Sunny Day',
      9: 'Starry-Eyed Kid (With My Head In The Clouds)',
      10: 'My Very Own Time Machine',
      11: 'I Wish',
    },
    about:
      "This album was never meant to be made. It was cobbled together in desperation due to another album I was working on proving close to impossible to make over the last three years (2020, 2021, 2022). That said, I'm happy with how it turned out. It's got no bells or whistles, but the things it has got, whatever they may be, it's got in spades. Call it what you will. I call it The Hellish Bending Towards The Light.",
    credits: {
      writtenBy: 'Elijah James',
      arrangedBy: 'Elijah James',
      producedBy: 'Elijah James',
      mixedBy: 'Tom Roach',
      masteredBy: 'Tom Woodhead',
      recordedAt: ['AMS&V'],
      personel: [
        'Sophie Bernine - Backing Vocals',
        'Gareth Dawson - Percussion',
        'Emily Vanlint - Violin/Viola',
      ],
      albumArtDesignedBy: 'Elijah James',
      albumArtBy: 'Elijah James',
    },
    links: {
      smartLink:
        'https://ditto.fm/the-hellish-bending-towards-the-light-ej-hallows',
      bandcamp:
        'https://ejhallows.bandcamp.com/album/the-hellish-bending-towards-the-light',
    },
  },
  {
    id: 2,
    img: ITLNTS_ALBUM_ART,
    title: "It's Too Late Now To Say: Two Songs EP",
    releaseDate: '26/06/2020',
    tracklist: {
      1: "Who'll Be Here Tomorrow?",
      2: 'Enough Rope',
    },
    about:
      "In May 2020, E.J. Hallows was set to record his sophomore LP. Alas, due to the Covid-19 pandemic, his plans - like everybody else's - were put on hold. Instead, he took to creating this short film, featuring two acoustic versions of songs from said upcoming LP: 1. Who'll Be Here Tomorrow? 2. Enough Rope The two songs were recorded in his flat in Liverpool, UK, with the virtual help of Tom Roach, whom engineered, mixed and mastered the two song EP.",
    credits: {
      writtenBy: 'Elijah James',
      arrangedBy: 'Elijah James',
      producedBy: 'Elijah James',
      mixedBy: 'Tom Roach',
      masteredBy: 'Tom Roach',
      recordedAt: ['AMS&V'],
      personel: [],
      albumArtDesignedBy: 'Elijah James',
      albumArtBy: 'Elijah James',
    },
    links: {
      smartLink: 'https://ditto.fm/its-too-late-now-to-say-two-songs',
      bandcamp:
        'https://ejhallows.bandcamp.com/album/its-too-late-now-to-say-two-songs',
    },
  },
  {
    id: 3,
    img: BIAG_ALBUM_ART,
    title: "Because I'm A Giant LP",
    releaseDate: '06/09/2019',
    tracklist: {
      1: 'I Hate It Here, But You Are Here, And I Love You',
      2: 'Spirits & Ghosts',
      3: 'Cut Me Down',
      4: 'To Sue, Too Soon',
      5: 'Movie In Your Eyes',
      6: 'Talisman',
      7: "There's Everything Else, And Then There's You",
      8: "Patricia's March",
      9: 'Mayfly (One Last Perfect Day)',
      10: 'On A Stage',
      11: 'Beyond The Horizon',
      12: 'Theme Music For A Princess',
      13: 'Scared Of Everything',
      14: 'A Most Unwelcome Encounter',
      15: 'My Misery And Me',
      16: 'Daydreaming',
      17: "Andy's Song",
      18: 'Man-Made Masquerade',
    },
    about:
      "Because I'm A Giant is an album that from its original conception was ambitious in scope. It features 18 songs, was recorded over a period of three and a half years between 2015-2018, and is the product of E.J. Hallows travelling around the UK (mostly Liverpool) with a backpack full of borrowed microphones to various musicians/friends houses to track the parts he’d written. Although there's no overriding concept to the album, Elijah was focussing on writing songs with narratives and creating characters with rich personalities and backgrounds. Its intent is an atmospheric and poignant journey through the magnificent highs and the necessary lows of growing up. E.J. Hallows weaves a plethora of musical styles from indie, rock, folk, pop and incorporates over 25 different acoustic/electric instruments with themes and emotions everybody’s experienced at one point or another in their life.",
    credits: {
      writtenBy: 'Elijah James',
      arrangedBy: 'Elijah James',
      producedBy: 'Elijah James',
      mixedBy: 'Tom Roach',
      masteredBy: 'Tom Woodhead',
      recordedAt: ['AMS&V', 'Elevator Studios', 'Canvas Sound'],
      personel: [
        'James Cudworth - Electric Guitar on track 1, 2, 4, 5, 9, Saxophone on track 1, 18, Clarinet on track 1, 10, Flute on track 1, 10, Banjo on track 7, Mandolin on track 1, Synth on track 18, Bass on track 15, Drums on track 4, 14, Percussion on tracks 1, 2, 3, 4, 5, 6, 10, 13, 14, Djembe on track 2',
        'Simon Bill Gelling - Electric Guitar on track 1, 2, 4, 5, 6, 10, 18, Backing Vocals on track 1, 4, 5, 13, 18',
        'Matt Kearon - Bass on track 18',
        'Emily Vanlint - Violin on track 1, 2, 4, 5, 6, 10, 13, 14, 18, Viola on tracks 1, 2, 4, 5, 10, 13, 14',
        'Rachel Wharton - Tenor Horn on tracks 1, 2, 5, 6, 10, 14, 18',
        'Nathanial Gamsu - Piano on tracks 1, 2, 4, 5, 6, 10, 14, 18, Organ on tracks 3, 13',
        'Luke Moore - Cello on tracks 1, 2, 4, 7',
        'Matthew Jones - Cornet on tracks 1, 5',
        'Josh Betley - Trumpet on tracks - 6, 14, Cornet on track 14, Flugelhorn on track 14',
        'Gareth Dawson - Drums on tracks 1, 2, 3, 5, 6, 10, 18',
        'John Mac - Bass on track 4',
        'Jenny Coyle - Backing Vocals on tracks 3, 5, 13, 14, 15',
      ],
      albumArtDesignedBy: 'Elijah James',
      albumArtBy: 'Jonathon Tottey',
    },
    links: {
      smartLink: 'https://ditto.fm/because-im-a-giant-ej-hallows',
      bandcamp: 'https://ejhallows.bandcamp.com/album/because-im-a-giant',
    },
  },

  {
    id: 4,
    img: LFES_ALBUM_ART,
    title: 'Live From Elevator Studios EP',
    releaseDate: '09/09/2017',
    tracklist: {
      1: 'Movie In Your Eyes',
      2: 'On A Stage',
      3: 'That Girl Of Mine',
      4: 'Man-Made Masquerade',
    },
    about:
      'On June 10th 2017, Elijah James And The Nightmares stepped into Elevator Studios with Tom Roach at the mixing desk to track their first set of recordings as a band. Performing totally live, the EP captures the energy, intensity and excitement created by the eight piece, encapsulating their live sound.',
    credits: {
      writtenBy: 'Elijah James',
      arrangedBy: 'Elijah James',
      producedBy: 'Elijah James',
      mixedBy: 'Tom Roach',
      masteredBy: 'Tom Woodhead',
      recordedAt: ['Elevator Studios'],
      personel: [
        'Simon Bill Gelling - Backing Vox/Electric Guitar',
        'James Cudworth - Electric Guitar/Saxophone/Clarinet/Percussion/Keys',
        'Matthew Kearon - Bass',
        'Gareth Dawson - Drums',
        'Nathaniel Gamsu - Piano/Keys',
        'Emily Claire - Violin',
        'Rachel Wharton - Tenor Horn',
      ],
      albumArtDesignedBy: 'Elijah James',
      albumArtBy: 'Elijah James',
    },
    links: {
      smartLink: 'https://ditto.fm/live-from-elevator-studios',
      bandcamp:
        'https://ejhallows.bandcamp.com/album/live-from-elevator-studios',
    },
  },
];
