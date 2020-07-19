class Page {
  static get pages() {
    var pages = [];
    
    for (var member in window) {
      if (window[member] instanceof Page) {
        pages.push(window[member]);
      }
    }
    
    return pages;
  }
  
  constructor(url,title,group,keyword) {
    this.url = url;
    this.title = title;
    this._groups = group;
    this._keywords = keyword;
  }
  
  get groups() {
    var group = this._groups.split(/ *, */g);
    
    for (var j = 0;j < group.length;j++) {
      group[j] = new Group(group[j]);
    }
    
    return group;
  }
  
  get keywords() {
    var keyword = this._keywords.split(/ +/g);
    
    for (var j = 0;j < keyword.length;j++) {
      keyword[j] = new Keyword(keyword[j]);
    }
    
    return keyword;
  }
}

class Group {
  constructor(name) {
    this._name = name.replace(/-/g," ");
  }
  
  get type() {
    if (this.name.match(/.+\/.+\/.+/)) {
      return "subsub";
    } else if (this.name.match(/.+\/.+/)) {
      return "sub";
    } else {
      return "root";
    }
  }
  
  get name() {
    var match = this._name.match(/^(.+?)(?: *\/ *(.+?)(?: *\/ *(.+?))?)?$/);
    
    return {
      orig: match[0],
      root: match[1],
      sub: match[2] || null,
      subsub: match[3] || null
    };
  }
  
  get pages() {
    var pages = Page.pages;
    
    var myPages = [];
    for (var i = 0;i < pages.length;i++) {
      if (pages[i].groups.map(elem => elem.name.orig).indexOf(this._name) != -1) {
        myPages.push(pages[i]);
      }
    }
    
    return pages;
  }
}

class Keyword {
  constructor(keyword) {
    this._keyword = keyword;
  }
  
  get keyword() {
    return this._keyword;
  }
  
  get pages() {
    var pages = Page.pages;
    
    var myPages = [];
    for (var i = 0;i < pages.length;i++) {
      if (pages[i].keywords.map(elem => elem.keyword).indexOf(this._keyword) != -1) {
        myPages.push(pages[i]);
      }
    }
    
    return pages;
  }
}
