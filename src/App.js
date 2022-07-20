import { useState } from 'react';
import HTTPSnippet from 'httpsnippet';
import { CopyBlock, monokaiSublime as theme } from 'react-code-blocks';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    const snippet = new HTTPSnippet({
        method: 'GET',
        url: 'http://mockbin.com/request',
    });

    const [lang, setLang] = useState('javascript_fetch');

    return (
        <div className="App">
            <header className="App-header">
                <h1>Hello React!</h1>
                <div style={{ maxWidth: '80vw' }}>
                    <Form.Select
                        size="sm"
                        name="language"
                        id="language"
                        onChange={(event) => setLang(event.target.value)}
                        value={lang}
                        className="mb-3"
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
                    </Form.Select>
                    <article
                        style={{
                            fontFamily: '"JetBrains Mono", monospace',
                        }}
                    >
                        <h3>
                            {lang.includes('_')
                                ? lang.split('_').join(' - ')
                                : lang}
                        </h3>
                        <CopyBlock
                            language={
                                lang.includes('_') ? lang.split('_')[0] : lang
                            }
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
