import React from 'react'
import { useTheme } from './ThemeContext'

export default function Footer() {
    const {theme} = useTheme();
    return (
        <footer id={theme}>
            sevara &copy;
        </footer>
    )
}