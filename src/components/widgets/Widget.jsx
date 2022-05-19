import './Widget.scss'
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
const Widget = ({type}) => {


    let data;


    switch (type) {
        case "users":
            data={

                title:'USERS',
                isMoney:false,
                link:'see more users',
                icon:<AccountBoxOutlinedIcon className="icon" style={{color:'red',backgroundColor:'#db8888'}} />
            }
            break;
        case "order":
            data={

                title:'ORDERS',
                isMoney:false,
                link:'View all orders ',
                icon:<ShoppingCartOutlinedIcon className="icon "  style={{color:'#fff',backgroundColor:'#cad61b'}}/>
            }
            break;
        case "earning":
            data={

                title:'EARNINGS',
                isMoney:true,
                link:'View net earnings ',
                icon:<MonetizationOnOutlinedIcon className="icon" style={{color:'green',backgroundColor:'#8fe953'}}/>
            }
            break;

        case "balance":
            data={

                title:'BALANCE',
                isMoney:true,
                link:'see details ',
                icon:<AccountBalanceWalletOutlinedIcon className="icon" style={{color:'#890ba8',backgroundColor:'#c37bf3'}}/>
            }
            break;
            default:
                break;

            
    }





  return (
    <div className='widget'>
        <div className="left">
            <h3 className="title">{data.title}</h3>
            <div className="order">{data.isMoney && '$'}100</div>
            <div className="link"> {data.link}</div>

        </div>
        <div className="right">
           <div className="percentage">
           <ArrowDropUpOutlinedIcon/>
            <p className="positive">20%</p>
           </div>
            

            {data.icon}
        </div>
    </div>
  )
}

export default Widget