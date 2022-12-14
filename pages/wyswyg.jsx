import dynamic from 'next/dynamic';
import styles from '../styles/Wyswyg.module.css';
import styled from 'styled-components';

const Quill = dynamic(() => import('../src/editors/QuillPage'), {
  ssr: false,
});
const CKEditor = dynamic(() => import('../src/editors/CKEditorPage'), {
  ssr: false,
});
const Draftjs = dynamic(() => import('../src/editors/DraftjsPage'), {
  ssr: false,
});
const Slate = dynamic(() => import('../src/editors/SlatePage'), {
  ssr: false,
});
const TinyMCE = dynamic(() => import('../src/editors/TinyMCEPage'), {
  ssr: false,
});

const Line = styled.div`
  margin-top: 50px;
  height: 1px;
  background-color: black;
`;

export default function Wyswig() {
  return (
    <>
      <h3>๐ See Wysiwyg Editors Below</h3>
      <Slate />
      <Quill />
      <CKEditor />
      <Draftjs />
      <TinyMCE />
      <Line />
      <h3>โจ Refrences</h3>
      <ul className={styles.list}>
        <li>
          <a href='https://www.kindacode.com/article/popular-open-source-wysiwyg-editors-for-react/'>
            5 best open-source WYSIWYG editors for React (2022)
          </a>
        </li>
        <li>
          <a href='https://blog.dalgu.app/dev/2'>
            ๊ธฐ์  ๋ธ๋ก๊ทธ ์ํ contentEditable WYSIWYG ์๋ํฐ ์ ์๊ธฐ
          </a>
        </li>
        <li>
          <a href='https://jheo.io/blog/a-tales-of-two-editor/'>
            ๋ ์๋ํฐ ์ด์ผ๊ธฐ
          </a>
        </li>
      </ul>
    </>
  );
}
