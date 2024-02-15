const e=JSON.parse('{"key":"v-4b54f7a2","path":"/java-features/Java18/jep408-simple-web-server.html","title":"Java 18 新特性：简单Web服务器","lang":"zh-CN","frontmatter":{"title":"Java 18 新特性：简单Web服务器","description":"Java 18 新特性：简单Web服务器 Java 18 引入了简单Web服务器（Simple Web Server），一个专为教育或非正式任务设计的最小HTTP服务器，为单个目录层次结构提供服务。 基于JDK中的com.sun.net.httpserver包实现，旨在简化服务器的创建和请求处理过程。 主要特点： 不能替代成熟的商业服务器，如Jetty...","author":"会敲代码的程序猿","isOriginal":true,"date":"2024-01-02T00:00:00.000Z","category":"Java","tag":["Java","Java 18"],"order":408,"head":[["meta",{"property":"og:url","content":"https://www.geekyspace.cn/java-features/Java18/jep408-simple-web-server.html"}],["meta",{"property":"og:site_name","content":"极客空间"}],["meta",{"property":"og:title","content":"Java 18 新特性：简单Web服务器"}],["meta",{"property":"og:description","content":"Java 18 新特性：简单Web服务器 Java 18 引入了简单Web服务器（Simple Web Server），一个专为教育或非正式任务设计的最小HTTP服务器，为单个目录层次结构提供服务。 基于JDK中的com.sun.net.httpserver包实现，旨在简化服务器的创建和请求处理过程。 主要特点： 不能替代成熟的商业服务器，如Jetty..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-14T04:33:47.000Z"}],["meta",{"property":"article:author","content":"会敲代码的程序猿"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"Java 18"}],["meta",{"property":"article:published_time","content":"2024-01-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-14T04:33:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 18 新特性：简单Web服务器\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-02T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-14T04:33:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"会敲代码的程序猿\\"}]}"]]},"headers":[{"level":2,"title":"命令行工具","slug":"命令行工具","link":"#命令行工具","children":[{"level":3,"title":"支持的命令行选项","slug":"支持的命令行选项","link":"#支持的命令行选项","children":[]}]},{"level":2,"title":"API编程方式","slug":"api编程方式","link":"#api编程方式","children":[{"level":3,"title":"简单文件服务器（SimpleFileServer）","slug":"简单文件服务器-simplefileserver","link":"#简单文件服务器-simplefileserver","children":[]},{"level":3,"title":"自定义处理程序和过滤器","slug":"自定义处理程序和过滤器","link":"#自定义处理程序和过滤器","children":[]},{"level":3,"title":"增强的请求处理（HttpHandlers）","slug":"增强的请求处理-httphandlers","link":"#增强的请求处理-httphandlers","children":[]},{"level":3,"title":"请求（Request）","slug":"请求-request","link":"#请求-request","children":[]}]},{"level":2,"title":"替代品","slug":"替代品","link":"#替代品","children":[]}],"git":{"createdTime":1705920487000,"updatedTime":1707885227000,"contributors":[{"name":"zhouyu","email":"zhouyu@liquido.cn","commits":2}]},"readingTime":{"minutes":5.46,"words":1638},"filePathRelative":"java-features/Java18/jep408-simple-web-server.md","localizedDate":"2024年1月2日","excerpt":"\\n<p>Java 18 引入了<strong>简单Web服务</strong>器（Simple Web Server），一个专为教育或非正式任务设计的最小HTTP服务器，为单个目录层次结构提供服务。\\n基于JDK中的<code>com.sun.net.httpserver</code>包实现，旨在简化服务器的创建和请求处理过程。</p>\\n<p>主要特点：</p>\\n<ul>\\n<li>不能替代成熟的商业服务器，如<code>Jetty</code>、<code>Nginx</code> 和 <code>Apache Tomcat</code>等</li>\\n<li>不提供身份验证、访问控制或加密等安全功能</li>\\n<li>仅支持HTTP/1.1，不支持HTTPS</li>\\n<li>仅支持GET、HEAD请求，否则返回 501 Not Implemented 或 405 Not Allowed</li>\\n</ul>","copyright":{"author":"会敲代码的程序猿"},"autoDesc":true}');export{e as data};