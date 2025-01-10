import '@styles/global.css';
import Nav from '@components/nav';
import Provider from '@components/provider';
export const metadata = {
    title: 'Promptopia',
    description: 'Promptopia is a platform for writing prompts and stories.'
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <div className='main'>
                    <div className='gradient' />
                </div>
                <main className='app'>
                    <Nav />
                    {children}
                </main>

            </body>

        </html>
    )
}

export default RootLayout