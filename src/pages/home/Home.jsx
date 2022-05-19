import './Home.scss'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widgets/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import List from '../../components/list/Table'

const Home = () => {
  return (
    <div className="home">
        <div className="left">

        <Sidebar/>
        </div>
        <div className="right">

        <Navbar/>
        <div className="widgets">

        <Widget type={'users'}/>
         <Widget type={'order'}/>
        <Widget type={'earning'}/>
        <Widget type={'balance'}/> 
        </div>
        <div className="charts">
          <Featured/>
          <Chart/>
        </div>
        <div className="list-container">
          <List/>
        </div>
        </div>
    </div>
  )
}

export default Home