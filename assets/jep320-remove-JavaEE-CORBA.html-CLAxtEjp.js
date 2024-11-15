import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as i,e as l}from"./app-DEQAvezK.js";const o={};function v(n,a){return t(),i("div",null,a[0]||(a[0]=[l('<h1 id="java-11-新特性-移除javaee和corba模块以及javafx" tabindex="-1"><a class="header-anchor" href="#java-11-新特性-移除javaee和corba模块以及javafx"><span>Java 11 新特性 ：移除JavaEE和CORBA模块以及JavaFX</span></a></h1><p>Java 11 中移除了 <code>Java EE</code> 和 <code>CORBA</code> 模块，同时 <code>JavaFX</code> 也被剥离，但仍可作为独立模块使用。</p><h2 id="java9-弃用过程" tabindex="-1"><a class="header-anchor" href="#java9-弃用过程"><span>Java9 弃用过程</span></a></h2><p>在 Java 9 中，<code>Java EE</code> 和 <code>CORBA</code> 模块被标记为 @Deprecated，为开发者提供了适应期。</p><h2 id="java11-彻底删除" tabindex="-1"><a class="header-anchor" href="#java11-彻底删除"><span>Java11 彻底删除</span></a></h2><p>Java 11 完全删除了以下九个模块：</p><ul><li>java.xml.ws（包含 JAX-WS、SAAJ 和 Web 服务元数据）</li><li>java.xml.bind（JAXB）</li><li>java.activation(JAF)</li><li>java.xml.ws.annotation（常用注解）</li><li>java.corba（CORBA）</li><li>java.transaction(JTA)</li><li>java.se.ee (以上6个模块的聚合模块)</li><li>jdk.xml.ws (JAX-WS 工具)</li><li>jdk.xml.bind (JAXB 工具)</li></ul><p>删除后的影响：</p><ul><li>源代码从 OpenJDK 存储库中删除</li><li>在 JDK 运行时映像中将不包含这些类</li><li>相关工具将不再可用: <ul><li>wsgen and wsimport (来自 jdk.xml.ws)</li><li>schemagen and xjc (来自 jdk.xml.bind)</li><li>idlj, orbd, servertool, and tnamesrv (来自 java.corba)</li></ul></li><li>JNDI CosNaming 提供者 (来自 java.corba) 将不再可用</li><li>不再有命令行标志能够启用它们，就像 JDK 9 上的 --add-modules 一样</li></ul><h2 id="javafx-移除" tabindex="-1"><a class="header-anchor" href="#javafx-移除"><span>JavaFX 移除</span></a></h2><p><code>JavaFX</code> 在 Java 11 中被移除，但仍可以作为独立模块使用。 开发者需要额外的配置和依赖，以在项目中继续使用 JavaFX 技术。</p>',11)]))}const d=e(o,[["render",v],["__file","jep320-remove-JavaEE-CORBA.html.vue"]]),J=JSON.parse('{"path":"/md/java-features/Java11/jep320-remove-JavaEE-CORBA.html","title":"Java 11 新特性 ：移除JavaEE和CORBA模块以及JavaFX","lang":"zh-CN","frontmatter":{"title":"Java 11 新特性 ：移除JavaEE和CORBA模块以及JavaFX","shortTitle":"Java 11 新特性 ：移除JavaEE和CORBA模块","description":"Java 11 新特性 ：移除JavaEE和CORBA模块以及JavaFX Java 11 中移除了 Java EE 和 CORBA 模块，同时 JavaFX 也被剥离，但仍可作为独立模块使用。 Java9 弃用过程 在 Java 9 中，Java EE 和 CORBA 模块被标记为 @Deprecated，为开发者提供了适应期。 Java11 彻底删...","author":"会敲代码的程序猿","isOriginal":true,"date":"2023-12-24T00:00:00.000Z","category":"Java","tag":"Java Features","order":320,"head":[["meta",{"property":"og:url","content":"https://www.geekyspace.cn/md/java-features/Java11/jep320-remove-JavaEE-CORBA.html"}],["meta",{"property":"og:title","content":"Java 11 新特性 ：移除JavaEE和CORBA模块以及JavaFX"}],["meta",{"property":"og:description","content":"Java 11 新特性 ：移除JavaEE和CORBA模块以及JavaFX Java 11 中移除了 Java EE 和 CORBA 模块，同时 JavaFX 也被剥离，但仍可作为独立模块使用。 Java9 弃用过程 在 Java 9 中，Java EE 和 CORBA 模块被标记为 @Deprecated，为开发者提供了适应期。 Java11 彻底删..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-27T17:14:35.000Z"}],["meta",{"property":"article:author","content":"会敲代码的程序猿"}],["meta",{"property":"article:tag","content":"Java Features"}],["meta",{"property":"article:published_time","content":"2023-12-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T17:14:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 11 新特性 ：移除JavaEE和CORBA模块以及JavaFX\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-24T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-27T17:14:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"会敲代码的程序猿\\"}]}"]]},"headers":[{"level":2,"title":"Java9 弃用过程","slug":"java9-弃用过程","link":"#java9-弃用过程","children":[]},{"level":2,"title":"Java11 彻底删除","slug":"java11-彻底删除","link":"#java11-彻底删除","children":[]},{"level":2,"title":"JavaFX 移除","slug":"javafx-移除","link":"#javafx-移除","children":[]}],"git":{"createdTime":1719508475000,"updatedTime":1719508475000,"contributors":[{"name":"joeljhou","email":"joeljhou336@gmail.com","commits":1}]},"readingTime":{"minutes":1.13,"words":338},"filePathRelative":"md/java-features/Java11/jep320-remove-JavaEE-CORBA.md","localizedDate":"2023年12月24日","excerpt":"\\n<p>Java 11 中移除了 <code>Java EE</code> 和 <code>CORBA</code> 模块，同时 <code>JavaFX</code> 也被剥离，但仍可作为独立模块使用。</p>\\n<h2>Java9 弃用过程</h2>\\n<p>在 Java 9 中，<code>Java EE</code> 和 <code>CORBA</code> 模块被标记为 @Deprecated，为开发者提供了适应期。</p>\\n<h2>Java11 彻底删除</h2>\\n<p>Java 11 完全删除了以下九个模块：</p>\\n<ul>\\n<li>java.xml.ws（包含 JAX-WS、SAAJ 和 Web 服务元数据）</li>\\n<li>java.xml.bind（JAXB）</li>\\n<li>java.activation(JAF)</li>\\n<li>java.xml.ws.annotation（常用注解）</li>\\n<li>java.corba（CORBA）</li>\\n<li>java.transaction(JTA)</li>\\n<li>java.se.ee (以上6个模块的聚合模块)</li>\\n<li>jdk.xml.ws (JAX-WS 工具)</li>\\n<li>jdk.xml.bind (JAXB 工具)</li>\\n</ul>","copyright":{"author":"会敲代码的程序猿"},"autoDesc":true}');export{d as comp,J as data};
