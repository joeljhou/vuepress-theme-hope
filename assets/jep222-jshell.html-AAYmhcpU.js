const e=JSON.parse('{"key":"v-295ab5bb","path":"/java-features/Java9/jep222-jshell.html","title":"Java 9 新特性：交互式编程环境JShell","lang":"zh-CN","frontmatter":{"title":"Java 9 新特性：交互式编程环境JShell","description":"Java 9 引入了许多新特性，其中之一就是 JShell，这是一个交互式编程环境，也被称为 REPL（Read-Eval-Print Loop）。 JShell 的目标是使 Java 编程更加互动和易学，尤其是对于初学者和快速原型开发。 JShell快速入门 启动JShell 打开终端，然后执行命令：jshell，执行效果如下： ➜ ~ jshell | 欢迎使用 JShell -- 版本 9 | 要大致了解该版本, 请键入: /help intro jshell&gt;","author":"会敲代码的程序猿","isOriginal":true,"date":"2023-12-24T00:00:00.000Z","category":"Java","tag":["Java"],"order":222,"head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/joeljhou/java-features/Java9/jep222-jshell.html"}],["meta",{"property":"og:site_name","content":"会敲代码的程序猿"}],["meta",{"property":"og:title","content":"Java 9 新特性：交互式编程环境JShell"}],["meta",{"property":"og:description","content":"Java 9 引入了许多新特性，其中之一就是 JShell，这是一个交互式编程环境，也被称为 REPL（Read-Eval-Print Loop）。 JShell 的目标是使 Java 编程更加互动和易学，尤其是对于初学者和快速原型开发。 JShell快速入门 启动JShell 打开终端，然后执行命令：jshell，执行效果如下： ➜ ~ jshell | 欢迎使用 JShell -- 版本 9 | 要大致了解该版本, 请键入: /help intro jshell&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-24T15:26:51.000Z"}],["meta",{"property":"article:author","content":"会敲代码的程序猿"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-12-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-24T15:26:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 9 新特性：交互式编程环境JShell\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-24T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-24T15:26:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"会敲代码的程序猿\\"}]}"]]},"headers":[{"level":2,"title":"JShell快速入门","slug":"jshell快速入门","link":"#jshell快速入门","children":[{"level":3,"title":"启动JShell","slug":"启动jshell","link":"#启动jshell","children":[]},{"level":3,"title":"帮助介绍 /help intro","slug":"帮助介绍-help-intro","link":"#帮助介绍-help-intro","children":[]},{"level":3,"title":"定义变量、方法、类","slug":"定义变量、方法、类","link":"#定义变量、方法、类","children":[]},{"level":3,"title":"执行表达式、调用方法","slug":"执行表达式、调用方法","link":"#执行表达式、调用方法","children":[]}]},{"level":2,"title":"查看定义的变量：/vars","slug":"查看定义的变量-vars","link":"#查看定义的变量-vars","children":[]},{"level":2,"title":"查看定义的方法：/methods","slug":"查看定义的方法-methods","link":"#查看定义的方法-methods","children":[]},{"level":2,"title":"查看定义的类：/types","slug":"查看定义的类-types","link":"#查看定义的类-types","children":[]},{"level":2,"title":"列出输入源条目：/list","slug":"列出输入源条目-list","link":"#列出输入源条目-list","children":[]},{"level":2,"title":"编辑源条目：/edit","slug":"编辑源条目-edit","link":"#编辑源条目-edit","children":[]},{"level":2,"title":"删除源条目：/drop","slug":"删除源条目-drop","link":"#删除源条目-drop","children":[]},{"level":2,"title":"保存文件：/save","slug":"保存文件-save","link":"#保存文件-save","children":[]},{"level":2,"title":"打开文件：/open","slug":"打开文件-open","link":"#打开文件-open","children":[]},{"level":2,"title":"重置jshell：/reset","slug":"重置jshell-reset","link":"#重置jshell-reset","children":[]},{"level":2,"title":"查看引入的包：/imports","slug":"查看引入的包-imports","link":"#查看引入的包-imports","children":[]},{"level":2,"title":"退出jshell：/exit","slug":"退出jshell-exit","link":"#退出jshell-exit","children":[]},{"level":2,"title":"查看命令：/help","slug":"查看命令-help","link":"#查看命令-help","children":[]}],"git":{"createdTime":1703058579000,"updatedTime":1703431611000,"contributors":[{"name":"zhouyu","email":"zhouyu@liquido.cn","commits":5},{"name":"joeljhou","email":"joeljhou336@gmail.com","commits":1}]},"readingTime":{"minutes":5.11,"words":1532},"filePathRelative":"java-features/Java9/jep222-jshell.md","localizedDate":"2023年12月24日","excerpt":"<p>Java 9 引入了许多新特性，其中之一就是 JShell，这是一个交互式编程环境，也被称为 REPL（Read-Eval-Print Loop）。\\nJShell 的目标是使 Java 编程更加互动和易学，尤其是对于初学者和快速原型开发。</p>\\n<h2> JShell快速入门</h2>\\n<h3> 启动JShell</h3>\\n<p>打开终端，然后执行命令：<code>jshell</code>，执行效果如下：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code>➜  <span class=\\"token operator\\">~</span> jshell\\n<span class=\\"token operator\\">|</span>  欢迎使用 <span class=\\"token class-name\\">JShell</span> <span class=\\"token operator\\">--</span> 版本 <span class=\\"token number\\">9</span>\\n<span class=\\"token operator\\">|</span>  要大致了解该版本<span class=\\"token punctuation\\">,</span> 请键入<span class=\\"token operator\\">:</span> <span class=\\"token operator\\">/</span>help intro\\n\\njshell<span class=\\"token operator\\">&gt;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"JoelJhou","license":"MIT"},"autoDesc":true}');export{e as data};