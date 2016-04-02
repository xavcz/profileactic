Css ( @alexlande )

1. Prepare Styleguides for your application
2. Consistent naming convention
3. Radium:
  - style arrays
  ```
  style={[
    styles.base,
    styles[this.props.kind],
    this.props.block && styles.block
  ]}
  ```

4. CSS Modules 
```
// blog-post.css
.title { font-size: 2rem; }

//blog-post.js
var styles = require( "./blog-post.css" );
<h2 class = {{ styles.title }}></h2>

// Rendered HTML
<h2 class="title_12ekjlk"></h2>
```

5. Compose
```
.normal { font-size: 2rem; }
.highlight {
  composes: normal;
  color: orange;
}
```



