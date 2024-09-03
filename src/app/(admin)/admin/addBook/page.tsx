import AddBookForm from "@/components/AddBookForm";
import React from "react";
import AdminAuthWrapper from "../../AdminAuthWrapper";

const page = () => {
    return (
        <AdminAuthWrapper>
            <div className="h-full w-full max-w-[1200px] mx-auto px-5 mt-4 flex justify-center items-center">
                <AddBookForm />
            </div>
        </AdminAuthWrapper>
    );
};

export default page;
