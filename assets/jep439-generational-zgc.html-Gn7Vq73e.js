import{_ as r,r as o,o as s,c as i,a as e,b as n,e as a,f as l}from"./app-8DztuAjh.js";const c={},d=e("h1",{id:"java-21-新特性-分代zgc-generational-zgc",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#java-21-新特性-分代zgc-generational-zgc"},[e("span",null,"Java 21 新特性：分代ZGC（Generational ZGC）")])],-1),p=e("p",null,"Java以其垃圾回收机制而闻名。这是它的主要优势之一，但也可能是许多头疼的根源。",-1),h={href:"https://openjdk.org/jeps/333",target:"_blank",rel:"noopener noreferrer"},_={href:"https://openjdk.org/jeps/377",target:"_blank",rel:"noopener noreferrer"},g={href:"https://openjdk.org/jeps/439",target:"_blank",rel:"noopener noreferrer"},u=e("h2",{id:"垃圾收集-garbage-collection",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#垃圾收集-garbage-collection"},[e("span",null,"垃圾收集（Garbage Collection）")])],-1),v=e("p",null,[n("在Java中，垃圾收集器负责释放堆内存，堆内存是存储Java对象的地方。 这有助于防止内存泄漏并确保有效的资源使用，否则，程序会抛出"),e("code",null,"OutOfMemoryError"),n("异常。")],-1),C={href:"https://wiki.c2.com/?GarbageCollection",target:"_blank",rel:"noopener noreferrer"},b=e("strong",null,"自动内存管理",-1),m=e("ol",null,[e("li",null,"需要时间来清理和重新排列内存，引入了运行时开销，超出了程序员的控制。"),e("li",null,[n("GC运行的实际点通常是不确定的，对于高吞吐量内存消耗大的应用，可能会长时间的“"),e("strong",null,"GC暂停"),n("”")]),e("li",null,"讽刺的是，GC的非确定性也是它的优点之一，我们不必担心内存是何时或如何释放的，它将自动发生")],-1),G=e("p",null,"有三种主要的自动内存管理技术：",-1),f={href:"https://wiki.c2.com/?ReferenceCounting",target:"_blank",rel:"noopener noreferrer"},k={href:"https://wiki.c2.com/?MarkAndSweep",target:"_blank",rel:"noopener noreferrer"},J={href:"https://wiki.c2.com/?StopAndCopy",target:"_blank",rel:"noopener noreferrer"},Z=e("h2",{id:"不同语言如何管理内存",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#不同语言如何管理内存"},[e("span",null,"不同语言如何管理内存")])],-1),j=e("li",null,[e("strong",null,"C/C++"),n("：手动管理内存，程序员负责分配和释放内存")],-1),S=e("li",null,[e("strong",null,"Objective-C 和 Swift"),n("：引入了自动引用计数（ARC），但仍然需要手动释放内存")],-1),w=e("strong",null,"Rust",-1),y={href:"https://en.wikipedia.org/wiki/Substructural_type_system#Affine_type_systems",target:"_blank",rel:"noopener noreferrer"},x=e("li",null,[e("strong",null,"Kotlin"),n("：与Java类似，但引入了"),e("code",null,"Kotlin/Native"),n("，允许手动内存管理")],-1),M={href:"https://devguide.python.org/internals/garbage-collector/",target:"_blank",rel:"noopener noreferrer"},E={href:"https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/fundamentals",target:"_blank",rel:"noopener noreferrer"},V=e("h2",{id:"hotspot-jvm垃圾收集器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hotspot-jvm垃圾收集器"},[e("span",null,"HotSpot JVM垃圾收集器")])],-1),X=e("p",null,"内存管理有许多不同的方法，并且没有“最好”的方法。 即使在一种语言/运行时中，也可以有不止一种垃圾收集方法，JVM就是一个很好的例子。",-1),z={href:"https://docs.oracle.com/en/java/javase/11/gctuning/available-collectors.html",target:"_blank",rel:"noopener noreferrer"},P=e("ul",null,[e("li",null,"Garbage-First Collector(G1)（Java 9后的默认选项）"),e("li",null,"Serial Collector"),e("li",null,"Parallel Collector"),e("li",null,[e("s",null,"Concurrent Mark Sweep (CMS) Collector（Java 9中已弃用）")]),e("li",null,"Shenandoah GC（Java 12+）"),e("li",null,"Z Garbage Collector（Java 15中可用于生产）")],-1),A=e("p",null,"此外，不要忘记还有其他的JDK实现！",-1),N={href:"https://eclipse.dev/openj9/",target:"_blank",rel:"noopener noreferrer"},B={href:"https://www.graalvm.org/latest/reference-manual/native-image/optimizations-and-performance/MemoryManagement/",target:"_blank",rel:"noopener noreferrer"},O=l('<h2 id="如何选择jvm-gc" tabindex="-1"><a class="header-anchor" href="#如何选择jvm-gc"><span>如何选择JVM GC</span></a></h2><p>许多语言只提供了一种垃圾收集方法，而Java之所以提供多种GC选项，取决于您的应用程序对于“全局停顿”事件和总体暂停时间的容忍程度。</p><p>GC算法主要关注三个指标：</p><ol><li><strong>吞吐量</strong>：应用程序的运行时间与GC时间的比率</li><li><strong>延迟</strong>：GC暂停时间</li><li><strong>内存占用</strong>：GC对堆内存的使用</li></ol><p>与许多问题一样，您无法为所有这些问题进行优化，因此每个GC都需要在它们之间找到平衡点。以下是一些场景及其匹配的GC作为起点：</p><table><thead><tr><th>垃圾收集器</th><th>场景</th></tr></thead><tbody><tr><td>Serial</td><td>小数据集 (最大~100 MB)<br>资源有限 (例如单核)<br>暂停时间短</td></tr><tr><td>Parallel</td><td>多核系统上的峰值性能<br>非常适合高计算负载<br>暂停时间 &gt; 1秒是可以接受的</td></tr><tr><td>G1<br>CMS</td><td>响应时间 &gt; 吞吐量<br>堆内存较大<br>暂停时间 &lt; 1秒</td></tr><tr><td>Shenandoah</td><td>尽量减少暂停时间<br>可预测的延迟</td></tr><tr><td>ZGC</td><td>响应时间是高优先级的，和/或<br>非常大的堆内存</td></tr><tr><td>Epsilon GC</td><td>性能测试和故障排除</td></tr></tbody></table><p>每种方法都有自己的优点和缺点，这在很大程度上取决于应用程序的需求和可用资源。</p><h2 id="分代zgc" tabindex="-1"><a class="header-anchor" href="#分代zgc"><span>分代ZGC</span></a></h2><p>Java 11引入的实验性功能<strong>ZGC</strong>是一种<strong>非分代</strong>的垃圾收集方法。 尽管如此，它在<strong>GC暂停</strong>时间方面仍然带来了显著改进，至少在资源足够的情况下，可以比并发线程消耗内存更快地回收内存。 缺点是，它将所有对象存储在一起，而不考虑年龄，因此每个周期都会收集所有对象。</p>',9),R={href:"https://www.memorymanagement.org/glossary/g.html#generational.hypothesis",target:"_blank",rel:"noopener noreferrer"},U=e("mark",null,"年轻对象",-1),K=e("mark",null,"年长对象",-1),$=e("strong",null,"早逝",-1),H=l(`<p>Java 21 中，<strong>分代 ZGC</strong> 将堆分为两个逻辑代：一个用于最近分配的对象，另一个用于长期存活对象。 GC 可以专注于更频繁地收集<strong>年轻</strong>(最近分配)且更有<strong>前途</strong>(可能长期存在)的对象，而不会增加GC暂停时间，将其保持在 1 毫秒以下。</p><p><strong>分代ZGC</strong>与非分代ZGC相比的关键优势：</p><ul><li>减少分配停滞的风险</li><li>降低堆内存开销要求</li><li>减少垃圾回收CPU开销</li></ul><p>此外，目标是在保留非分代方法已有优势的基础上实现这些优势：</p><ul><li>暂停时间保持在在 1 毫秒以下</li><li>支持多达数万TB的堆大小</li><li>最少的手动配置</li></ul><p>为了保持最后一点，新的GC不需要手动配置代的大小、GC使用的线程数，或对象在年轻代中停留的时间。</p><h2 id="如何使用-jvm-gc" tabindex="-1"><a class="header-anchor" href="#如何使用-jvm-gc"><span>如何使用 JVM GC</span></a></h2><p>在Java 21中，分代ZGC是默认的垃圾收集器。为了顺利过渡，分代ZGC将与非分代ZGC一起提供，您可以通过以下方式进行配置：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 启用ZGC(默认为非分代)</span>
$ <span class="token function">java</span> <span class="token parameter variable">-XX:+UseZGC</span>

<span class="token comment"># 使用分代ZGC</span>
$ <span class="token function">java</span> <span class="token parameter variable">-XX:+UseZGC</span> <span class="token parameter variable">-XX:+ZGenerational</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您需要关闭分代ZGC，可以通过将加号（+）替换为减号（-）来实现：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 不使用分代ZGC</span>
$ <span class="token function">java</span> <span class="token parameter variable">-XX:+UseZGC</span> <span class="token parameter variable">-XX:-ZGenerational</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>计划在更晚的版本中完全删除非代ZGC。</p>`,12);function I(L,T){const t=o("ExternalLinkIcon");return s(),i("div",null,[d,p,e("ul",null,[e("li",null,[n("Java 11（"),e("a",h,[n("JEP 333"),a(t)]),n("）中引入了一个可扩展的低延迟垃圾收集器，称为ZGC")]),e("li",null,[n("Java 15（"),e("a",_,[n("JEP 377"),a(t)]),n("）中 ZGC 可用于生产")]),e("li",null,[n("现在，随着Java 21的出现，它已经发展成为一种分代GC（"),e("a",g,[n("JEP 439"),a(t)]),n("）")])]),u,v,e("p",null,[n("“"),e("a",C,[n("垃圾收集"),a(t)]),n("”的概念本质上是"),b,n("， 这可能导致如下潜在的错误：")]),m,G,e("ol",null,[e("li",null,[n("引用计数（"),e("a",f,[n("ReferenceCounting"),a(t)]),n("）")]),e("li",null,[n("标记和清除（"),e("a",k,[n("MarkAndSweep"),a(t)]),n("）")]),e("li",null,[n("复制（"),e("a",J,[n("StopAndCopy"),a(t)]),n("）")])]),Z,e("ul",null,[j,S,e("li",null,[w,n("：使用"),e("a",y,[n("仿射类型系统"),a(t)]),n(" 而不是GC，引入了所有权和借用，编译器在编译时检查内存安全性")]),x,e("li",null,[e("strong",null,[n("Java、"),e("a",M,[n("Python"),a(t)]),n(" 、Go、"),e("a",E,[n("C#"),a(t)]),n(" 、JavaScript")]),n("：自动内存管理，垃圾收集器负责释放内存")])]),V,X,e("p",null,[n("与单一的GC不同，"),e("a",z,[n("HotSpot JVM"),a(t)]),n("有5个GC可供选择：")]),P,A,e("ul",null,[e("li",null,[e("a",N,[n("Eclipse OpenJ9"),a(t)]),n(" 使用具有多个收集策略的分代并发GC")]),e("li",null,[e("a",B,[n("GraalVM"),a(t)]),n(" 有 Epsilon GC，它是一个 No-Op GC，完全不进行内存清理")])]),O,e("p",null,[e("a",R,[n("generational hypothesis"),a(t)]),n(" 观察到"),U,n("比"),K,n("更有可能“"),$,n("”，于是产生了分代假设。")]),H])}const F=r(c,[["render",I],["__file","jep439-generational-zgc.html.vue"]]);export{F as default};
