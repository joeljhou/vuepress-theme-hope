import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as e,e as s}from"./app-DEQAvezK.js";const o={};function i(p,a){return t(),e("div",null,a[0]||(a[0]=[s(`<h1 id="懒加载-lazy-initialization-bean" tabindex="-1"><a class="header-anchor" href="#懒加载-lazy-initialization-bean"><span>懒加载（Lazy Initialization）Bean</span></a></h1><p>在Spring框架中，<code>ApplicationContext</code>的默认行为是在启动过程中立即创建并配置所有的单例Bean。 这种做法有利于及时发现配置错误或环境问题，避免了错误在应用运行一段时间后才暴露。 然而，如果需要改变这一行为，可以通过设置Bean定义为懒加载（lazy-initialized）来实现。 这样一来，Bean的实例化将被推迟到第一次实际请求该Bean时进行，而不是在应用启动时完成，从而提供了更大的灵活性和控制。</p><p>在XML中，通过<code>&lt;bean/&gt;</code>元素上的<code>lazy-init</code>属性来控制这种行为，如下例所示：</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 将Bean定义为懒加载 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lazy<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.something.ExpensiveToCreateBean<span class="token punctuation">&quot;</span></span> <span class="token attr-name">lazy-init</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token comment">&lt;!-- 默认立即创建Bean --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>not.lazy<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.something.AnotherBean<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当上述配置被<code>ApplicationContext</code>加载启动时，<code>lazy</code> Bean不会立即预实例化，而<code>not.lazy</code> Bean则会被急切地预实例化。</p><p>然而，当一个懒加载的Bean作为另一个未标记为懒加载单例Bean的依赖项时，<code>ApplicationContext</code>会在启动时创建这个懒加载的Bean， 因为它必须满足单例Bean的依赖关系。懒加载的Bean会被注入到一个未标记为懒加载的单例Bean中。</p><p>你还可以通过在<code>&lt;beans/&gt;</code>元素上使用<code>default-lazy-init</code>属性来控制容器级别的懒加载初始化，如下例所示：</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span> <span class="token attr-name">default-lazy-init</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token comment">&lt;!-- 不会预实例化任何Bean... --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)]))}const r=n(o,[["render",i],["__file","factory-lazy-init.html.vue"]]),u=JSON.parse('{"path":"/md/spring-framework/core/dependencies/factory-lazy-init.html","title":"懒加载（Lazy Initialization）Bean","lang":"zh-CN","frontmatter":{"title":"懒加载（Lazy Initialization）Bean","author":"会敲代码的程序猿","isOriginal":true,"date":"2024-03-26T00:00:00.000Z","category":"Spring","tag":"Spring Framework","description":"懒加载（Lazy Initialization）Bean 在Spring框架中，ApplicationContext的默认行为是在启动过程中立即创建并配置所有的单例Bean。 这种做法有利于及时发现配置错误或环境问题，避免了错误在应用运行一段时间后才暴露。 然而，如果需要改变这一行为，可以通过设置Bean定义为懒加载（lazy-initialized）...","head":[["meta",{"property":"og:url","content":"https://www.geekyspace.cn/md/spring-framework/core/dependencies/factory-lazy-init.html"}],["meta",{"property":"og:title","content":"懒加载（Lazy Initialization）Bean"}],["meta",{"property":"og:description","content":"懒加载（Lazy Initialization）Bean 在Spring框架中，ApplicationContext的默认行为是在启动过程中立即创建并配置所有的单例Bean。 这种做法有利于及时发现配置错误或环境问题，避免了错误在应用运行一段时间后才暴露。 然而，如果需要改变这一行为，可以通过设置Bean定义为懒加载（lazy-initialized）..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-27T17:14:35.000Z"}],["meta",{"property":"article:author","content":"会敲代码的程序猿"}],["meta",{"property":"article:tag","content":"Spring Framework"}],["meta",{"property":"article:published_time","content":"2024-03-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T17:14:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"懒加载（Lazy Initialization）Bean\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-26T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-27T17:14:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"会敲代码的程序猿\\"}]}"]]},"headers":[],"git":{"createdTime":1719508475000,"updatedTime":1719508475000,"contributors":[{"name":"joeljhou","email":"joeljhou336@gmail.com","commits":1}]},"readingTime":{"minutes":1.37,"words":412},"filePathRelative":"md/spring-framework/core/dependencies/factory-lazy-init.md","localizedDate":"2024年3月26日","excerpt":"\\n<p>在Spring框架中，<code>ApplicationContext</code>的默认行为是在启动过程中立即创建并配置所有的单例Bean。\\n这种做法有利于及时发现配置错误或环境问题，避免了错误在应用运行一段时间后才暴露。\\n然而，如果需要改变这一行为，可以通过设置Bean定义为懒加载（lazy-initialized）来实现。\\n这样一来，Bean的实例化将被推迟到第一次实际请求该Bean时进行，而不是在应用启动时完成，从而提供了更大的灵活性和控制。</p>\\n<p>在XML中，通过<code>&lt;bean/&gt;</code>元素上的<code>lazy-init</code>属性来控制这种行为，如下例所示：</p>","copyright":{"author":"会敲代码的程序猿"},"autoDesc":true}');export{r as comp,u as data};
