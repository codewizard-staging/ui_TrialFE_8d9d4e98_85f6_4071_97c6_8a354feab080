import React from "react";
import { Routes, Route } from "react-router-dom";
import {
InvestorCreate, InvestorEdit, InvestorView, 
Investors
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                        
                                                        <Route path="Investors/view/:id" element={<InvestorView {...props} title={'View Investor'} />} />
                        <Route path="Investors/edit/:id" element={<InvestorEdit {...props} title={'Edit Investor'} />} />
                        <Route path="Investors/create" element={<InvestorCreate {...props} title={'Create Investor'} />} />
                                                <Route path="/" element={<Investors {...props} title={'Investor'} nolistbar={true} />} />

                <Route path="/investor" element={<Investors {...props} title={'Investor'} />} />
        </Routes>
    )

};

export default Component;