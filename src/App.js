import { useState } from 'react';
import HTTPSnippet from 'httpsnippet';
import { CopyBlock, a11yDark as theme } from 'react-code-blocks';
import './App.css';

function App() {
    const snippet = new HTTPSnippet({
        method: 'GET',
        url: 'http://mockbin.com/request',
    });

    const [lang, setLang] = useState('javascript');

    return (
        <div className="App">
            <header className="App-header">
                <h1>Hello React!</h1>
                <div
                    style={{
                        fontFamily: '"JetBrains Mono", monospace',
                        maxWidth: 1000,
                    }}
                >
                    <select
                        name="language"
                        id="language"
                        onChange={(event) => setLang(event.target.value)}
                        value={lang}
                    >
                        {[
                            'javascript_fetch',
                            'javascript_xhr',
                            'javascript_jquery',
                            'php',
                            'java',
                            'python',
                        ].map((language) => {
                            return (
                                <option key={language} value={language}>
                                    {language.includes('_')
                                        ? language.split('_').join(' - ')
                                        : language}
                                </option>
                            );
                        })}
                    </select>
                    <article>
                        <h3>
                            {lang.includes('_')
                                ? lang.split('_').join(' - ')
                                : lang}
                        </h3>
                        <CopyBlock
                            language={lang}
                            text={
                                lang.includes('_')
                                    ? snippet.convert(
                                          lang.substring(0, lang.indexOf('_')),
                                          lang.substring(
                                              lang.indexOf('_') + 1,
                                              lang.length
                                          )
                                      )
                                    : snippet.convert(lang)
                            }
                            theme={theme}
                            showLineNumbers={true}
                            wrapLines={true}
                            codeBlock
                        />
                    </article>
                </div>
            </header>
        </div>
    );
}

export default App;
