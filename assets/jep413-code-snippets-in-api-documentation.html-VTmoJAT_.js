const a=JSON.parse('{"key":"v-01bea53d","path":"/java-features/Java18/jep413-code-snippets-in-api-documentation.html","title":"Java 18 新特性：新增@snipppet标签","lang":"zh-CN","frontmatter":{"title":"Java 18 新特性：新增@snipppet标签","description":"Java 18 新特性：新增@snipppet标签 Java 18 引入了@snippet标签，用于在API文档中嵌入代码片段，以便更好地展示API的使用方法。 主要特点： 有效性检查，代码包含语法错误时，会出现错误提示 启用现代样式，例如语法高亮显示，以及名称与声明的自动链接 为创建和编辑代码段提供更好的IDE支持 存在的@code标签 用于单独的小...","author":"会敲代码的程序猿","isOriginal":true,"date":"2024-01-03T00:00:00.000Z","category":"Java","tag":["Java","Java 18"],"order":413,"head":[["meta",{"property":"og:url","content":"https://www.geekyspace.cn/java-features/Java18/jep413-code-snippets-in-api-documentation.html"}],["meta",{"property":"og:site_name","content":"极客空间"}],["meta",{"property":"og:title","content":"Java 18 新特性：新增@snipppet标签"}],["meta",{"property":"og:description","content":"Java 18 新特性：新增@snipppet标签 Java 18 引入了@snippet标签，用于在API文档中嵌入代码片段，以便更好地展示API的使用方法。 主要特点： 有效性检查，代码包含语法错误时，会出现错误提示 启用现代样式，例如语法高亮显示，以及名称与声明的自动链接 为创建和编辑代码段提供更好的IDE支持 存在的@code标签 用于单独的小..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-14T08:18:58.000Z"}],["meta",{"property":"article:author","content":"会敲代码的程序猿"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"Java 18"}],["meta",{"property":"article:published_time","content":"2024-01-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-14T08:18:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 18 新特性：新增@snipppet标签\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-03T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-14T08:18:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"会敲代码的程序猿\\"}]}"]]},"headers":[{"level":2,"title":"存在的@code标签","slug":"存在的-code标签","link":"#存在的-code标签","children":[]},{"level":2,"title":"引入@snippet标签","slug":"引入-snippet标签","link":"#引入-snippet标签","children":[]}],"git":{"createdTime":1705920487000,"updatedTime":1707898738000,"contributors":[{"name":"zhouyu","email":"zhouyu@liquido.cn","commits":2}]},"readingTime":{"minutes":1.09,"words":328},"filePathRelative":"java-features/Java18/jep413-code-snippets-in-api-documentation.md","localizedDate":"2024年1月3日","excerpt":"\\n<p>Java 18 引入了<code>@snippet</code>标签，用于在API文档中嵌入代码片段，以便更好地展示API的使用方法。</p>\\n<p>主要特点：</p>\\n<ul>\\n<li>有效性检查，代码包含语法错误时，会出现错误提示</li>\\n<li>启用现代样式，例如语法高亮显示，以及名称与声明的自动链接</li>\\n<li>为创建和编辑代码段提供更好的IDE支持</li>\\n</ul>\\n<h2>存在的@code标签</h2>\\n<p>用于单独的小段代码, 当代码片段复杂时, 使用复合模式的文档注释，如下所示：</p>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code> <span class=\\"token operator\\">*</span> <span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span>pre<span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token punctuation\\">{</span><span class=\\"token annotation punctuation\\">@code</span>\\n <span class=\\"token operator\\">*</span>     源代码行<span class=\\"token number\\">1</span>\\n <span class=\\"token operator\\">*</span>     <span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span>\\n <span class=\\"token operator\\">*</span>     源代码行n\\n <span class=\\"token operator\\">*</span> <span class=\\"token punctuation\\">}</span><span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>pre<span class=\\"token operator\\">&gt;</span>\\n</code></pre></div>","copyright":{"author":"会敲代码的程序猿"},"autoDesc":true}');export{a as data};