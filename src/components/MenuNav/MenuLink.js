import React from 'react';

const styles = {
    padding: 20,
    display: 'block',

    add: {
        color: '#FF0000',
        padding: 20,
    },

};


function MenuLink({ to, children, isActive }) {
    if (isActive) {
        return (
            <a style={styles.add} href={to} className="is-active">
                {children}
            </a>
        );
    }

    // return <div>{isActive && <a href={to}>{children}</a>}</div>;
    // return <div>{isActive ? <a href={to}>{children}</a> : ""}</div>;

    return <a style={styles} href={to}>{children}</a>;
}

export default MenuLink;