import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,f as e}from"./app-EG60UeKh.js";const p={},t=e(`<p>Java 9 引入了许多新特性，其中之一就是 JShell，这是一个交互式编程环境，也被称为 REPL（Read-Eval-Print Loop）。 JShell 的目标是使 Java 编程更加互动和易学，尤其是对于初学者和快速原型开发。</p><h2 id="jshell快速入门" tabindex="-1"><a class="header-anchor" href="#jshell快速入门" aria-hidden="true">#</a> JShell快速入门</h2><h3 id="启动jshell" tabindex="-1"><a class="header-anchor" href="#启动jshell" aria-hidden="true">#</a> 启动JShell</h3><p>打开终端，然后执行命令：<code>jshell</code>，执行效果如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>➜  <span class="token operator">~</span> jshell
<span class="token operator">|</span>  欢迎使用 <span class="token class-name">JShell</span> <span class="token operator">--</span> 版本 <span class="token number">9</span>
<span class="token operator">|</span>  要大致了解该版本<span class="token punctuation">,</span> 请键入<span class="token operator">:</span> <span class="token operator">/</span>help intro

jshell<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="帮助介绍-help-intro" tabindex="-1"><a class="header-anchor" href="#帮助介绍-help-intro" aria-hidden="true">#</a> 帮助介绍 /help intro</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jshell&gt; /help intro
|
|                                   intro
|                                   =====
|
|  使用 jshell 工具可以执行 Java 代码，从而立即获取结果。
|  您可以输入 Java 定义（变量、方法、类等等），例如：int x = 8
|  或 Java 表达式，例如：x + x
|  或 Java 语句或导入。
|  这些小块的 Java 代码称为“片段”。
|
|  这些 jshell 工具命令还可以让您了解和
|  控制您正在执行的操作，例如：/list
|
|  有关命令的列表，请执行：/help

jshell&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定义-变量、方法、类等等" tabindex="-1"><a class="header-anchor" href="#定义-变量、方法、类等等" aria-hidden="true">#</a> 定义（变量、方法、类等等）</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 定义变量</span>
jshell<span class="token operator">&gt;</span> <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">8</span>
x <span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token number">8</span>

<span class="token comment">// 定义方法</span>
jshell<span class="token operator">&gt;</span> <span class="token keyword">int</span> <span class="token function">square</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>&gt;     <span class="token keyword">return</span> num <span class="token operator">*</span> num<span class="token punctuation">;</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>&gt; <span class="token punctuation">}</span>
<span class="token operator">|</span>  已创建 方法 <span class="token function">square</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>

<span class="token comment">// 定义类</span>
jshell<span class="token operator">&gt;</span> <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Message</span><span class="token punctuation">{</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>&gt;     <span class="token keyword">private</span> <span class="token class-name">String</span> msg<span class="token punctuation">;</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>&gt;     <span class="token keyword">public</span> <span class="token class-name">Message</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>&gt;         <span class="token keyword">this</span><span class="token punctuation">.</span>msg <span class="token operator">=</span> msg<span class="token punctuation">;</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>&gt;     <span class="token punctuation">}</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>&gt;     <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>&gt;         <span class="token keyword">return</span> msg<span class="token punctuation">;</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>&gt;     <span class="token punctuation">}</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>&gt; <span class="token punctuation">}</span>
<span class="token operator">|</span>  已创建 类 <span class="token class-name">Message</span>

jshell<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行-表达式、调用方法" tabindex="-1"><a class="header-anchor" href="#执行-表达式、调用方法" aria-hidden="true">#</a> 执行（表达式、调用方法）</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 执行 Java 表达式</span>
jshell<span class="token operator">&gt;</span> x <span class="token operator">+</span> x
$<span class="token number">4</span> <span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token number">16</span>

<span class="token comment">// 调用方法</span>
jshell<span class="token operator">&gt;</span> <span class="token function">square</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
$<span class="token number">5</span> <span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token number">25</span>

    
<span class="token comment">// 创建类实例并调用方法</span>
jshell<span class="token operator">&gt;</span> <span class="token class-name">Message</span> messageObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Message</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, JShell!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
messageObj <span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token class-name">Message</span><span class="token annotation punctuation">@6d4b1c02</span>

jshell<span class="token operator">&gt;</span> messageObj<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

$<span class="token number">7</span> <span class="token operator">==</span><span class="token operator">&gt;</span> <span class="token string">&quot;Hello, JShell!&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="列出输入源条目-list" tabindex="-1"><a class="header-anchor" href="#列出输入源条目-list" aria-hidden="true">#</a> 列出输入源条目：/list</h3><p>执行后，可以看到之前在<code>jshell</code>中输入的内容清单：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>jshell<span class="token operator">&gt;</span> <span class="token operator">/</span>list

   <span class="token number">1</span> <span class="token operator">:</span> <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>
   <span class="token number">2</span> <span class="token operator">:</span> <span class="token keyword">int</span> <span class="token function">square</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
           <span class="token keyword">return</span> num <span class="token operator">*</span> num<span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
   <span class="token number">3</span> <span class="token operator">:</span> <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Message</span><span class="token punctuation">{</span>
           <span class="token keyword">private</span> <span class="token class-name">String</span> msg<span class="token punctuation">;</span>
           <span class="token keyword">public</span> <span class="token class-name">Message</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span><span class="token punctuation">{</span>
               <span class="token keyword">this</span><span class="token punctuation">.</span>msg <span class="token operator">=</span> msg<span class="token punctuation">;</span>
           <span class="token punctuation">}</span>
           <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
               <span class="token keyword">return</span> msg<span class="token punctuation">;</span>
           <span class="token punctuation">}</span>
       <span class="token punctuation">}</span>
   <span class="token number">4</span> <span class="token operator">:</span> x <span class="token operator">+</span> x
   <span class="token number">5</span> <span class="token operator">:</span> <span class="token function">square</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
   <span class="token number">6</span> <span class="token operator">:</span> <span class="token class-name">Message</span> messageObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Message</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, JShell!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token number">7</span> <span class="token operator">:</span> messageObj<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

jshell<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看定义-methods、-vars" tabindex="-1"><a class="header-anchor" href="#查看定义-methods、-vars" aria-hidden="true">#</a> 查看定义 /methods、/vars</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 查看定义的函数：/methods</span>
jshell<span class="token operator">&gt;</span> <span class="token operator">/</span>methods
<span class="token operator">|</span>    <span class="token keyword">int</span> <span class="token function">square</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>

jshell<span class="token operator">&gt;</span>
    
<span class="token comment">// 查看定义的变量：/vars</span>
jshell<span class="token operator">&gt;</span> <span class="token operator">/</span>vars
<span class="token operator">|</span>    <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">8</span>
<span class="token operator">|</span>    <span class="token keyword">int</span> $<span class="token number">4</span> <span class="token operator">=</span> <span class="token number">16</span>
<span class="token operator">|</span>    <span class="token keyword">int</span> $<span class="token number">5</span> <span class="token operator">=</span> <span class="token number">25</span>
<span class="token operator">|</span>    <span class="token class-name">Message</span> messageObj <span class="token operator">=</span> <span class="token class-name">Message</span><span class="token annotation punctuation">@6d4b1c02</span>
<span class="token operator">|</span>    <span class="token class-name">String</span> $<span class="token number">7</span> <span class="token operator">=</span> <span class="token string">&quot;Hello, JShell!&quot;</span>

jshell<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h3>`,17),l=[t];function o(c,i){return n(),a("div",null,l)}const d=s(p,[["render",o],["__file","jep222-jshell.html.vue"]]);export{d as default};
