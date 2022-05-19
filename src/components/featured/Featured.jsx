import './Featured.scss'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
const Featured = () => {
  return (
    <div className="featured">
        <div className="top">
            <div className="title">
                Total Revenue
            </div>
                <MoreVertOutlinedIcon className='menu'/>
           
        </div>
        <div className="bottom">
            <div className="progressbar" style={{width:'10rem',height:'10rem'}}>
            <CircularProgressbar value={85} text={'85%'} strokeWidth={3}/>;
            </div>
            <div className="rev">
                <div className="header">Total sales made today</div>
                <div className="amount">$500</div>
            </div>
            <div className="note">
                Previous transactions processing last Paymeny may not be included
            </div>
            <div className="targets">
                <div className="target">
                    <div className="head">
                        Target
                    </div>
                    <div className="charge" style={{color:'red'}}>
                        
                        <ArrowDropDownOutlinedIcon />
                        $10.6k
                    </div>
                </div>
                <div className="target">
                    <div className="head">
                        Last Week
                    </div>
                    <div className="charge" style={{color:'green'}}>
                    <ArrowDropUpOutlinedIcon/>
                        $10.6k
                    </div>
                </div>
                <div className="target">
                    <div className="head">
                        Last Month
                    </div>
                    <div className="charge" style={{color:'green'}}>
                    <ArrowDropUpOutlinedIcon/>
                        $10.6k
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Featured