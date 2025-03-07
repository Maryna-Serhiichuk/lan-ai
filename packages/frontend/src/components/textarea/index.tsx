import styled from "@emotion/styled";
import { FC } from "react";
import { Field } from 'formik';

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

export const TextareaField = styled(Field)(({ theme }) => `
  box-sizing: border-box;
  width: 100%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 12px 12px 0 12px;
  color: ${theme?.textColor};
  background: ${theme?.input?.background};
  border: 1px solid ${theme?.input?.borderColor};

  &:hover {
    border-color: ${theme?.input?.borderColorHover};
  }

  &:focus {
    outline: 0;
    border-color: ${theme?.input?.borderColorFocus};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);

export const Textarea: FC = () => {
    return <TextareaField as="textarea" />;
}