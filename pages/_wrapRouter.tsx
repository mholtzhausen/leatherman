import { BrowserRouter as Router } from 'react-router-dom'

const Component = function(Comp){

    return function (){
        return (
            <Router>
                <Comp></Comp>
            </Router>
        )    
    }
}

export default Component