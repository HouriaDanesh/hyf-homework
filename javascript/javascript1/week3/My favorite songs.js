//Add song to database

const songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  },
];

const myPlaylist =[]; 

function addSongToDatabase (song){

    songDatabase.push(song);
}
addSongToDatabase({
    songId: songDatabase.length + 1,
    title: 'Its my life',
    artist: 'Bon Jovi',
  });
  addSongToDatabase({
    songId: songDatabase.length + 1,
    title: 'Casabelanca',
    artist: 'Dean Martin',
  });

    console.log(songDatabase);

//Searching for a song

function getSongByTitle (title)
{
    for (let i = 0 ; i < songDatabase.length ; i++)
     {
      const SongTitle = songDatabase[i].title;
        if (SongTitle === title) {
          return songDatabase[i];
          }
        }
}
const searchedSong = getSongByTitle('When is enough too little?');
console.log(searchedSong); 

const searchedSong2 = getSongByTitle('When is enough too');
console.log(searchedSong2); 

const searchedSong3 = getSongByTitle('Its my life');
console.log(searchedSong3); 

//Create our own playlist

function addSongToMyPlaylist (title)
{
  const mySong = getSongByTitle(title);
  if (mySong) {
      myPlaylist.push(mySong);
  }
}


addSongToMyPlaylist('3 nails in wood');
console.log(myPlaylist);