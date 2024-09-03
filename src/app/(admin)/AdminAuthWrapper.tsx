"use client";

import Login from "@/components/Login";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useSelector } from "react-redux";

const AdminAuthWrapper = ({ children }: { children: React.ReactNode }) => {
    const {adminInfo} = useSelector((state:RootState)=>state.auth)

    if (!adminInfo) {
        return <Login />;
    }
    return children;
};

export default AdminAuthWrapper;
