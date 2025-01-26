---
date: '2025-01-10T10:30:13+08:00'
draft: false
title: 'Codeblocks'
section: docs
tags:
    - demo
    - markup/codeblock
authors:
    - alice
categories:
    - demo
cover:
    image: pattern.png
---

## Markdown Code Fence

```go
// example
package main

import "fmt"

func main() {
    fmt.Println("Hello World!")
}
```

~~~md
```go
// example
package main

import "fmt"

func main() {
    fmt.Println("Hello World!")
}
```
~~~

### With Highlights

```go {linenos=table,hl_lines=[1,"6-8"],linenostart=1}
// example
package main

import "fmt"

func main() {
    fmt.Println("Hello World!")
}
```

## Hugo ShortCodes

{{< highlight go >}}
// example
package main

import "fmt"

func main() {
    fmt.Println("Hello World!")
}
{{< / highlight >}}

### With Highlights

{{< highlight go "linenos=table,hl_lines=1 6-8,linenostart=1" >}}
// example
package main

import "fmt"

func main() {
    fmt.Println("Hello World!")
}
{{< / highlight >}}

