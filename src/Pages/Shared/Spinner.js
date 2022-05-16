import React from 'react';

const Spinner = () => {
    return (
        <div className='h-[75vh] flex justify-center items-center'>
            <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                <div class="animate-pulse flex space-x-6">
                    <div class="rounded-full bg-slate-700 h-20 w-20"></div>
                    <div class="flex-1 space-y-6 py-1">
                        <div class="h-20 bg-slate-700 rounded"></div>
                        <div class="space-y-3">
                            <div class="grid grid-cols-3 gap-4">
                                <div class="h-20 bg-slate-700 rounded col-span-2"></div>
                                <div class="h-20  bg-slate-700 rounded col-span-1"></div>
                            </div>
                            <div class="h-20  bg-slate-700 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Spinner;