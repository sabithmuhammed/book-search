"use client";
import AdminAuthWrapper from "@/app/(admin)/AdminAuthWrapper";
import EditBookForm from "@/components/EditBookForm";
import React, { useState } from "react";

const editPage = async ({ params }: { params: { bookId: string } }) => {
    const [bookId, setBookId] = useState(params.bookId);
    return (
        <AdminAuthWrapper>
            <EditBookForm bookId={bookId} />
        </AdminAuthWrapper>
    );
};

export default editPage;
