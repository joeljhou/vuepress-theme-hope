import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-7xpyYKRt.js";const t={},p=e(`<h1 id="java-14-新特性-switch表达式增强" tabindex="-1"><a class="header-anchor" href="#java-14-新特性-switch表达式增强" aria-hidden="true">#</a> Java 14 新特性：switch表达式增强</h1><p>Java 14（JEP 361）引入了 switch 表达式的新特性，其中包括了 &quot;箭头标签（<code>case ... -&gt;</code>）&quot; 和 <code>yield</code> 语句的增强， 同时支持 <code>Lambda</code> 语法，使得代码更加灵活、简洁，并为未来的<strong>模式匹配</strong>（JEP 305）特性做好了准备。</p><h2 id="传统的switch语句" tabindex="-1"><a class="header-anchor" href="#传统的switch语句" aria-hidden="true">#</a> 传统的switch语句</h2><p>首先，让我们回顾一下传统的switch语句，它们在处理多个条件时可能显得有些冗长：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">switch</span> <span class="token punctuation">(</span>day<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token constant">MONDAY</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token constant">FRIDAY</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token constant">SUNDAY</span><span class="token operator">:</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token constant">TUESDAY</span><span class="token operator">:</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token constant">THURSDAY</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token constant">SATURDAY</span><span class="token operator">:</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token constant">WEDNESDAY</span><span class="token operator">:</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>传统的 switch 语句存在以下问题：</p><ol><li>设计受到C和C++等低级语言的影响，且默认支持fall through语义</li><li>过多的<code>break</code>语句使得代码显得冗长</li></ol><h2 id="switch表达式增强" tabindex="-1"><a class="header-anchor" href="#switch表达式增强" aria-hidden="true">#</a> switch表达式增强</h2><h3 id="箭头标签-case-l" tabindex="-1"><a class="header-anchor" href="#箭头标签-case-l" aria-hidden="true">#</a> 箭头标签（case L -&gt;）</h3><ol><li>引入了一种新的开关标签&quot;<code>case L -&gt;</code>&quot;，用于表示只有一个分支的情况</li><li>允许每种情况下有多个常量，用逗号分隔</li><li>标签右侧的代码仅限于表达式、块或抛出异常throw语句</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">switch</span> <span class="token punctuation">(</span>day<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token constant">MONDAY</span><span class="token punctuation">,</span> <span class="token constant">FRIDAY</span><span class="token punctuation">,</span> <span class="token constant">SUNDAY</span> <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token constant">TUESDAY</span>                <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token constant">THURSDAY</span><span class="token punctuation">,</span> <span class="token constant">SATURDAY</span>     <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token constant">WEDNESDAY</span>              <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="局部变量独立作用域" tabindex="-1"><a class="header-anchor" href="#局部变量独立作用域" aria-hidden="true">#</a> 局部变量独立作用域</h3><p>在 Java 14 中，允许在每个分支中声明局部变量，避免块中变量命名冲突和误用。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>switch (day) {
    case MONDAY:
    case TUESDAY:
        int temp = ...     // &#39;temp&#39;的作用域延续到 }
        break;
    case WEDNESDAY:
    case THURSDAY:
        int temp2 = ...    // 不能将此变量命名为&#39;temp&#39;
        break;
    default:
        int temp3 = ...    // 不能将此变量命名为&#39;temp&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="switch表达式" tabindex="-1"><a class="header-anchor" href="#switch表达式" aria-hidden="true">#</a> switch表达式</h3><p>Switch 表达式被引入，允许将 <code>switch</code> 语句用作表达式，通过 <code>Lambda</code> 语法，根据输入值返回不同的结果。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 根据输入值\`k\`的不同，返回不同的字符串，并通过\`System.out.println\`打印结果</span>
<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">howMany</span><span class="token punctuation">(</span><span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span>  <span class="token number">1</span> <span class="token operator">-&gt;</span> <span class="token string">&quot;one&quot;</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span>  <span class="token number">2</span> <span class="token operator">-&gt;</span> <span class="token string">&quot;two&quot;</span><span class="token punctuation">;</span>
            <span class="token keyword">default</span> <span class="token operator">-&gt;</span> <span class="token string">&quot;many&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Switch表达式的常见形式如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">T</span> result <span class="token operator">=</span> <span class="token keyword">switch</span> <span class="token punctuation">(</span>arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token constant">L1</span> <span class="token operator">-&gt;</span> e1<span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token constant">L2</span> <span class="token operator">-&gt;</span> e2<span class="token punctuation">;</span>
    <span class="token keyword">default</span> <span class="token operator">-&gt;</span> e3<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Switch表达式是多态表达式（poly expression）。</p><p>多态性是指在编译时不确定具体类型，而在运行时确定类型的特性。</p></blockquote><h3 id="yield语句返回值" tabindex="-1"><a class="header-anchor" href="#yield语句返回值" aria-hidden="true">#</a> yield语句返回值</h3><p>允许在switch表达式中使用<code>yield</code>语句，而不是使用<code>break</code>语句，用于返回一个值，结束switch表达式的执行。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> numLetters <span class="token operator">=</span> <span class="token keyword">switch</span> <span class="token punctuation">(</span>day<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token constant">MONDAY</span><span class="token punctuation">,</span> <span class="token constant">FRIDAY</span><span class="token punctuation">,</span> <span class="token constant">SUNDAY</span> <span class="token operator">-&gt;</span> <span class="token number">6</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token constant">TUESDAY</span>                <span class="token operator">-&gt;</span> <span class="token number">7</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token constant">THURSDAY</span><span class="token punctuation">,</span> <span class="token constant">SATURDAY</span>     <span class="token operator">-&gt;</span> <span class="token number">8</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token constant">WEDNESDAY</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> temp <span class="token operator">=</span> <span class="token function">performComplexCalculation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 在这里进行一些复杂的计算</span>
        <span class="token keyword">yield</span> temp<span class="token punctuation">;</span>                              <span class="token comment">// 使用yield返回计算结果</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="发展脉络" tabindex="-1"><a class="header-anchor" href="#发展脉络" aria-hidden="true">#</a> 发展脉络</h2><p>JEP 361 在 JDK 14 中定稿之前，经过了 JDK 12 和 JDK 13 的预览版本。 虽然部分功能在早期版本中已经出现，但建议在 JDK 14 及以后的版本中使用，以获得更好的稳定性和支持。</p>`,25),c=[p];function o(l,i){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","jep361-switch-expressions.html.vue"]]);export{r as default};
