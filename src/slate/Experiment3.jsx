import { useCallback, useState } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import styles from '../../styles/Wyswyg.module.css';
import { CustomEditor } from './utils/CustomEditor';
import { serializeHTML } from './utils/serialize';
import { Element } from './components/RenderElement';
import { Leaf } from './components/RenderLeaf';

function Experiment3() {
  const [editor] = useState(() => withReact(createEditor()));
  const [text, setText] = useState('');
  const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: 'Text something ...' }],
    },
  ];
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  return (
    <>
      <h2>Experiment 3 : Serializing(HTML)</h2>
      <p>
        <a href='https://gist.github.com/abhishekbhardwaj/168c13869ac043f070e954e0057dcbd7'>
          참고
        </a>
      </p>
      <p>
        Need :{' '}
        <a href='https://www.npmjs.com/package/escape-html'>escape-html</a>
      </p>
      <Slate
        editor={editor}
        value={initialValue}
        onChange={(value) => {
          const content = serializeHTML(value);
          setText(content);
        }}
      >
        <Editable
          className={styles.editor}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
        />
        <div>
          <button
            onMouseDown={(event) => {
              event.preventDefault();
              CustomEditor.toggleMark(editor, 'custom');
            }}
          >
            Change Mark
          </button>{' '}
          <button
            onMouseDown={(event) => {
              event.preventDefault();
              CustomEditor.toggleBlock(editor, 'correct');
            }}
          >
            Change Line
          </button>{' '}
        </div>
      </Slate>
      <strong>Serialize : </strong>
      {text}
    </>
  );
}

export default Experiment3;
