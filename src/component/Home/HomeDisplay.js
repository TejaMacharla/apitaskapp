import React from 'react';
const HomeDisplay = (props) => {//this is the functional component it is using for display purpose only
    const renderTable = ({listdata}) => {
        if(listdata.data){
            return listdata.data.map((item) => {//here we used map loop basically map iterates over the array
                return(//here we get the data 
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.email}</td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td><img src={item.avatar}/></td>
                    </tr>
                )
            })
        }
    }

    return(//here we are using some bootstrap classes.
        <div className="container">
            <center><h3>ListData</h3></center>
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>EMAIL</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>AVATAR</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)} 
                </tbody>
            </table>
        </div>
    )
}

export default HomeDisplay;//here export the file to Home.js