---
date: '2025-01-09T21:16:28+08:00'
draft: false
title: 'Hello World'
cover:
    image: pattern.png
tags:
    - demo
authors:
    - alice
    - bob
categories:
    - demo
---

## Cras consequat leo mauris

> [!NOTE]
> Useful information that users should know, even when skimming content.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis diam nec ex accumsan pharetra sed sit amet turpis. Proin at nunc commodo, mollis leo blandit, semper ex. Phasellus in tortor ut arcu scelerisque sodales. Vivamus eu lorem eget justo molestie pretium sit amet quis enim. Morbi sagittis urna leo, nec bibendum nisl ornare quis. In in suscipit neque, id dignissim urna. Duis lacus purus, feugiat et diam nec, ullamcorper pulvinar ex. Curabitur at suscipit purus. Maecenas consequat purus leo, nec aliquet lectus consectetur nec. Etiam ante dui, placerat non porttitor ac, viverra sed massa. Cras consequat leo mauris, quis vestibulum diam imperdiet ullamcorper. Vivamus vitae nunc lacus. Nunc ligula nibh, scelerisque eget rutrum non, mattis eu tellus. Sed id placerat mi, vel tincidunt arcu. Etiam dignissim malesuada urna sed ornare.

> [!WARNING]+ Cras in sem maximus
> Proin volutpat feugiat felis eu efficitur. Nam ante mauris, imperdiet et consectetur eget

> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras in sem maximus, faucibus ante in, tempus libero. Nulla iaculis rutrum risus maximus ornare. Vestibulum vel nulla non justo facilisis posuere eu et libero. Nulla congue orci ac massa dapibus rhoncus. Proin volutpat feugiat felis eu efficitur. Nam ante mauris, imperdiet et consectetur eget, lobortis et enim.
{cite="https://lipsum.com" caption="Nulla sed ipsum laoreet, suscipit dui sed"} 

![Nunc ligula nibh, scelerisque eget rutrum non](512x512.png "Sed id placerat mi, vel tincidunt arcu.")

### Orci varius natoque penatibus et

Nunc vulputate diam iaculis, tempor arcu faucibus, gravida neque. In luctus ante ante, et dapibus turpis luctus dapibus. Donec egestas libero felis, sit amet consectetur lacus efficitur sed. Phasellus vehicula ex risus, ac ultricies mauris tincidunt quis. Mauris hendrerit bibendum neque id mattis. Cras accumsan nisl mauris, ut dapibus mauris fringilla quis. Nunc lectus elit, viverra eget augue vel, elementum tempus metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam quam enim, luctus sollicitudin facilisis vel, lobortis sed sapien.

``` go
package main

import (
    "fmt"
)

// Hello World!
func main() {
    /* comments */
    var name = "World"
    var count = 5

    for i := 0; i < count*2; i++ {
        fmt.Printf("Hello %s!" , name)
    }
}
```

```go
package main

import (
    "fmt"
    "net/http"
)

func hello(w http.ResponseWriter, req *http.Request) {
    fmt.Fprintf(w, "hello\n")
}

func headers(w http.ResponseWriter, req *http.Request) {
    for name, headers := range req.Header {
        for _, h := range headers {
            fmt.Fprintf(w, "%v: %v\n", name, h)
        }
    }
}

func main() {
    http.HandleFunc("/hello", hello)
    http.HandleFunc("/headers", headers)

    http.ListenAndServe(":8090", nil)
}
```

```goat
      .               .                .               .--- 1          .-- 1     / 1
     / \              |                |           .---+            .-+         +
    /   \         .---+---.         .--+--.        |   '--- 2      |   '-- 2   / \ 2
   +     +        |       |        |       |    ---+            ---+          +
  / \   / \     .-+-.   .-+-.     .+.     .+.      |   .--- 3      |   .-- 3   \ / 3
 /   \ /   \    |   |   |   |    |   |   |   |     '---+            '-+         +
 1   2 3   4    1   2   3   4    1   2   3   4         '--- 4          '-- 4     \ 4

```

### Nullam eget libero et nulla

Suspendisse venenatis turpis mauris, at consectetur turpis laoreet euismod. Nullam eget vulputate quam, ut volutpat nulla. Sed eget faucibus metus. Proin vulputate leo sed tellus pulvinar, et tempor mauris aliquet. Quisque malesuada risus quis ipsum lobortis, ut viverra ligula eleifend. Phasellus justo libero, venenatis eu diam nec, eleifend facilisis diam. Curabitur venenatis nec ligula at dapibus. Nam enim elit, dictum eu nisl et, eleifend tincidunt ligula. Cras finibus justo at fringilla bibendum. Nunc ullamcorper et est quis fringilla. Phasellus efficitur cursus sem eget dictum. Praesent vestibulum tempus posuere.

![](800x600.png)

#### Aliquam rhoncus nec

Donec sit amet felis a dolor vulputate bibendum. Nullam eget libero et nulla pretium egestas nec et felis. Aliquam ut nibh consectetur, fermentum dolor quis, eleifend mi. Curabitur faucibus neque efficitur dignissim lobortis. Donec in metus eros. Aliquam rhoncus nec felis eu aliquet. In sagittis condimentum diam, et suscipit neque laoreet non. Cras dui nisl, ornare vel risus nec, congue vulputate leo.

>  Nam ultricies massa scelerisque erat elementum, ut ullamcorper dolor lacinia. Cras egestas, tortor tincidunt volutpat pellentesque, dolor sapien varius turpis, eu feugiat velit purus sit amet ante. Sed velit ligula, interdum eget ullamcorper a, interdum id tortor. Cras viverra tempor magna, ac imperdiet nunc. Maecenas vel turpis ut ipsum semper consequat ac non eros. In ac ullamcorper enim. In condimentum finibus metus in dictum. Sed tincidunt eros et felis vestibulum, id sodales odio dapibus. Nulla pharetra, orci pellentesque finibus placerat, ex mauris dapibus ex, at dapibus libero lorem a mi. Aliquam pellentesque nibh quis diam convallis, a fermentum elit egestas.
>
> Aliquam sit amet tempor elit. Suspendisse sagittis nulla interdum mi congue consequat. Integer quis dictum risus. Integer ipsum ipsum, semper et ipsum sit amet, pulvinar malesuada ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus blandit feugiat laoreet. Fusce ipsum mi, placerat ac nulla nec, pulvinar sagittis elit. Nam porta neque at hendrerit sodales. In semper egestas consequat. Etiam vitae semper nunc, sit amet iaculis sapien. Duis pellentesque congue quam. Integer nisi diam, pulvinar ut metus a, maximus aliquet libero. Phasellus sagittis aliquam sapien. Nulla sed ipsum laoreet, suscipit dui sed, lacinia quam. Quisque in leo sit amet erat ullamcorper tempus. 
{cite="https://lipsum.com" caption="Nulla sed ipsum laoreet, suscipit dui sed"}

- Ut ultrices tellus vel magna rhoncus luctus.
- Vivamus rutrum pretium mollis.
- Quisque commodo massa eu viverra dictum. 

#### Nunc quam justo

Praesent pulvinar metus nec facilisis tincidunt. Aenean ornare eu ex non porttitor. Proin sed ex lorem. In scelerisque commodo faucibus. Integer ornare volutpat augue, nec ultrices velit tempor quis. Etiam ut risus turpis. Curabitur molestie, enim et suscipit rhoncus, velit dolor luctus velit, sed fermentum ex turpis non massa. Ut ultrices tellus vel magna rhoncus luctus. Donec non viverra nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin vitae mattis tellus. Vivamus rutrum pretium mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc quam justo, consectetur quis rhoncus sed, facilisis et mi. Quisque commodo massa eu viverra dictum. 

![](800x400.png)

1. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
2. Proin vitae mattis tellus. Vivamus rutrum pretium mollis.
3. Aenean ornare eu ex non porttitor.
4. Phasellus efficitur cursus sem eget dictum. Praesent vestibulum tempus posuere.
5. Nunc vulputate diam iaculis, tempor arcu faucibus, gravida neque.
