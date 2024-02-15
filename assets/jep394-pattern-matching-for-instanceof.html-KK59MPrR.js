import{_ as n,o as s,c as a,f as e}from"./app-oMS-B6hX.js";const t={},p=e(`<h1 id="java-16-新特性-instanceof类型模式" tabindex="-1"><a class="header-anchor" href="#java-16-新特性-instanceof类型模式"><span>Java 16 新特性：instanceof类型模式</span></a></h1><p>Java 16 引入了<code>instanceof</code><strong>模式匹配</strong>的增强语法，用于更简便地判断对象是否是某个类的实例并进行相应的<strong>局部类型转换</strong>。</p><h2 id="instanceof-基础用法" tabindex="-1"><a class="header-anchor" href="#instanceof-基础用法"><span>instanceof 基础用法</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> someString <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> obj<span class="token punctuation">;</span>  <span class="token comment">// 强制类型转换</span>
    <span class="token comment">// ... </span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个<strong>强制转换</strong>通常是在 <code>instanceof</code> 检查之后 的第一件事，所以为什么不围绕它优化一下语法呢？</p><h2 id="instanceof-增强用法" tabindex="-1"><a class="header-anchor" href="#instanceof-增强用法"><span>instanceof 增强用法</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">String</span> someString<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token comment">// 这里 someString 超出了作用域</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>若 <code>instanceof</code> 检查成功，将自动将变量转换为指定类型</li><li>定义的变量实质上是一个<strong>局部变量</strong>，只在if语句的范围内可见</li></ol><h2 id="常见用法建议" tabindex="-1"><a class="header-anchor" href="#常见用法建议"><span>常见用法建议</span></a></h2><p>不仅如此！使用模式匹配，我们可以更灵活地应用条件测试。</p><ul><li><p>利用已定义的 obj，在不需要额外嵌套的情况下判断字符串是否以“Awesome”开头</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 以前</span>
<span class="token keyword">return</span> <span class="token punctuation">(</span>someObject <span class="token keyword">instanceof</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> someObject<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;Awesome&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 现在</span>
<span class="token keyword">return</span> someObject <span class="token keyword">instanceof</span> <span class="token class-name">String</span> someString <span class="token operator">&amp;&amp;</span> someString<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;Awesome&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>甚至在 equals 方法中，代码会更加简洁</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 以前</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">Integer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> value <span class="token operator">==</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">)</span> obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 现在</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">Integer</span> i<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> value <span class="token operator">==</span> i<span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>多么不同！现在代码简洁而直观。</p><h2 id="发展脉络" tabindex="-1"><a class="header-anchor" href="#发展脉络"><span>发展脉络</span></a></h2><p>该功能经历了2个预览版本（JDK 14中的JEP 305、JDK 15中的JEP 375），最终定稿于JDK 16中的JEP 394。</p>`,14),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","jep394-pattern-matching-for-instanceof.html.vue"]]);export{r as default};