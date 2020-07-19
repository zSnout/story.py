window.Page = class {
  static get pages() {
    var urls = [];
    var pages = [];
    for (var i = 0;i < window.Page._pages.length;i++) {
      urls.push(window.Page._pages[i].url);
      pages.push(window.Page._pages[i]);
    }
    
    var unique = [];
    for (var i = 0;i < urls.length;i++) {
      if (unique.indexOf(urls[i]) == -1) {
        unique.push(urls[i]);
      }
    }
    for (var i = 0;i < unique.length;i++) {
      unique[i] = pages.find(elem => elem.url == unique[i]);
    }
    
    return unique;
  }
  
  constructor(url,title,group,keyword) {
    if (!window.Page._pages) {
      window.Page._pages = [this];
    } else {
      window.Page._pages.push(this);
    }
    
    this.url = url;
    this.title = title;
    this._groups = group;
    this._keywords = keyword;
  }
  
  get groups() {
    var group = this._groups.split(/ *, * ?/g);
    
    for (var j = 0;j < group.length;j++) {
      group[j] = new window.Group(group[j]);
    }
    
    return group;
  }
  
  get keywords() {
    var keyword = this._keywords.split(/ +/g);
    
    for (var j = 0;j < keyword.length;j++) {
      keyword[j] = new window.Keyword(keyword[j]);
    }
    
    return keyword;
  }
  
  relatedOn(group) {
    var orig = this.url;
    
    if (this.groups.map(elem => elem._name).indexOf(group) == -1) {
      return [];
    } else {
      return this.groups.find(elem => elem._name == group).pages.map(elem => new window.RelatedPage(orig,elem.url,group));
    }
  }
}

window.RelatedPage = class {
  constructor(orig,related,on) {
    this._orig = orig;
    this._related = related;
    this._on = [on];
  }
  
  get on() {
    var on = [];
    for (var i = 0;i < this._on.length;i++) {
      on.push(new window.Group(this._on[i]));
    }
  }
  
  set on(group) {
    this._on.push(group);
  }
  
  get orig() {
    var url = this._orig;
    return window.Page.pages.find(elem => elem.url == url);
  }
  
  get related() {
    var url = this._related;
    return window.Page.pages.find(elem => elem.url == url);
  }
}

window.Group = class {
  constructor(name) {
    this._name = name.replace(/-/g," ");
  }
  
  get type() {
    if (this._name.match(/.+\/.+\/.+/)) {
      return "subsub";
    } else if (this._name.match(/.+\/.+/)) {
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
    return window.Page.pages.filter(elem => elem.groups.map(el => el._name).indexOf(this._name) != -1);
  }
}

window.Keyword = class {
  constructor(keyword) {
    this._keyword = keyword;
  }
  
  get keyword() {
    return this._keyword;
  }
  
  get pages() {
    return window.Page.pages.filter(elem => elem.keywords.map(el => el._keyword).indexOf(this._keyword) != -1);
  }
}
