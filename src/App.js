import './App.css';
import { CopyBlock, a11yDark as theme } from 'react-code-blocks';
import HTTPSnippet from 'httpsnippet';

function App() {
    const snippet = new HTTPSnippet({
        method: 'GET',
        url: 'http://mockbin.com/request',
    });

    return (
        <div className="App">
            <header className="App-header">
                <h1>Hello React!</h1>
                <div
                    style={{
                        fontFamily: '"JetBrains Mono", monospace',
                    }}
                >
                    {['javascript', 'php', 'java', 'python'].map((lang) => {
                        return (
                            <article>
                                <h3>{lang}</h3>
                                <CopyBlock
                                    key={lang}
                                    language={lang}
                                    text={snippet.convert(lang)}
                                    theme={theme}
                                    showLineNumbers={true}
                                    wrapLines={true}
                                    codeBlock
                                />
                            </article>
                        );
                    })}
                </div>
            </header>
        </div>
    );
}

export default App;
