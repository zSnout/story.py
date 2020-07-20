class Page {
  static get pages() {
    var urls = [];
    var pages = [];
    for (var i = 0;i < Page._pages.length;i++) {
      urls.push(Page._pages[i].url);
      pages.push(Page._pages[i]);
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
  
  static get tree() {
    var pages = Page.pages;
    var tree = {};
    var regex = /^(.+?)(?: *\/ *(.+?)(?: *\/ *(.+?))?)?$/;
    
    for (var i = 0;i < pages.length;i++) {
      var page = pages[i];
      var groups = page.groups;
      
      for (var j = 0;j < groups.length;j++) {
        var match = groups[j]._name.match(regex);
        
        if (Object.keys(tree).indexOf(match[1]) == -1) {
          tree[match[1]] = {pages: [],sub: {}};
        }
        if (!!match[2] && Object.keys(tree[match[1]].sub).indexOf(match[2]) == -1) {
          tree[match[1]].sub[match[2]] = {pages: [],sub: {}};
        }
        if (!!match[3] && Object.keys(tree[match[1]].sub[match[2]].sub).indexOf(match[3]) == -1) {
          tree[match[1]].sub[match[2]].sub[match[3]] = {pages: []};
        }
        
        if (match[3]) {
          if (tree[match[1]].sub[match[2]].sub[match[3]].pages.map(elem => elem.url).indexOf(page.url) == -1) {
            tree[match[1]].sub[match[2]].sub[match[3]].pages.push(page);
          }
        } else if (match[2]) {
          if (tree[match[1]].sub[match[2]].pages.map(elem => elem.url).indexOf(page.url) == -1) {
            tree[match[1]].sub[match[2]].pages.push(page);
          }
        } else {
          if (tree[match[1]].pages.map(elem => elem.url).indexOf(page.url) == -1) {
            tree[match[1]].pages.push(page);
          }
        }
      }
    }
    
    return tree;
  }
  
  constructor(url,title,group,keyword) {
    if (!Page._pages) {
      Page._pages = [this];
    } else {
      Page._pages.push(this);
    }
    
    this.url = url;
    this.title = title;
    this._groups = group;
    this._keywords = keyword;
  }
  
  get groups() {
    var group = this._groups.split(/ *, * ?/g);
    
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
  
  get related() {
    var related = [];
    var groups = this.groups;
    
    for (var i = 0;i < groups.length;i++) {
      var relatedOn = this.relatedOn(groups[i].name.orig);
      for (var j = 0;j < relatedOn.length;j++) {
        var index = related.map(elem => elem.orig.url).indexOf(relatedOn[j].orig.url);
        if (index == -1) {
          related.push(relatedOn[j]);
        } else {
          related[index].on = relatedOn[j]._on[0];
        }
      }
    }
    
    return related;
  }
  
  relatedOn(group) {
    var orig = this.url;
    
    if (this.groups.map(elem => elem._name).indexOf(group) == -1) {
      return [];
    } else {
      return this.groups.find(elem => elem._name == group).pages.filter(elem => elem.url != orig).map(elem => new RelatedPage(orig,elem.url,group));
    }
  }
}

class RelatedPage {
  constructor(orig,related,on) {
    this._orig = orig;
    this._related = related;
    this._on = [on];
  }
  
  get on() {
    var on = [];
    for (var i = 0;i < this._on.length;i++) {
      on.push(new Group(this._on[i]));
    }
  }
  
  set on(group) {
    this._on.push(group);
  }
  
  get orig() {
    var url = this._orig;
    return Page.pages.find(elem => elem.url == url);
  }
  
  get related() {
    var url = this._related;
    return Page.pages.find(elem => elem.url == url);
  }
}

class Group {
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
    return Page.pages.filter(elem => elem.groups.map(el => el._name).indexOf(this._name) != -1);
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
    return Page.pages.filter(elem => elem.keywords.map(el => el._keyword).indexOf(this._keyword) != -1);
  }
}
