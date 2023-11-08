import {Component} from 'react'

class SinupPage extends Component{
    render()  {

        return(

              <div>
                <h1>Hi,User</h1>
                <div className="bt-section">
                    Manage Clients

                    <hr
        style={{
         
          color: '#454545',
          borderColor: '#ffffff',
          height: '2px',
        }}
      />
           <div>
              <button>Show Clients</button>
              <button>Add Clients</button>
           </div>
                </div>
              </div>
        )
    }
}

export default SinupPage