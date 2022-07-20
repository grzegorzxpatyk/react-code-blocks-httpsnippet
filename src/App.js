import './App.css';
import { CopyBlock, solarizedDark as theme } from 'react-code-blocks';

function App() {
    const text =
        "const text = 'Hello, it is nice to meet you.';\nconst greeting = (text) => {\n\tconsole.log(text);\n}\ngreeting(x);";

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
                        text={text}
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
