import React from 'react';
import { Button, IconButton } from '@material-tailwind/react';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export function DefaultPagination() {
    const [active, setActive] = React.useState(1);
    const totalPages = 5;

    const getItemProps = (index) => ({
        variant: active === index ? 'filled' : 'text',
        color: 'gray',
        onClick: () => setActive(index),
        'aria-label': `Go to page ${index}`
    });

    const next = () => {
        if (active < totalPages) {
            setActive(active + 1);
        }
    };

    const prev = () => {
        if (active > 1) {
            setActive(active - 1);
        }
    };

    return (
        <div className='flex items-center gap-4'>
            <Button
                variant='text'
                className='flex items-center gap-2 dark:text-white'
                onClick={prev}
                disabled={active === 1}
                aria-label='Previous page'
            >
                <ArrowLeftIcon strokeWidth={2} className='w-4 h-4 ' /> Previous
            </Button>
            <div className='flex items-center gap-2'>
                {Array.from({ length: totalPages }, (_, index) => (
                    <IconButton key={index + 1} {...getItemProps(index + 1)}>
                        {index + 1}
                    </IconButton>
                ))}
            </div>
            <Button
                variant='text'
                className='flex items-center gap-2 dark:text-white'
                onClick={next}
                disabled={active === totalPages}
                aria-label='Next page'
            >
                Next
                <ArrowRightIcon strokeWidth={2} className='w-4 h-4' />
            </Button>
        </div>
    );
}
