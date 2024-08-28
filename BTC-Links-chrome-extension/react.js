// Function to inject a script into the page context
function injectScript(code) {
    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.textContent = code;
    (document.head || document.documentElement).appendChild(script);
    script.onload = function () {
      script.remove();
    };
  }
  
  const makeid = () => {
    return Math.floor(Math.random() * 100000000);
  }
  
  function updateIds(htmlString, number) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString;
  
    const elementsWithId = tempDiv.querySelectorAll('[id]');
    elementsWithId.forEach(element => {
      element.id += number;
    });
  
    const styleTags = tempDiv.querySelectorAll('style');
    styleTags.forEach(styleTag => {
      styleTag.innerHTML = styleTag.innerHTML.replace(/#(\w+)\s*\{/g, (match, id) => {
        return `#${id}${number}{`;
      });
    });
  
    // Convert HTML to JSX-compatible code
    return tempDiv.innerHTML.replace(/class=/g, 'className=').replace(/<br>/g, '<br />');
  }
  
  function updateIdsInJsCode(jsCode, number) {
    return jsCode.replace(/getElementById\s*\(\s*(['"`])(\w+)\1\s*\)/g, (match, quote, id) => {
      return `getElementById(${quote}${id}${number}${quote})`;
    });
  }
  
  async function replacebtclinkTags() {
    const spans = document.querySelectorAll('span');
  
    const fetchPromises = [];
    spans.forEach(span => {
      const btclinkRegex = /(&lt;|<)btclink\s*(.*?)\s*btclink(&gt;|>)/g;
      let match;
      while ((match = btclinkRegex.exec(span.innerHTML)) !== null) {
        let url = null;
        const url1 = match[2].trim();
  
        if (url1.startsWith("http"))
          url = url1;
        else if (url1.startsWith("ipfs://"))
          url = "https://ipfs.io/ipfs/" + url1.substring("ipfs://".length);
  
        if (!url) continue;
  
        fetchPromises.push(
          fetch(url)
            .then(response => {
              if (response.ok) {
                return response.json().then(result => {
                  const { html, js } = result.iframe;
                  return { span, match, htmlText: html, jsCode: js };
                });
              } else {
                console.error(`Failed to fetch ${url}: ${response.statusText}`);
                return null;
              }
            })
            .catch(error => {
              console.error(`Error fetching ${url}:`, error);
              return null;
            })
        );
      }
    });
  
    const results = await Promise.all(fetchPromises);
  
    results.forEach(result => {
      if (result) {
        const randomNumber = makeid();
        const newHtml = updateIds(result.htmlText, randomNumber);
  
        // Create a container div for the React component
        const containerDiv = document.createElement('div');
        const containerId = `react-container-${randomNumber}`;
        containerDiv.id = containerId;
        result.span.innerHTML = result.span.innerHTML.replace(result.match[0], `<div id="${containerId}"></div>`);
  
        // Inject React component
        setTimeout(() => {
          const newJS = updateIdsInJsCode(result.jsCode, randomNumber);
          injectScript(`
            (function() {
              ${newJS}
              const container = document.getElementById('${containerId}');
              if (container) {
                ReactDOM.render(React.createElement(ComponentNameHere, {}), container);
              }
            })();
          `);
        }, 500);
      }
    });
  }
  
  // Inject React and ReactDOM
  (function () {
    const reactScript = document.createElement('script');
    reactScript.src = 'https://unpkg.com/react/umd/react.production.min.js';
    document.head.appendChild(reactScript);
  
    const reactDOMScript = document.createElement('script');
    reactDOMScript.src = 'https://unpkg.com/react-dom/umd/react-dom.production.min.js';
    document.head.appendChild(reactDOMScript);
  })();
  
  // Run the function every 1 second
  setInterval(replacebtclinkTags, 1000);
  