import banner from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({ selected, setSelected }) => {


    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }
    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} class="max-w-sm rounded-lg shadow-2xl" alt='dental chair' />
                    <div className='border hover:border-primary rounded-lg mx-12'>
                        <DayPicker
                            mode="single"
                            selected={selected}
                            onDayClick={setSelected}
                            footer={footer} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;