import HireSection from '@/Component/Shared/Hero/HireSection/HireSection';
import ServingCategory from '@/Component/Shared/Hero/ServingCategory/ServingCategory';
import StudentGuardian from '@/Component/Shared/Hero/StudentGuardian/StudentGuardian';
import TuitionTypes from '@/Component/Shared/Hero/TuitionTypes/TuitionTypes';
import TutorStats from '@/Component/Shared/Hero/TutorStats/TutorStats';
import TutorWork from '@/Component/Shared/Hero/TutorWork/TutorWork';
import SignOut from '@/Component/Shared/SignOut/SignOut';
import { getServerSession } from 'next-auth';
import React from 'react';

const Home = async () => {
    const session = await getServerSession()
    return (
        <div>
            <div className='mt-40'>

                <div className=''>
                    {session ?
                        <div>
                            <h1 className='flex justify-center text-3xl font-bold '>This User Name:{session.user.name}</h1>
                            <SignOut></SignOut>
                            <HireSection></HireSection>
                            <TuitionTypes></TuitionTypes>
                            <TutorStats></TutorStats>
                            <StudentGuardian></StudentGuardian>
                            <TutorWork></TutorWork>
                            <ServingCategory></ServingCategory>

                        </div> :
                        <h1 className='flex justify-center text-3xl font-bold my-10  text-red-700'>You Are Not Sign In</h1>
                    }
                </div>

            </div>
        </div>
    );
};

export default Home;