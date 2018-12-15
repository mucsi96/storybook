import * as React from 'react';

interface Props {
  /**
   * Click event handler
   * @default null
   */
  onClick?: () => void;
}

export const Button: React.SFC<Props> = ({ children, onClick }) => (
  <button type="button" onClick={onClick}>
    {children}
  </button>
);
