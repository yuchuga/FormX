import { useState } from 'react'

const useToggle = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  };

  const handleClose = () => {
    setAnchorEl(null)
  };
  
  return {
    anchorEl,
    open,
    handleClick,
    handleClose
  }
};

export default useToggle;