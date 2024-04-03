import{_ as a,r as n,o as c,c as p,a as e,b as t,d as r,e as s}from"./app-svjcmKxl.js";const i={},d=e("h1",{id:"bean作用域-scope",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bean作用域-scope"},[e("span",null,"Bean作用域（Scope）")])],-1),l=e("p",null,"当你创建一个Bean定义时，实际上是在创建Bean定义所定义类的实际实例的配方。 将Bean定义视为“配方”的概念非常重要，因为它意味着，就像一个类一样，你可以从一个单一的“配方”中创建多个对象实例。",-1),m=e("code",null,"ApplicationContext",-1),h={href:"https://docs.spring.io/spring-framework/reference/core/beans/factory-scopes.html#beans-factory-scopes-custom",target:"_blank",rel:"noopener noreferrer"},g=s("<table><thead><tr><th>Bean作用域（Scope）</th><th>描述</th></tr></thead><tbody><tr><td>singleton</td><td>(默认) 在整个应用程序中只创建一个Bean实例</td></tr><tr><td>prototype</td><td>每次请求时，创建一个新的Bean实例</td></tr><tr><td>request</td><td>Web程序中，为每个HTTP请求创建一个Bean实例</td></tr><tr><td>session</td><td>Web程序中，为每个HTTP会话创建一个Bean实例</td></tr><tr><td>application</td><td>Web程序中，为每个<code>ServletContext</code>创建一个Bean实例</td></tr><tr><td>websocket</td><td>Web程序中，为每个<code>WebSocket</code>连接创建一个Bean实例</td></tr></tbody></table>",1),B={href:"https://docs.spring.io/spring-framework/docs/6.1.5/javadoc-api/org/springframework/context/support/SimpleThreadScope.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://docs.spring.io/spring-framework/reference/core/beans/factory-scopes.html#beans-factory-scopes-custom-using",target:"_blank",rel:"noopener noreferrer"};function u(_,b){const o=n("ExternalLinkIcon");return c(),p("div",null,[d,l,e("p",null,[t("你不仅可以控制Bean定义中的各种依赖项和配置值，还可以控制由Bean定义创建的对象的作用域（scope）。 这种方法是强大且灵活的，因为你可以通过配置选择创建的对象的作用域，而不必在Java类级别上固定对象的作用域。 Bean定义可以是多种作用域之一。Spring框架支持六种作用域，其中四种仅在使用Web感知（aware）的"),m,t("时才可用。 你还可以创建"),e("a",h,[t("自定义作用域"),r(o)]),t("。")]),g,e("blockquote",null,[e("p",null,[t("线程作用域（Thread Scope）在Spring框架中是可用的，但默认情况下并没有注册。参阅 "),e("a",B,[t("SimpleThreadScope"),r(o)]),t("。 关于如何注册此Scope或任何其他自定义Scope的说明，参阅 "),e("a",f,[t("自定义Scope"),r(o)]),t("。")])])])}const S=a(i,[["render",u],["__file","beans-scope.html.vue"]]),k=JSON.parse('{"path":"/spring-framework/core/beans-scope.html","title":"Bean作用域（Scope）","lang":"zh-CN","frontmatter":{"title":"Bean作用域（Scope）","author":"会敲代码的程序猿","isOriginal":true,"date":"2024-04-03T00:00:00.000Z","category":"Spring","tag":"Spring Framework","description":"Bean作用域（Scope） 当你创建一个Bean定义时，实际上是在创建Bean定义所定义类的实际实例的配方。 将Bean定义视为“配方”的概念非常重要，因为它意味着，就像一个类一样，你可以从一个单一的“配方”中创建多个对象实例。 你不仅可以控制Bean定义中的各种依赖项和配置值，还可以控制由Bean定义创建的对象的作用域（scope）。 这种方法是强...","head":[["meta",{"property":"og:url","content":"https://www.geekyspace.cn/spring-framework/core/beans-scope.html"}],["meta",{"property":"og:site_name","content":"极客空间"}],["meta",{"property":"og:title","content":"Bean作用域（Scope）"}],["meta",{"property":"og:description","content":"Bean作用域（Scope） 当你创建一个Bean定义时，实际上是在创建Bean定义所定义类的实际实例的配方。 将Bean定义视为“配方”的概念非常重要，因为它意味着，就像一个类一样，你可以从一个单一的“配方”中创建多个对象实例。 你不仅可以控制Bean定义中的各种依赖项和配置值，还可以控制由Bean定义创建的对象的作用域（scope）。 这种方法是强..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-03T09:28:49.000Z"}],["meta",{"property":"article:author","content":"会敲代码的程序猿"}],["meta",{"property":"article:tag","content":"Spring Framework"}],["meta",{"property":"article:published_time","content":"2024-04-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-03T09:28:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Bean作用域（Scope）\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-03T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-03T09:28:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"会敲代码的程序猿\\"}]}"]]},"headers":[],"git":{"createdTime":1712131991000,"updatedTime":1712136529000,"contributors":[{"name":"zhouyu","email":"zhouyu@liquido.cn","commits":2}]},"readingTime":{"minutes":1.47,"words":440},"filePathRelative":"spring-framework/core/beans-scope.md","localizedDate":"2024年4月3日","excerpt":"\\n<p>当你创建一个Bean定义时，实际上是在创建Bean定义所定义类的实际实例的配方。\\n将Bean定义视为“配方”的概念非常重要，因为它意味着，就像一个类一样，你可以从一个单一的“配方”中创建多个对象实例。</p>\\n<p>你不仅可以控制Bean定义中的各种依赖项和配置值，还可以控制由Bean定义创建的对象的作用域（scope）。\\n这种方法是强大且灵活的，因为你可以通过配置选择创建的对象的作用域，而不必在Java类级别上固定对象的作用域。\\nBean定义可以是多种作用域之一。Spring框架支持六种作用域，其中四种仅在使用Web感知（aware）的<code>ApplicationContext</code>时才可用。\\n你还可以创建<a href=\\"https://docs.spring.io/spring-framework/reference/core/beans/factory-scopes.html#beans-factory-scopes-custom\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">自定义作用域</a>。</p>","copyright":{"author":"会敲代码的程序猿"},"autoDesc":true}');export{S as comp,k as data};
