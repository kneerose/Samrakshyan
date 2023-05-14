import React from 'react';
import cn from 'classnames';
import { CircularProgress } from '@mui/material';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: any;
    isLoading?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({ children, onClick, isLoading, icon, className }) => {
    return (
        <button type="button" onClick={onClick} className={cn('flex rounded-xl items-center lg:text-lg text-sm px-4 py-3', className)}>
            {icon && <span> {icon}</span>}
            <p className="text-center">{children}</p>
        </button>
    );
};

export default IconButton;
