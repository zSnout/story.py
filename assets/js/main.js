class Page {
  static get pages() {
    for (var member in window) {
      if (window[member] instanceof Page) {
        
      }
    }
  }
  
  constructor(url,title,group,keyword) {
    this.url = url;
    this.title = title;
    this._groups = group;
    this._keyword = keyword;
    
    
  }
  
  get groups() {
    var group = this._groups.split(/ *, */g);
    
    for (var j = 0;j < group.length;j++) {
      group[j] = group[j].replace(/-/g," ");
      
      var match = group[j].match(/(.+) *\/ *(.+) *\/ *(.+)/);
      if (match) {
        group[j] = {
          type: "subsub",
          root: match[1],
          sub: match[2],
          subsub: match[3]
        };
      } else {
        var match = group[j].match(/(.+) *\/ *(.+)/);
        if (match) {
          group[j] = {
            type: "sub",
            root: match[1],
            sub: match[2]
          };
        } else {
          group[j] = {
            type: "root",
            root: group[j]
          }
        }
      }
    }
    
    return group;
  }
}
