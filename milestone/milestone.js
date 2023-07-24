const albums = [
  {
    artist: "Michael Jackson",
    title: "Thriller",
    year: 1982,
    genres: ["pop", "post-disco", "funk", "rock"],
    sale: 70000000,
  },
  {
    artist: "AC/DC",
    title: "Back in Black",
    year: 1980,
    genres: ["hard rock"],
    sale: 50000000,
  },
  {
    artist: "Whitney Houston",
    title: "The Bodyguard",
    year: 1992,
    genres: ["r&b", "soul", "pop", "soundtrack"],
    sale: 45000000,
  },
  {
    artist: "Pink Floyd",
    title: "The Dark Side of the Moon",
    year: 1973,
    genres: ["progressive rock"],
    sale: 45000000,
  },
  {
    artist: "Eagles",
    title: "Their Greatest Hits (1971 - 1975)",
    year: 1976,
    genres: ["country rock", "soft rock", "folk rock"],
    sale: 44000000,
  },
  {
    artist: "Eagles",
    title: "Hotel California",
    year: 1976,
    genres: ["soft rock"],
    sale: 42000000,
  },
  {
    artist: "Shania Twain",
    title: "Come On Over",
    year: 1997,
    genres: ["country", "pop"],
    sale: 40000000,
  },
  {
    artist: "Fleetwood Mac",
    title: "Rumours",
    year: 1977,
    genres: ["soft rock"],
    sale: 40000000,
  },
  {
    artist: "Led Zeppelin",
    title: "Led Zeppelin IV",
    year: 1971,
    genres: ["hard rock", "blues rock"],
    sale: 37000000,
  },
  {
    artist: "The Beatles",
    title: "Abbey Road",
    year: 1969,
    genres: ["rock", "pop"],
    sale: 35000000,
  },
  {
    artist: "Elton John",
    title: "Goodbye Yellow Brick Road",
    year: 1973,
    genres: ["rock", "pop"],
    sale: 34000000,
  },
  {
    artist: "Adele",
    title: "21",
    year: 2011,
    genres: ["pop", "soul"],
    sale: 33000000,
  },
  {
    artist: "Bee Gees",
    title: "Saturday Night Fever",
    year: 1977,
    genres: ["disco"],
    sale: 32000000,
  },
  {
    artist: "Michael Jackson",
    title: "Bad",
    year: 1987,
    genres: ["pop", "funk", "rock"],
    sale: 32000000,
  },
  {
    artist: "Guns N' Roses",
    title: "Appetite for Destruction",
    year: 1987,
    genres: ["hard rock", "glam metal"],
    sale: 30000000,
  },
  {
    artist: "Queen",
    title: "Greatest Hits",
    year: 1981,
    genres: ["rock"],
    sale: 30000000,
  },
  {
    artist: "The Beatles",
    title: "Sgt. Pepper's Lonely Hearts Club Band",
    year: 1967,
    genres: ["rock", "psychedelic"],
    sale: 30000000,
  },
  {
    artist: "Metallica",
    title: "Metallica (The Black Album)",
    year: 1991,
    genres: ["heavy metal"],
    sale: 29000000,
  },
  {
    artist: "Bob Marley and the Wailers",
    title: "Legend",
    year: 1984,
    genres: ["reggae"],
    sale: 28000000,
  },
  {
    artist: "Adele",
    title: "25",
    year: 2015,
    genres: ["pop", "soul"],
    sale: 26000000,
  },
  {
    artist: "U2",
    title: "The Joshua Tree",
    year: 1987,
    genres: ["rock"],
    sale: 25000000,
  },
  {
    artist: "Nirvana",
    title: "Nevermind",
    year: 1991,
    genres: ["grunge", "alternative rock"],
    sale: 26000000,
  },
  {
    artist: "Bruce Springsteen",
    title: "Born in the U.S.A.",
    year: 1984,
    genres: ["rock"],
    sale: 25000000,
  },
  {
    artist: "Elvis Presley",
    title: "Elvis' Christmas Album",
    year: 1957,
    genres: ["rock and roll", "christmas"],
    sale: 20000000,
  },
  {
    artist: "Celine Dion",
    title: "Falling into You",
    year: 1996,
    genres: ["pop"],
    sale: 20000000,
  },
  {
    artist: "Elton John",
    title: "Greatest Hits",
    year: 1974,
    genres: ["rock", "pop"],
    sale: 17000000,
  },
  {
    artist: "Mariah Carey",
    title: "Music Box",
    year: 1993,
    genres: ["pop", "r&b"],
    sale: 20000000,
  },
  {
    artist: "Madonna",
    title: "Like a Virgin",
    year: 1984,
    genres: ["pop", "dance"],
    sale: 21000000,
  },
  {
    artist: "Madonna",
    title: "The Immaculate Collection",
    year: 1990,
    genres: ["pop", "dance"],
    sale: 22000000,
  },
  {
    artist: "Linkin Park",
    title: "Hybrid Theory",
    year: 2000,
    genres: ["nu metal", "alternative rock"],
    sale: 24000000,
  },
  {
    artist: "Ed Sheeran",
    title: "÷ (Divide)",
    year: 2017,
    genres: ["pop"],
    sale: 22000000,
  },
  {
    artist: "Shakira",
    title: "Laundry Service",
    year: 2001,
    genres: ["pop", "rock", "latin"],
    sale: 21000000,
  },
  {
    artist: "Eminem",
    title: "The Marshall Mathers LP",
    year: 2000,
    genres: ["hip hop"],
    sale: 22000000,
  },
  {
    artist: "Eminem",
    title: "The Eminem Show",
    year: 2002,
    genres: ["hip hop"],
    sale: 22000000,
  },
  {
    artist: "Beyoncé",
    title: "Dangerously in Love",
    year: 2003,
    genres: ["r&b", "pop"],
    sale: 11000000,
  },
  {
    artist: "Taylor Swift",
    title: "1989",
    year: 2014,
    genres: ["pop"],
    sale: 11000000,
  },
  {
    artist: "Drake",
    title: "Views",
    year: 2016,
    genres: ["hip hop", "rap"],
    sale: 11000000,
  },
  {
    artist: "Justin Bieber",
    title: "Purpose",
    year: 2015,
    genres: ["pop"],
    sale: 10000000,
  },
  {
    artist: "Rihanna",
    title: "Loud",
    year: 2010,
    genres: ["pop", "r&b"],
    sale: 10000000,
  },
];

function countMichaelJacksonAlbums(){
  let count = 0;

  for (let i = 0; i < albums.length; i++){
    if(albums[i].artist == "Michael Jackson"){
      count++;
    }
  }
  return count;
}

const michaelJacksonAlbumCount = countMichaelJacksonAlbums();
console.log("number of Michael Jackson albums:", michaelJacksonAlbumCount);




function sumMadonnaAlbumSales(){
 let totalSales = 0;

 for(let i= 0; i < albums.length; i++){
  if (albums[i].artist == "Madonna"){
    totalSales += albums[i].sale;
  }
 }
 return totalSales;
 }

 const madonnaAlbumSales  = sumMadonnaAlbumSales();
 console.log("total sales of Madonna albums:", madonnaAlbumSales);


function countPopAlbums(){
  let count = 0;

    for(let i = 0; i < albums.length; i++){
      if (albums[i].genres.indexOf("pop") != -1){
        count++;
      }
    }
    return count;
  }
  const popAlbumCount = countPopAlbums();
  console.log("number of pop albums:", popAlbumCount);
 

function areAllMichaelJacksonAlbumsFunk(){
    for(let i = 0; i < albums.length; i++){
      if (albums[i].artist == "Michael Jackson" && albums[i].genres.indexOf("funk") == -1){
        return false;
    }
  }
  return true;
  }

  const allMichaelJacksonAlbumsAreFunk= areAllMichaelJacksonAlbumsFunk();
  console.log("are all Michael Jackson albums funk albums?", allMichaelJacksonAlbumsAreFunk);


function countAlbumsWithMoreThanTwoGanres(){
  let count = 0;

  for(let i = 0; i < albums.length; i++){
    if (albums[i].genres.length > 2){
      count ++;
    }
  }
  return count;
}

const countAlbumsWithMoreThanTwoGanresCount = countAlbumsWithMoreThanTwoGanres();
console.log("number of albums with more than 2 genres:", countAlbumsWithMoreThanTwoGanresCount);