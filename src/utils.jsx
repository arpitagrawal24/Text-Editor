import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaStrikethrough,
  FaSuperscript,
  FaSubscript,
  FaListOl,
  FaListUl,
  FaUndo,
  FaRedo,
  FaLink,
  FaUnlink,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaAlignJustify,
  FaIndent,
  FaOutdent,
} from "react-icons/fa";

export const fontList = [
  "Arial",
  "Verdana",
  "Times New Roman",
  "Garamond",
  "Georgia",
  "Courier New",
  "cursive",
];

export const buttonList = [
  {
    icon: <FaBold />,
    action: "bold",
  },
  {
    icon: <FaItalic />,
    action: "italic",
  },
  {
    icon: <FaUnderline />,
    action: "underline",
  },
  {
    icon: <FaStrikethrough />,
    action: "strikeThrough",
  },
  {
    icon: <FaSuperscript />,
    action: "superscript",
  },
  {
    icon: <FaSubscript />,
    action: "subscript",
  },
  {
    icon: <FaListOl />,
    action: "insertOrderedList",
  },
  {
    icon: <FaListUl />,
    action: "insertUnorderedList",
  },
  {
    icon: <FaUndo />,
    action: "undo",
  },
  {
    icon: <FaRedo />,
    action: "redo",
  },
  {
    icon: <FaLink />,
    action: "createLink",
  },
  {
    icon: <FaUnlink />,
    action: "unlink",
  },
  {
    icon: <FaAlignLeft />,
    action: "justifyLeft",
  },
  {
    icon: <FaAlignCenter />,
    action: "justifyCenter",
  },
  {
    icon: <FaAlignRight />,
    action: "justifyRight",
  },
  {
    icon: <FaAlignJustify />,
    action: "justifyFull",
  },
  {
    icon: <FaIndent />,
    action: "indent",
  },
  {
    icon: <FaOutdent />,
    action: "outdent",
  },
];