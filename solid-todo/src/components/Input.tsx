import { createSignal } from 'solid-js';
import styles from './Input.module.css';

interface InputProps {
  placeholder?: string;
  onConfirm?: (text: string) => void;
}

const Input = (props: InputProps) => {
  const [text, setText] = createSignal('');

  return (
    <input
      class={styles.input}
      value={text()}
      onInput={(e) => {
        setText(e.currentTarget.value);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          if (e.isComposing) return;

          props.onConfirm?.(text());
          setText('');
        }
      }}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
