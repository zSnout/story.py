# Page Variables
This page contains information about variables found on each page.

Each variable also has a block of YAML code as a layout. Note that the YAML may contain errors.

## `recent`
This variable contains the five most recent pages the user visited. These are stored as a JSON in a cookie.

``` yaml
recent:
  - url (string): A relative URL pointing to the page.
    title (string): The title of the page.
```

## `pages`
This variable contains all of the pages found in the `/posts/` directory.

``` yaml
pages:
  - url (string): A relative URL pointing to the page.
    title (string): The title of the page.
    related (boolean): Whether the page is related to the current page.
    keyword (array): Keywords specified in the page's front matter. Note that the filename of a page is also included.
      - element (string): A keyword for the page.
    group (array): Groups specified in the page's front matter.
      - element (object): An object containing properties that describe the group.
        - type: "root"
          root: A group that the page belongs to.
      - element (object): An object containing properties that describe the group.
        - type: "sub"
          root: A group that the page belongs to.
          sub: A subgroup of `root` that the page belongs to.
      - element (object): An object containing properties that describe the group.
        - type: "subsub"
          root: A group that the page belongs to.
          sub: A subgroup of `root` that the page belongs to.
          subsub: A subgroup of `sub` that the page belongs to.
```
