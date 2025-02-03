function formateCss(vars) {
    messagesDiv.innerHTML += codeHTML;

    if (/```\s*\n/.test(codeHTML)) {
        codeCssEnCour = false;
        messagesDiv.innerHTML = messagesDiv.innerHTML.replace(
            /\`\`\`css.*\n([\s\S]*?)\`\`\`/g,
            `
            <button onclick="copyCode('code-block-${prismBlockCounter}')">Copier</button>
            <pre><code id="code-block-${prismBlockCounter}"  class="language-css">$1</code></pre>
            `
        );
        prismBlockCounter++;
        vars.callback();
    }
    codeHTML = '';
}