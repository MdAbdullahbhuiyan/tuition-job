import React from "react";
import TuitionFilter from "../TuitionFilter/TuitionFilter";
import SignOut from "@/Component/Shared/SignOut/SignOut";
import { getServerSession } from "next-auth";

const Tuition = async () => {
    const session = await getServerSession();

    return (
        <div className="mt-40">
            {session ? (
                <div>
                    <div className="text-3xl flex justify-center text-green-800 font-bold mb-4">
                        Welcome {session.user?.name}
                    </div>

                    <TuitionFilter />
                    <SignOut />
                </div>
            ) : (
                <h1 className="text-center text-3xl text-red-700 font-bold my-10">
                    You are not signed in
                </h1>
            )}
        </div>
    );
};

export default Tuition;
