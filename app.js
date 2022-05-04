class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    toggleCheckOutStatus() {
      if(this._isCheckedOut) {
        this._isCheckedOut = false;
      } else if (!this._isCheckedOut) {
        this._isCheckedOut = true;
      }
    }
  
    getAverageRating() {
      let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
      const lengthOfArray = this._ratings.length;
      return ratingsSum / lengthOfArray;
    }
  
    addRating(rating) {
      if(rating >= 1 && rating <= 5) {
        this._ratings.push(rating);
      } else {
        alert('Ratings must be between 1 and 5.')
      }
    }
  
    set isCheckedOut(param) {
      this._isCheckedOut = param;
    }
  }
  
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
    }
  
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runTime, movieCast) {
      super(title);
      this._director = director;
      this._runTime = runTime;
      this._movieCast = movieCast;
    }
  
    get director() {
      return this._director;
    }
  
    get runTime() {
      return this._runTime;
    }
  
    get movieCast() {
      return this._movieCast;
    }
  }
  
  class CD extends Media {
    constructor(artist, title, songTitles) {
      super(title);
      this._artist = artist;
      this._songTitles = songTitles;
    }
  
    get artist() {
      return this._artist;
    }
  
    get songTitles() {
      return this._songTitles;
    }
  
    shuffle() {
      const randomSongs = this._songTitles.sort((a, b) => {
        return 0.5 - Math.random();
      }); 
      return randomSongs;
    }
  }
  
  class Catalog {
    constructor(book, movie, cd) {
      this._book = book;
      this._movie = movie;
      this._cd = cd;
    }
  
    get book() {
      return this._book;
    }
  
    get movie() {
      return this._movie;
    }
  
    get cd() {
      return this._cd;
    }
  }
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  
  const thriller = new CD('Michael Jackson', 'Thriller', ['Wanna Be Startin\' Somethin\'', 'Baby Be Mine', 'The Girl Is Mine', 'Thriller']);
  console.log(thriller.shuffle());