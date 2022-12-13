import { useCallback, useState } from "react";

const changes = (Component) => {
    return (props) => {
        const [navhiden, setNavHiden] = useState('false')
        const [theme, setTheme] = useState('dark')

        const toggleTheme = useCallback(() => {
            setTheme(prev => prev === 'dark' ? 'light' : 'dark')
        }, [])

        const changeNav = useCallback(() => {
            setNavHiden(prev => prev === 'false' ? 'true' : 'false')
        }, [])
        return < Component
            {...{navhiden, changeNav, theme, toggleTheme}} 
            {...props}
                    />
    }
}

export default changes