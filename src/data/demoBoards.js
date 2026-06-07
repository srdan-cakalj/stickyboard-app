// src/data/demoBoards.js

const board1Id = 'demo-board-1'
const board2Id = 'demo-board-2'
const board3Id = 'demo-board-3'

const emptyDateTimeValidValue = {
  day: null,
  month: null,
  year: null,
  hours: null,
  minutes: null,
  dayInWeek: null
}

const emptyDateTimeCurrentValue = {
  day: null,
  month: null,
  year: null,
  hours: null,
  minutes: null
}

const createSticker = ({
  stickerId,
  boardId,
  boardName,
  title,
  note,
  color,
  positionX,
  positionY,
  checked = false,
  checkedOrder = 0,
  dateTimeValidValue = emptyDateTimeValidValue,
  zIndex
}) => {
  return {
    stickerId,
    boardId,
    title,
    note,
    color,
    boardName,
    positionX,
    positionY,
    checked,
    checkedOrder,
    dateTimeValidValue,
    dateTimeCurrentValue: emptyDateTimeCurrentValue,
    isTryToSaveUnvalidDateTime: false,
    isDateTimeValid: dateTimeValidValue.day ? true : null,
    isAddDateTimeModalOpen: false,
    isDeleteModalOpen: false,
    isChangeColorModalOpen: false,
    zIndex
  }
}

export const demoBoards = [
  {
    boardId: board1Id,
    boardName: 'Development Tasks',
    isInput: false,
    isFocused: false,
    zIndexCounter: 11,
    checkedOrderCounter: 5,
    stickers: [
      createSticker({
        stickerId: 'demo-sticker-1',
        boardId: board1Id,
        boardName: 'Development Tasks',
        title: 'LocalStorage Sync',
        note: 'Persist boards and stickers across reloads.',
        color: 'var(--sticker-color1)',
        positionX: 300,
        positionY: 95,
        zIndex: 1
      }),
      createSticker({
        stickerId: 'demo-sticker-2',
        boardId: board1Id,
        boardName: 'Development Tasks',
        title: 'Drag & Drop Logic',
        note: 'Handle z-index and smooth dragging behavior.',
        color: 'var(--sticker-color2)',
        positionX: 700,
        positionY: 195,
        zIndex: 2
      }),
      createSticker({
        stickerId: 'demo-sticker-3',
        boardId: board1Id,
        boardName: 'Development Tasks',
        title: 'Pagination Handling',
        note: 'Calculate pages dynamically based on container height.',
        color: 'var(--sticker-color3)',
        positionX: 1120,
        positionY: 155,
        dateTimeValidValue: {
          day: 5,
          month: 2,
          year: 2026,
          hours: 8,
          minutes: 0,
          dayInWeek: 'Thursday',
          monthName: 'February'
        },
        zIndex: 3
      }),
      createSticker({
        stickerId: 'demo-sticker-4',
        boardId: board1Id,
        boardName: 'Development Tasks',
        title: 'State Optimization',
        note: 'Reduce unnecessary re-renders caused by shared state.',
        color: 'var(--sticker-color4)',
        positionX: 225,
        positionY: 570,
        dateTimeValidValue: {
          day: 2,
          month: 2,
          year: 2026,
          hours: 8,
          minutes: 0,
          dayInWeek: 'Monday',
          monthName: 'February'
        },
        zIndex: 4
      }),
      createSticker({
        stickerId: 'demo-sticker-5',
        boardId: board1Id,
        boardName: 'Development Tasks',
        title: 'Title UI Consistency',
        note: 'Align spacing, colors, and component behavior.',
        color: 'var(--sticker-color5)',
        positionX: 850,
        positionY: 655,
        dateTimeValidValue: {
          day: 1,
          month: 2,
          year: 2026,
          hours: 8,
          minutes: 0,
          dayInWeek: 'Sunday',
          monthName: 'February'
        },
        zIndex: 5
      }),
      createSticker({
        stickerId: 'demo-sticker-6',
        boardId: board1Id,
        boardName: 'Development Tasks',
        title: 'Error Fallbacks',
        note: 'Prevent crashes when data is missing or invalid.',
        color: 'var(--sticker-color6)',
        positionX: 1300,
        positionY: 570,
        zIndex: 6
      }),

      createSticker({
        stickerId: 'demo-sticker-7',
        boardId: board1Id,
        boardName: 'Development Tasks',
        title: 'React Router',
        note: 'Add basic routes for main app sections.',
        color: 'var(--sticker-color2)',
        positionX: 80,
        positionY: 540,
        checked: true,
        checkedOrder: 1,
        zIndex: 7
      }),
      createSticker({
        stickerId: 'demo-sticker-8',
        boardId: board1Id,
        boardName: 'Development Tasks',
        title: 'Z-Index Handling',
        note: 'Bring active sticker to the front while dragging.',
        color: 'var(--sticker-color3)',
        positionX: 300,
        positionY: 540,
        checked: true,
        checkedOrder: 2,
        zIndex: 8
      }),
      createSticker({
        stickerId: 'demo-sticker-9',
        boardId: board1Id,
        boardName: 'Development Tasks',
        title: 'Theme Variables',
        note: 'Create shared CSS variables for light and dark theme.',
        color: 'var(--sticker-color1)',
        positionX: 520,
        positionY: 540,
        checked: true,
        checkedOrder: 3,
        dateTimeValidValue: {
          day: 20,
          month: 1,
          year: 2026,
          hours: 11,
          minutes: 0,
          dayInWeek: 'Tuesday',
          monthName: 'January'
        },
        zIndex: 9
      }),
      createSticker({
        stickerId: 'demo-sticker-10',
        boardId: board1Id,
        boardName: 'Development Tasks',
        title: 'Context Refactor',
        note: 'Move shared board logic into context.',
        color: 'var(--sticker-color5)',
        positionX: 740,
        positionY: 540,
        checked: true,
        checkedOrder: 4,
        zIndex: 10
      }),
      createSticker({
        stickerId: 'demo-sticker-11',
        boardId: board1Id,
        boardName: 'Development Tasks',
        title: 'Initial Board Setup',
        note: 'Create default boards and sticker templates on first app load.',
        color: 'var(--sticker-color6)',
        positionX: 960,
        positionY: 540,
        checked: true,
        checkedOrder: 5,
        dateTimeValidValue: {
          day: 20,
          month: 1,
          year: 2026,
          hours: 9,
          minutes: 0,
          dayInWeek: 'Tuesday',
          monthName: 'January'
        },
        zIndex: 11
      })
    ]
  },
  {
    boardId: board2Id,
    boardName: 'Learning Plan',
    isInput: false,
    isFocused: false,
    zIndexCounter: 4,
    checkedOrderCounter: 1,
    stickers: [
      createSticker({
        stickerId: 'demo-sticker-12',
        boardId: board2Id,
        boardName: 'Learning Plan',
        title: 'React Practice',
        note: 'Repeat useState, useEffect and context with small examples.',
        color: 'var(--sticker-color5)',
        positionX: 170,
        positionY: 120,
        zIndex: 1
      }),
      createSticker({
        stickerId: 'demo-sticker-13',
        boardId: board2Id,
        boardName: 'Learning Plan',
        title: 'TypeScript Basics',
        note: 'Practice props, arrays and object types.',
        color: 'var(--sticker-color2)',
        positionX: 460,
        positionY: 165,
        dateTimeValidValue: {
          day: 15,
          month: 6,
          year: 2026,
          hours: 10,
          minutes: 0,
          dayInWeek: 'Monday',
          monthName: 'June'
        },
        zIndex: 2
      }),
      createSticker({
        stickerId: 'demo-sticker-14',
        boardId: board2Id,
        boardName: 'Learning Plan',
        title: 'Build Mini App',
        note: 'Create one small CRUD app before adding more portfolio features.',
        color: 'var(--sticker-color1)',
        positionX: 260,
        positionY: 395,
        zIndex: 3
      }),
      createSticker({
        stickerId: 'demo-sticker-15',
        boardId: board2Id,
        boardName: 'Learning Plan',
        title: 'Review Hooks',
        note: 'Repeat custom hooks and separate logic from components.',
        color: 'var(--sticker-color6)',
        positionX: 585,
        positionY: 420,
        checked: true,
        checkedOrder: 1,
        zIndex: 4
      })
    ]
  },
  {
    boardId: board3Id,
    boardName: 'Personal Notes',
    isInput: false,
    isFocused: false,
    zIndexCounter: 4,
    checkedOrderCounter: 1,
    stickers: [
      createSticker({
        stickerId: 'demo-sticker-16',
        boardId: board3Id,
        boardName: 'Personal Notes',
        title: 'Shopping List',
        note: 'Milk, bread, coffee.',
        color: 'var(--sticker-color6)',
        positionX: 170,
        positionY: 125,
        zIndex: 1
      }),
      createSticker({
        stickerId: 'demo-sticker-17',
        boardId: board3Id,
        boardName: 'Personal Notes',
        title: 'Appointment',
        note: 'Prepare questions and documents before the appointment.',
        color: 'var(--sticker-color2)',
        positionX: 475,
        positionY: 165,
        dateTimeValidValue: {
          day: 22,
          month: 6,
          year: 2026,
          hours: 9,
          minutes: 30,
          dayInWeek: 'Monday',
          monthName: 'June'
        },
        zIndex: 2
      }),
      createSticker({
        stickerId: 'demo-sticker-18',
        boardId: board3Id,
        boardName: 'Personal Notes',
        title: 'Ideas',
        note: 'Add mobile layout and keyboard shortcuts later.',
        color: 'var(--sticker-color3)',
        positionX: 260,
        positionY: 395,
        zIndex: 3
      }),
      createSticker({
        stickerId: 'demo-sticker-19',
        boardId: board3Id,
        boardName: 'Personal Notes',
        title: 'Clean Desk',
        note: 'Make the workspace ready before taking project screenshots.',
        color: 'var(--sticker-color4)',
        positionX: 600,
        positionY: 430,
        checked: true,
        checkedOrder: 1,
        zIndex: 4
      })
    ]
  }
]