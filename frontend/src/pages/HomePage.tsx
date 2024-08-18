import {TabPane, Tab} from 'semantic-ui-react'
import CustomCard from "../layouts/CustomCard.tsx";

function HomePage() {
    const panes = [
        {
            menuItem: 'Heute',
            render: () => <TabPane attached={false}><CustomCard/></TabPane>,
        },
        {
            menuItem: 'Diese Woche',
            render: () => <TabPane attached={false}><CustomCard/></TabPane>,
        },
    ]

    return (
        <div className='py-5 text-center container'>
            <h3>Trends</h3>
            <Tab menu={{secondary: true, pointing: true}} panes={panes}/>
        </div>

    );
}

export default HomePage;