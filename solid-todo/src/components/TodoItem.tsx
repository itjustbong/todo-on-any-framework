import styles from './TodoItem.module.css';
import checkLine from '../assets/check-line.svg';
import checkBold from '../assets/check-bold.svg';
import arrowBottom from '../assets/arrow-bottom.svg';
import close from '../assets/close.svg';
import type { Todo } from '../types/todo';

interface TodoItemProps extends Todo {
  onToggle?: () => void;
  onUpPress?: () => void;
  onDownPress?: () => void;
  onDelete?: () => void;
}

const TodoItem = (props: TodoItemProps) => {
  return (
    <div class={styles.container}>
      <div class={styles.checkIconWrap} onClick={props.onToggle}>
        <img
          src={checkLine}
          class={styles.checkIcon}
          classList={{
            [styles.show]: !props.isDone,
          }}
        />
        <img
          src={checkBold}
          class={styles.checkIcon}
          classList={{
            [styles.show]: props.isDone,
          }}
        />
      </div>
      <p
        class={styles.text}
        classList={{
          [styles.doneText]: props.isDone,
        }}
      >
        {props.text}
      </p>
      <div class={styles.arrowIconsContainer}>
        <img
          src={arrowBottom}
          class={`${styles.arrowIcon} ${styles.arrowTop}`}
          onClick={props.onUpPress}
        />
        <img
          src={arrowBottom}
          class={styles.arrowIcon}
          onClick={props.onDownPress}
        />
      </div>
      <img src={close} class={styles.closeIcon} onClick={props.onDelete} />
    </div>
  );
};

export default TodoItem;
