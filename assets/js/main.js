class Page {
  static get pages() {
    if (!Page._pages) {
      return [];
    }
    
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
    var group = this._groups.split(/ ?, ?/g);
    
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
  static get groups() {
    var list = [];
    var pages = Page.pages;
    
    for (var i = 0;i < pages.length;i++) {
      var groups = pages[i].groups.map(elem => elem._name);
      for (var j = 0;j < groups.length;j++) {
        if (list.indexOf(groups[j]) == -1) {
          list.push(groups[j]);
        }
      }
    }
    
    var groups = [];
    for (var i = 0;i < list.length;i++) {
      groups.push(new Group(list[i]));
    }
    
    return groups;
  }
  
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
    var match = this._name.match(/^(.+?)(?:\/(.+?)(?:\/(.+?))?)?$/);
    
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
  
  get tree() {
    return new Tree(this._name);
  }
}

class Tree {
  constructor(name) {
    this._name = name;
  }
  
  get group() {
    return new Group(this._name);
  }
  
  get name() {
    return this.group.name;
  }
  
  get pages() {
    return this.group.pages;
  }
  
  get sub() {
    var orig = this._name;
    
    var groups = Group.groups.filter(elem => elem._name.length > orig.length && elem._name.substr(0,orig.length + 1) == orig + "/").map(elem => elem._name);
    var sub = {};
    
    for (var i = 0;i < groups.length;i++) {
      sub[groups[i]] = new Tree(groups[i]);
    }
    
    return sub;
  }
  
  get all() {
    var all = this.pages;
    for (var i in this.sub) {
      all = all.concat(this.sub[i].pages);
    }
    
    return all;
  }
  
  get html() {
    function escape(text) {
      return text
        .replace(/&/g,"&amp;")
        .replace(/</g,"&lt;")
        .replace(/>/g,"&gt;")
        .replace(/"/g,"&quot;")
        .replace(/'/g,"&apos;")
    }
    
    if (this.pages.length == 0) {
      var pages = [];
    } else {
      var pages = `<ul>${this.pages.map(elem => `<li><a href='${escape(elem.url)}'>${escape(elem.title)}</a></li>`).join("")}</ul>`;
    }
    
    for (var i in this.sub) {
      pages += `<h2>${escape(i).replace(/^.+\/([^\/]+)/,"$1")}</h2>${this.sub[i].html.replace(/h5/g,"h6").replace(/h4/g,"h5").replace(/h3/g,"h4").replace(/h2/g,"h3")}`;
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
    return Page.pages.filter(elem => elem.keywords.map(el => el._keyword).indexOf(this._keyword) != -1);
  }
}
