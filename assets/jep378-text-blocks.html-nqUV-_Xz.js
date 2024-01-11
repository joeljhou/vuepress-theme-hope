import{_ as n,o as s,c as a,f as e}from"./app-AttsnWAg.js";const t={},i=e(`<h1 id="java-15-新特性-文本块" tabindex="-1"><a class="header-anchor" href="#java-15-新特性-文本块" aria-hidden="true">#</a> Java 15 新特性：文本块</h1><p>Java 15（JEP 378）引入了文本块（Text Blocks）这一新特性，旨在简化多行字符串的表示，提高代码可读性，并减少在字符串中使用转义符的需求。 文本块通过引入三个双引号的<strong>胖分隔符</strong>（<code>&quot;&quot;&quot;</code>）来实现，同时支持转义序列，为开发人员提供更直观、易读的字符串处理方式。</p><h2 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手" aria-hidden="true">#</a> 快速上手</h2><p><strong>HTML示例</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 使用“一维”字符串文字</span>
<span class="token class-name">String</span> html <span class="token operator">=</span> <span class="token string">&quot;&lt;html&gt;\\n&quot;</span> <span class="token operator">+</span>
              <span class="token string">&quot;    &lt;body&gt;\\n&quot;</span> <span class="token operator">+</span>
              <span class="token string">&quot;        &lt;p&gt;Hello, world&lt;/p&gt;\\n&quot;</span> <span class="token operator">+</span>
              <span class="token string">&quot;    &lt;/body&gt;\\n&quot;</span> <span class="token operator">+</span>
              <span class="token string">&quot;&lt;/html&gt;\\n&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 使用“二维”文本块</span>
<span class="token class-name">String</span> html <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;
              &lt;html&gt;
                  &lt;body&gt;
                      &lt;p&gt;Hello, world&lt;/p&gt;
                  &lt;/body&gt;
              &lt;/html&gt;
              &quot;&quot;&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>SQL示例</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">// 使用“一维”字符串文字</span>
String query <span class="token operator">=</span> <span class="token string">&quot;SELECT \\&quot;EMP_ID\\&quot;, \\&quot;LAST_NAME\\&quot; FROM \\&quot;EMPLOYEE_TB\\&quot;\\n&quot;</span> <span class="token operator">+</span>
               <span class="token string">&quot;WHERE \\&quot;CITY\\&quot; = &#39;INDIANAPOLIS&#39;\\n&quot;</span> <span class="token operator">+</span>
               <span class="token string">&quot;ORDER BY \\&quot;EMP_ID\\&quot;, \\&quot;LAST_NAME\\&quot;;\\n&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 使用“二维”文本块</span>
String query <span class="token operator">=</span> <span class="token string">&quot;&quot;&quot;
               SELECT &quot;</span>EMP_ID<span class="token string">&quot;, &quot;</span>LAST_NAME<span class="token string">&quot; FROM &quot;</span>EMPLOYEE_TB<span class="token string">&quot;
               WHERE &quot;</span>CITY<span class="token string">&quot; = &#39;INDIANAPOLIS&#39;
               ORDER BY &quot;</span>EMP_ID<span class="token string">&quot;, &quot;</span>LAST_NAME<span class="token string">&quot;;
               &quot;&quot;&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Polyglot语言示例</strong></p><div class="language-polyglot line-numbers-mode" data-ext="polyglot"><pre class="language-polyglot"><code>// 使用“一维”字符串文字
ScriptEngine engine = new ScriptEngineManager().getEngineByName(&quot;js&quot;);
Object obj = engine.eval(&quot;function hello() {\\n&quot; +
                         &quot;    print(&#39;\\&quot;Hello, world\\&quot;&#39;);\\n&quot; +
                         &quot;}\\n&quot; +
                         &quot;\\n&quot; +
                         &quot;hello();\\n&quot;);

// 使用“二维”文本块
ScriptEngine engine = new ScriptEngineManager().getEngineByName(&quot;js&quot;);
Object obj = engine.eval(&quot;function hello() {\\n&quot; +
                         &quot;    print(&#39;\\&quot;Hello, world\\&quot;&#39;);\\n&quot; +
                         &quot;}\\n&quot; +
                         &quot;\\n&quot; +
                         &quot;hello();\\n&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编译时处理" tabindex="-1"><a class="header-anchor" href="#编译时处理" aria-hidden="true">#</a> 编译时处理</h2><p>文本块是String类型的常量表达式，类似于字符串字面量。然而，与字符串字面值不同，文本块的内容在编译时经历三个步骤的处理：<mark>行终止符的规范化</mark>、<mark>附带白色空间的移除</mark>和<mark>解释转义序列</mark>：</p><ol><li>转换内容的行终止符 <ul><li>行终止符从CR（\\u000D）和CRLF（\\u000D\\u000A）规范化为<code>LF（\\u000A）</code></li></ul></li><li>删除内容周围附带的白色空间（用于匹配Java源代码的缩进）</li><li>解释内容中的转义序列，执行解释作为最后一步开发人员可以编写转义序列，如\\n，而不会被前面的步骤修改或删除</li></ol><p>处理后的内容以<code>CONSTANT_String_info</code>形式记录在<strong>类文件的常量池</strong>中，运行时，文本块被计算为String的实例。</p><h2 id="新增转义序列" tabindex="-1"><a class="header-anchor" href="#新增转义序列" aria-hidden="true">#</a> 新增转义序列</h2><p>为了更精细地控制<mark>换行符</mark>和<mark>空格</mark>的处理，引入了两个新的转义序列：\\ &lt;line-terminator&gt; 和 \\s。</p><h3 id="换行符-line-terminator" tabindex="-1"><a class="header-anchor" href="#换行符-line-terminator" aria-hidden="true">#</a> 换行符 \\ &lt;line-terminator&gt;</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 传统方式</span>
<span class="token class-name">String</span> literal <span class="token operator">=</span> <span class="token string">&quot;Lorem ipsum dolor sit amet, consectetur adipiscing &quot;</span> <span class="token operator">+</span>
                 <span class="token string">&quot;elit, sed do eiusmod tempor incididunt ut labore &quot;</span> <span class="token operator">+</span>
                 <span class="token string">&quot;et dolore magna aliqua.&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 使用 \\ &lt;line-terminator\\&gt;</span>
<span class="token class-name">String</span> text <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>&quot;
              <span class="token class-name">Lorem</span> ipsum dolor sit amet<span class="token punctuation">,</span> consectetur adipiscing \\
              elit<span class="token punctuation">,</span> sed <span class="token keyword">do</span> eiusmod tempor incididunt ut labore \\
              et dolore magna aliqua<span class="token punctuation">.</span>\\
              <span class="token string">&quot;&quot;</span>&quot;<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Tips： 因为字符和传统字符串不允许嵌入换行符，所以\\ &lt;line-terminator&gt; 转义序列只适用于文本块</p></blockquote><h3 id="单个空格-s" tabindex="-1"><a class="header-anchor" href="#单个空格-s" aria-hidden="true">#</a> 单个空格 \\s</h3><p>新的 \\s 转义序列简单地转换为单个空格（\\u0020）</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 使用 \\s 保持固定长度</span>
<span class="token class-name">String</span> colors <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;
    red  \\s
    green\\s
    blue \\s
    &quot;&quot;&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>转义序列直到去除无意义的空格后才被解释，\\s 可以作为栅栏，防止尾随空格被去除。 在这个示例中，每行末尾使用 \\s 可以确保每行长度恰好为六个字符。</p><h2 id="文本块连接" tabindex="-1"><a class="header-anchor" href="#文本块连接" aria-hidden="true">#</a> 文本块连接</h2><p>文本块的连接是引入的一个方便的特性，使得字符串的拼接变得更加简洁。 在连接时，相邻的文本块将自动合并，无需显式使用加号连接操作符。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 字符串和文本块连接</span>
<span class="token class-name">String</span> code <span class="token operator">=</span> <span class="token string">&quot;public void print(Object o) {&quot;</span> <span class="token operator">+</span>
              <span class="token triple-quoted-string string">&quot;&quot;&quot;
                  System.out.println(Objects.toString(o));
              }
              &quot;&quot;&quot;</span><span class="token punctuation">;</span>
                      
<span class="token comment">// 相邻的文本块将自动合并，无需显式使用加号连接操作符</span>
<span class="token class-name">String</span> code <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;
              public void print(Object o) {
              &quot;&quot;&quot;</span>
              <span class="token triple-quoted-string string">&quot;&quot;&quot;
                  System.out.println(Objects.toString(o));
              }
              &quot;&quot;&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述示例中，两个相邻的文本块会自动连接，形成一个整体的字符串。 这种自动连接的特性让代码更加清晰，减少了冗余的拼接操作。</p><h2 id="文本块新方法" tabindex="-1"><a class="header-anchor" href="#文本块新方法" aria-hidden="true">#</a> 文本块新方法</h2><p>文本块引入了一些新方法，以便更方便地处理多行字符串：</p><ul><li><code>String::stripIndent()</code>：去除多行字符串的前导空格</li><li><code>String::translateEscapes()</code>：转义多行字符串中的转义字符</li><li><code>String::formatted()</code>：在文本块中使用占位符进行值替换</li><li><code>String::lines()：</code>：将多行字符串拆分为行的流，方便逐行处理。</li></ul>`,29),o=[i];function l(r,d){return s(),a("div",null,o)}const c=n(t,[["render",l],["__file","jep378-text-blocks.html.vue"]]);export{c as default};
