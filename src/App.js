import './App.css';
import { CopyBlock, solarizedDark as theme } from 'react-code-blocks';
import HTTPSnippet from 'httpsnippet';

function App() {
    const snippet = new HTTPSnippet({
        method: 'GET',
        url: 'http://mockbin.com/request',
    });

    return (
        <div className="App">
            <header className="App-header">
                <p>Hello React!</p>
                <div
                    style={{
                        fontFamily: '"JetBrains Mono", monospace',
                    }}
                >
                    <CopyBlock
                        language="javascript"
                        text={snippet.convert('javascript', 'fetch')}
                        codeBlock
                        theme={theme}
                        showLineNumbers={true}
                    />
                </div>
            </header>
        </div>
    );
}

export default App;
