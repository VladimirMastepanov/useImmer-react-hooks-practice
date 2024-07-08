import React from 'react';
import { useImmer } from 'use-immer';
import cn from 'classnames';

const renderButton = (index, count, activeIndex, handleClick) => {
  const className = cn('btn m-1', {
    'btn-primary': activeIndex !== index,
    'btn-success': activeIndex === index,
  });

  return (
    <button
      key={index}
      type="button"
      className={className}
      onClick={handleClick}
    >
      {count}
    </button>
  );
};

const Buttons = ({ count = 3 }) => {
  const initButtonsState = {
    active: null,
    counts: Array(count).fill(0),
  };
  const [buttonsState, updateButtonsState] = useImmer(initButtonsState);
  const generateHandler = (index) => () => {
    updateButtonsState((state) => {
      state.active = index;
      state.counts[index] += 1;
    });
  };

  const { active, counts } = buttonsState;
  return counts.map((buttonCount, index) => (
    renderButton(index, buttonCount, active, generateHandler(index))
  ));
};

export default Buttons;

// const Buttons = ({ count = 3 }) => {
//   const active = 'blue';
//   const passive = 'green';

//   const ids = [];
//   for (let i = 1; i <= count; i += 1) {
//     ids.push(i);
//   }

//   const initialState = ids.reduce(((acc, id) => {
//     const button = {
//       [id]: {
//         value: 0,
//         status: passive,
//         id,
//       },
//     };
//     return { ...acc, ...button };
//   }), {});

//   const [buttons, updateButtons] = useImmer(initialState);

//   const hendleClick = (id) => {
//     updateButtons((draft) => {
//       ids.map((i) => {
//         if (id === i) {
//           draft[i].value += 1;
//           draft[i].status = active;
//         } else {
//           draft[i].status = passive;
//         }
//       });
//     });
//   };

//   return (
//     <>
//       {ids.map((el) => <button
//         className={cn('btn', 'm-1', {
//           'btn-primary': (buttons[el].status === passive),
//           'btn-success': (buttons[el].status === active),
//         })}
//         type="button"
//         key={el}
//         onClick={() => hendleClick(buttons[el].id)}
//       >
//         {buttons[el].value}
//       </button>,
//       )}
//     </>
//   );
// };

// export default Buttons;
