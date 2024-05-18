// Items.tsx
import React, { HTMLAttributes } from 'react';

interface ItemsProps<T> {
    items: T[];
    loading?: boolean;
    children: (item: T, index: number) => React.ReactNode;
    notFoundComponent?: React.ReactNode;
    loadingComponent?: React.ReactNode;
    className?: string;
}

const Items = <T,>({ items, loading, children, notFoundComponent, loadingComponent, className}: ItemsProps<T>): JSX.Element => {
    if (loading) {
        return <div className={className}>{loadingComponent || <div>Loading...</div>}</div>;
    }

    if (items.length === 0) {
        return <div className={className}>{notFoundComponent || <div>No items found</div>}</div>;
    }

    return (
        <div className={className}>
            {items.map(children)}
        </div>
    );
};

export default Items;
