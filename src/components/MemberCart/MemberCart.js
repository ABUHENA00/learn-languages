import React from 'react';
import './MemberCart.css';

const MemberCart = (props) => {
    const {membercart} =props;
    let salaray =0;
    for(const member of membercart){
         salaray = salaray + member.salary;
}
    return (
        <div className="cart-details">
            <h3>Members Cart</h3>
            <h5>Member Added:{props.membercart.length}</h5>
            {
                membercart.map(member=><li>{member.name}</li>)
            }
            <h4>Total-Salary:${salaray}</h4>
        </div>
    );
};

export default MemberCart;