import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Member.css';

const Member = (props) => {
    const {name,Id,post,age,salary,img}=props.member;
    const shoppingCartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="member">
             <div className="member-img">
               <img src={img} alt="" />
             </div>

             <div>
             <h2>Name:{name}</h2>
             <h3>Id:{Id}</h3>
             <h3>Post:{post}</h3>
             <h3>Age:{age}</h3>
             <h3>Salaray:${salary}</h3>
             <button onClick={()=>props.addToMemberCart(props.member)} className="btn-regular">{shoppingCartIcon}addToMemberCart</button>
             </div>

        </div>
    );
};

export default Member;