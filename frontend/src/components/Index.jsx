import React, {useEffect} from 'react'

const Index = () => {
    useEffect(() => {
        document.title = 'Limpupa | Shop Online';
     }, [])
     
    return (
        <div>
            <h1>This is the homepage</h1>
        </div>
    )
}

export default Index
