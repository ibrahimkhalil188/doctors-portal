import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {

    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col mx-12 mt-12">

                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 border-x-4 bg-base-100 text-base-content justify-items-center">

                        <li><Link to="myappointment">My Appointment</Link></li>
                        <li><Link to="myreview">My Reviews</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;