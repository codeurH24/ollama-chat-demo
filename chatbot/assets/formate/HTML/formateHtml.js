function formateHtml(vars) {
    
    codeHTML = codeHTML.replace(/<!DOCTYPE html>/g, '&lt;!DOCTYPE html&gt;');
    // tag ouvrante
    codeHTML = codeHTML.replace(/<([a-zA-Z]+)([^>]*?)>/g, '&lt;$1$2&gt;');
    // tag fermante
    codeHTML = codeHTML.replace(/<\/([a-zA-Z]+)>/g, '&lt;/$1&gt;');
    messagesDiv.innerHTML += codeHTML;

    if (/```\s*\n/.test(codeHTML)) {
        codeHtmlEnCour = false;

        messagesDiv.innerHTML = messagesDiv.innerHTML.replace(
            /\`\`\`html.*\n([\s\S]*?)\`\`\`/g,
            `
            <button onclick="copyCode('code-block-${prismBlockCounter}')">Copier</button>
            <button onclick="codePreview('code-preview-${prismBlockCounter}', 'code-block-${prismBlockCounter}')">Aperçu</button>
            <div>
                <pre><code id="code-block-${prismBlockCounter}"  class="language-html">$1</code></pre>
                <iframe id="code-preview-${prismBlockCounter}" class="hidden"></iframe>
            </div>
            `
        );
        prismBlockCounter++;
        vars.callback();
    }
    codeHTML = '';
}
