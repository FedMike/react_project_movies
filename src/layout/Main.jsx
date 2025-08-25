import {Movies} from './Movies';

function Main(props) {
    return <main className="container content">
        {
            props.loading ? <h3>Content loading...</h3> : (
                <Movies movies={props}/>
            )
        }
        
    </main>
}

export {Main};