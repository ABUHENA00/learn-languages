import React, { useEffect, useState } from 'react';
import MemberCart from '../../MemberCart/MemberCart';
import Member from '../Member/Member';
import './Club.css';

const Club = () => {
    const [members,setMembers] =useState([])
    const [membercart,setMembercart] =useState([]);
    useEffect(()=>{
        fetch('./students.JSON')
        .then(res => res.json())
        .then(data => setMembers(data))
    },[])
    const addToMemberCart = (member)=>{

        const newMembercart = [...membercart ,member]
                setMembercart(newMembercart);
    }
    return (
        <div className="club-container">
            <div className="members-container">
                {
                    members.map(member =><Member
                        member={member}
                        key={member.name}
                        addToMemberCart={addToMemberCart}
                    ></Member> )
                }

            </div>
            <div className="members-cart">
                <MemberCart
                membercart={membercart}
                ></MemberCart>

            </div>
            
        </div>
    );
};

export default Club;