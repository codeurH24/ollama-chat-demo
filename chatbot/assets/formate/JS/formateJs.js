function formateJs(vars) {
    
    messagesDiv.innerHTML += codeHTML;
    if (/```\s*\n/.test(codeHTML)) {
        codeJavascriptEnCour = false;
        messagesDiv.innerHTML = messagesDiv.innerHTML.replace(
            /\`\`\`javascript.*\n([\s\S]*?)\`\`\`/g,
            `
            <button onclick="copyCode('code-block-${prismBlockCounter}')">Copier</button>
            <pre><code id="code-block-${prismBlockCounter}"  class="language-javascript">$1</code></pre>
            `
        );
        prismBlockCounter++;
        vars.callback();
    }
    codeHTML = '';
}
