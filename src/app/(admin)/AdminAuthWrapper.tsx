"use client";

import Login from "@/components/Login";
import { useState } from "react";

const AdminAuthWrapper = ({ children }: { children: React.ReactNode }) => {
    const [authenticated,setAuthenticated] = useState(true)

    if(!authenticated){

        return <Login />;
    }
    return children;
};

export default AdminAuthWrapper;
