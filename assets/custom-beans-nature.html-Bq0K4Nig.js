import{_ as r,r as o,o as i,c,a as e,b as a,d as n,e as s}from"./app-eFncKMXc.js";const l={},p=s('<h1 id="自定义bean的性质" tabindex="-1"><a class="header-anchor" href="#自定义bean的性质"><span>自定义Bean的性质</span></a></h1><p>Spring框架提供了多种接口，你可以使用这些接口来定制Bean的性质。本节将它们分为以下几类：</p><ul><li><a href="#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%9E%E8%B0%83">生命周期回调</a></li><li><a href="#applicationcontextaware%E5%92%8Cbeannameaware">ApplicationContextAware 和 BeanNameAware</a></li><li><a href="#%E5%85%B6%E4%BB%96aware%E6%8E%A5%E5%8F%A3">其他Aware接口</a></li></ul><h2 id="生命周期回调" tabindex="-1"><a class="header-anchor" href="#生命周期回调"><span>生命周期回调</span></a></h2><p>为了与容器管理Bean的生命周期进行交互，你可以实现Spring的<code>InitializingBean</code>和<code>DisposableBean</code>接口。 容器调用前者的<code>afterPropertiesSet()</code>方法以及后者的<code>destroy()</code>方法，让Bean在初始化和销毁时执行特定的操作。</p>',5),d={class:"hint-container tip"},h=e("p",{class:"hint-container-title"},"提示",-1),m=e("code",null,"@PostConstruct",-1),u=e("code",null,"@PreDestroy",-1),g={href:"https://docs.spring.io/spring-framework/reference/core/beans/annotation-config/postconstruct-and-predestroy-annotations.html",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,[a("如果你不想使用JSR-250注解，但仍然希望消除耦合，可以考虑使用"),e("code",null,"init-method"),a("和"),e("code",null,"destroy-method"),a("的Bean定义元数据。")],-1),w=e("p",null,"在内部，Spring框架使用 BeanPostProcessor 实现来处理它能找到的任何回调接口并调用相应的方法。 如果你需要自定义功能或其他Spring默认不提供的生命周期行为，你可以自己实现一个 BeanPostProcessor。 欲了解更多信息，请参见 容器扩展点。",-1),B=e("code",null,"BeanPostProcessor",-1),f=e("code",null,"BeanPostProcessor",-1),A={href:"https://docs.spring.io/spring-framework/reference/core/beans/factory-extension.html",target:"_blank",rel:"noopener noreferrer"},E=e("p",null,[a("除了初始化和销毁回调之外，Spring管理的对象还可以实现"),e("code",null,"Lifecycle"),a("接口，以便这些对象可以参与由容器自身生命周期驱动的启动和关闭过程。")],-1),y=e("p",null,"生命周期回调接口在本节中有详细描述。",-1),b=e("h2",{id:"applicationcontextaware和beannameaware",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#applicationcontextaware和beannameaware"},[e("span",null,"ApplicationContextAware和BeanNameAware")])],-1),x=e("h2",{id:"其他aware接口",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#其他aware接口"},[e("span",null,"其他Aware接口")])],-1);function S(k,P){const t=o("ExternalLinkIcon");return i(),c("div",null,[p,e("div",d,[h,e("p",null,[a("在现代的Spring应用程序中，通常认为JSR-250的"),m,a("和"),u,a("注解是用于接收生命周期回调最佳实践。 使用这些注解意味着你的Bean不会与Spring特定的接口耦合。参阅 "),e("a",g,[a("使用@PostConstruct和@PreDestroy"),n(t)]),a("。")]),_]),w,e("p",null,[a("Spring框架在内部使用"),B,a("实现来处理它找到的任何回调接口，并调用适当的方法。 如果你需要自定义功能或其他Spring默认不提供的生命周期行为，你可以自己实现一个"),f,a("。 参阅 "),e("a",A,[a("容器扩展点"),n(t)]),a("。")]),E,y,b,x])}const N=r(l,[["render",S],["__file","custom-beans-nature.html.vue"]]),T=JSON.parse('{"path":"/spring-framework/core/custom-beans-nature.html","title":"自定义Bean的性质","lang":"zh-CN","frontmatter":{"title":"自定义Bean的性质","author":"会敲代码的程序猿","isOriginal":true,"date":"2024-04-08T00:00:00.000Z","category":"Spring","tag":"Spring Framework","description":"自定义Bean的性质 Spring框架提供了多种接口，你可以使用这些接口来定制Bean的性质。本节将它们分为以下几类： 生命周期回调 ApplicationContextAware 和 BeanNameAware 其他Aware接口 生命周期回调 为了与容器管理Bean的生命周期进行交互，你可以实现Spring的InitializingBean和Dis...","head":[["meta",{"property":"og:url","content":"https://www.geekyspace.cn/spring-framework/core/custom-beans-nature.html"}],["meta",{"property":"og:site_name","content":"极客空间"}],["meta",{"property":"og:title","content":"自定义Bean的性质"}],["meta",{"property":"og:description","content":"自定义Bean的性质 Spring框架提供了多种接口，你可以使用这些接口来定制Bean的性质。本节将它们分为以下几类： 生命周期回调 ApplicationContextAware 和 BeanNameAware 其他Aware接口 生命周期回调 为了与容器管理Bean的生命周期进行交互，你可以实现Spring的InitializingBean和Dis..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-08T09:21:34.000Z"}],["meta",{"property":"article:author","content":"会敲代码的程序猿"}],["meta",{"property":"article:tag","content":"Spring Framework"}],["meta",{"property":"article:published_time","content":"2024-04-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-08T09:21:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"自定义Bean的性质\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-08T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-08T09:21:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"会敲代码的程序猿\\"}]}"]]},"headers":[{"level":2,"title":"生命周期回调","slug":"生命周期回调","link":"#生命周期回调","children":[]},{"level":2,"title":"ApplicationContextAware和BeanNameAware","slug":"applicationcontextaware和beannameaware","link":"#applicationcontextaware和beannameaware","children":[]},{"level":2,"title":"其他Aware接口","slug":"其他aware接口","link":"#其他aware接口","children":[]}],"git":{"createdTime":1712567172000,"updatedTime":1712568094000,"contributors":[{"name":"zhouyu","email":"zhouyu@liquido.cn","commits":2}]},"readingTime":{"minutes":1.75,"words":526},"filePathRelative":"spring-framework/core/custom-beans-nature.md","localizedDate":"2024年4月8日","excerpt":"\\n<p>Spring框架提供了多种接口，你可以使用这些接口来定制Bean的性质。本节将它们分为以下几类：</p>\\n<ul>\\n<li><a href=\\"#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%9E%E8%B0%83\\">生命周期回调</a></li>\\n<li><a href=\\"#applicationcontextaware%E5%92%8Cbeannameaware\\">ApplicationContextAware 和 BeanNameAware</a></li>\\n<li><a href=\\"#%E5%85%B6%E4%BB%96aware%E6%8E%A5%E5%8F%A3\\">其他Aware接口</a></li>\\n</ul>","copyright":{"author":"会敲代码的程序猿"},"autoDesc":true}');export{N as comp,T as data};
